const servicesModal = () => {
  const serviceModalBtns = document.querySelectorAll(".service-button");
  const modalServices = document.querySelector(".services-modal");
  const modalCLose = document.querySelector(".services-modal__close");
  const overlay = document.querySelector(".overlay");
  // console.log(serviceModalBtns);
  // console.log(modal);
  // console.log(modalCLose);
  serviceModalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      overlay.style.display = "block";
      modalServices.style.display = "block";
    });
  });
  modalCLose.addEventListener("click", () => {
    overlay.style.display = "none";
    modalServices.style.display = "none";
  });
};

export default servicesModal;
