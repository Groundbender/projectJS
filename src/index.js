import { swiperFuncBenefits } from "./modules/sliderBenefits";
import { sliderServices } from "./modules/sliderServices";
import servicesModal from "./modules/servicesModal";
import callbackModal from "./modules/callbackModal";
import scroll from "./modules/scroll";
import modalImg from "./modules/modalImg";
import timer from "./modules/timer";
import calc from "./modules/calc";
import validation from "./modules/validation";
import sendForm from "./modules/sendForm";
swiperFuncBenefits();
sliderServices();
servicesModal();
callbackModal();
scroll();
modalImg();
timer("21 marth 2023");
calc();
validation();

if (document.body.classList.contains("okna")) {
  sendForm({ formID: "form1", someElem: [] });
  sendForm({ formID: "form2", someElem: [] });
  sendForm({ formID: "callback-form-modal", someElem: [] });
  sendForm({ formID: "application-form-modal", someElem: [] });
}
if (document.body.classList.contains("balkony")) {
  sendForm({
    formID: "form3",
    someElem: [
      {
        id: "calc-total",
      },
    ],
  });
  sendForm({
    formID: "form4",
    someElem: [
      {
        id: "calc-total",
      },
    ],
  });
  sendForm({
    formID: "callback-form-modal2",
    someElem: [
      {
        id: "calc-total",
      },
    ],
  });
  sendForm({
    formID: "application-form-modal2",
    someElem: [
      {
        id: "calc-total",
      },
    ],
  });
}

if (document.body.classList.contains("kuhni")) {
  sendForm({ formID: "form5", someElem: [] });
  sendForm({ formID: "form6", someElem: [] });
  sendForm({ formID: "callback-form-modal3", someElem: [] });
  sendForm({ formID: "application-form-modal3", someElem: [] });
}
