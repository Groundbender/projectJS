import { animate } from "./helpers";

const servicesModal = () => {
  const serviceModalBtns = document.querySelectorAll(".service-button");
  const modalServices = document.querySelector(".services-modal");
  const modalCLose = document.querySelector(".services-modal__close");
  const overlay = document.querySelector(".overlay");

  serviceModalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      overlay.style.display = "block";
      modalServices.style.display = "block";
      let scrollWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollWidth}px`;
      document.body.style.overflow = "hidden";
      if (screen.width > 768) {
        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modalServices.style.opacity = progress;
          },
        });
      }
    });
  });

  modalCLose.addEventListener("click", () => {
    overlay.style.display = "none";
    modalServices.style.display = "none";
    document.body.style.paddingRight = `0px`;
    document.body.style.overflow = "";
  });
};

export default servicesModal;
