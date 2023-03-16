const callbackModal = () => {
  const callbackBtn = document.getElementsByClassName("btn")[1];
  const callbackModal = document.querySelector(".header-modal");
  const callbackModalCLose = document.querySelector(".header-modal__close");
  const overlay = document.querySelector(".overlay");

  callbackBtn.addEventListener("click", () => {
    overlay.style.display = "block";
    callbackModal.style.display = "block";
  });
  callbackModalCLose.addEventListener("click", () => {
    overlay.style.display = "none";
    callbackModal.style.display = "none";
  });
};

export default callbackModal;
