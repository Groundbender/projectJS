const validation = () => {
  // console.log("valid");
  const forms = document.querySelectorAll("form");

  console.log(forms);
  forms.forEach((form) => {
    let inputName = form.querySelector("input[name='fio']");
    let inputTel = form.querySelector("input[name='phone']");

    inputName.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z-\s]/g, "");
    });
    inputTel.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\+\d]/g, "");
    });
  });
};

export default validation;
