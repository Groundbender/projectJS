import { animate } from "./helpers";

const callbackModal = () => {
  const callbackBtn = document.getElementsByClassName("btn")[1];
  const callbackModal = document.querySelector(".header-modal");
  const callbackModalCLose = document.querySelector(".header-modal__close");
  const overlay = document.querySelector(".overlay");

  const blockScroll = () => {
    let scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollWidth}px`;
    document.body.style.overflow = "hidden";
  };

  const unBlockScroll = () => {
    document.body.style.paddingRight = `0px`;
    document.body.style.overflow = "";
  };

  const showModal = () => {
    // clearTimeout(modalTimerId);
    overlay.style.display = "block";
    callbackModal.style.display = "block";
    if (screen.width > 768) {
      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          callbackModal.style.opacity = progress;
        },
      });
    }
  };

  const closeModal = () => {
    overlay.style.display = "none";
    callbackModal.style.display = "none";
  };

  const showModalByScroll = () => {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      showModal();
      blockScroll();

      window.removeEventListener("scroll", showModalByScroll);
    }
  };

  callbackBtn.addEventListener("click", () => {
    showModal();
    blockScroll();
  });
  callbackModalCLose.addEventListener("click", () => {
    closeModal();
    unBlockScroll();
  });

  window.addEventListener("scroll", showModalByScroll);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      unBlockScroll();
    }
  });

  // const modalTimerId = setTimeout(() => {
  //   showModal();
  //   blockScroll();
  // }, 5000);
};

export default callbackModal;
