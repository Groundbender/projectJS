const validation = () => {
  // console.log("valid");
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    let inputName = form.querySelector("input[name='fio']");
    let inputTel = form.querySelector("input[name='phone']");

    inputName.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z]/g, "");
      e.target.value.length < 2
        ? e.target.closest("input").classList.add("is-invalid")
        : e.target.closest("input").classList.remove("is-invalid");
    });
    inputName.addEventListener("blur", (e) => {
      if (e.target.value.length > 1) {
        e.target.value =
          e.target.value[0].toUpperCase() +
          e.target.value.slice(1).toLowerCase();
      }
      e.target.closest("input").classList.remove("is-invalid");
    });
    inputTel.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\+\d]/g, "");

      e.target.value.length < 6 || e.target.value.length > 16
        ? e.target.closest("input").classList.add("is-invalid")
        : e.target.closest("input").classList.remove("is-invalid");
    });
    inputTel.addEventListener("blur", (e) => {
      e.target.closest("input").classList.remove("is-invalid");
    });
  });
};

export default validation;
