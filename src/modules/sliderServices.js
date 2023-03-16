import Swiper, { Navigation, Autoplay, Grid } from "swiper";

export const sliderServices = () => {
  // document.querySelector(".swiper-services").style.minWidth = "0";
  const swiperServices = new Swiper(".swiper-services", {
    modules: [Navigation, Grid, Autoplay],
    navigation: {
      nextEl: ".slider-serv-button-next",
      prevEl: ".slider-serv-button-prev",
    },
    grid: {
      rows: 1,
    },
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    slidesPerView: 2,
    breakpoints: {
      320: {
        loop: true,
        slidesPerView: 1,
      },
      576: {
        loop: true,
        slidesPerView: 1,
      },
      1200: {
        loop: true,
        slidesPerView: 2,
      },
    },
  });
};

export default sliderServices;
