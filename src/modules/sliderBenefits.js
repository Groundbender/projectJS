import Swiper, { Navigation, Autoplay } from "swiper";

export const swiperFuncBenefits = () => {
  // console.log("swiper");

  document.querySelector(".swiper-wrapper").margin = "auto";
  const slider = new Swiper(".swiper-benefits", {
    modules: [Navigation, Autoplay],
    slidesPerView: 3,
    loop: true,
    slidesOffsetBefore: 120,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      576: {
        slidesPerView: 3,
      },
    },
  });
};
