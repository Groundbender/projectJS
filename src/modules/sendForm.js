const sendForm = ({ formID, someElem = [] }) => {
  const form = document.getElementById(formID);
  const statusBLock = document.createElement("div");
  const errorText = "&#10060;" + " Упс, что-то пошло не так...";
  const successText = "&#10004;&#65039;" + " Спасибо за заявку!";
  const loadText = `<div class="loadingio-spinner-spin-agswc9pm3i"><div class="ldio-17h9ep7etlj">
  <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
  </div></div>
  `;
  statusBLock.style.textAlign = "center";
  statusBLock.style.margin = "10px";
  const forms = document.querySelectorAll("form");

  const validateSubmit = (list) => {
    let success = true;
    list.forEach((input) => {
      if (input.name === "fio") {
        input.value = input.value.trim();
        if (!/[а-яА-Яa-zA-Z-\s]{2,}/g.test(input.value)) {
          success = false;
          isInvalid(input, success);
        }
      }

      if (input.name === "phone") {
        if (!/^([+]?[0-9]{6,16})$/g.test(input.value)) {
          success = false;
          isInvalid(input, success);
        }
      }
    });
    return success;
  };

  const isInvalid = (elem, status) => {
    if (!status) {
      elem.classList.add("is-invalid");
    }

    return elem;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };
  const submitForm = () => {
    const formElements = form.querySelectorAll("input[type='text']");
    const formData = new FormData(form);
    const formBody = {};

    let calcTotal = document.getElementById("calc-total");

    statusBLock.innerHTML = loadText;
    form.append(statusBLock);

    // formData.forEach((val, key) => {
    //   formBody[key] = val;
    // });
    let json = Object.fromEntries(formData.entries());
    console.log(json);

    if (document.body.classList.contains("balkony")) {
      if (calcTotal.value !== "" && calcTotal.value !== "0") {
        someElem.forEach((elem) => {
          const element = document.getElementById(elem.id);
          formBody[elem.id] = element.value + "рублей";
        });
      }
    }
    if (validateSubmit(formElements)) {
      sendData(json).then((data) => {
        statusBLock.innerHTML = successText;

        setTimeout(() => {
          statusBLock.innerHTML = "";
        }, 5000);
        formElements.forEach((input) => {
          input.value = "";
        });
      });
    } else {
      statusBLock.innerHTML = errorText;

      setTimeout(() => {
        statusBLock.innerHTML = "";
      }, 5000);
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    submitForm();
  });
};

export default sendForm;
