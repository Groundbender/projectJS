import { animate } from "./helpers";

const modalImg = () => {
  const images = document.querySelectorAll(".sertificate-document");
  const modal = document.querySelector(".image-modal");
  const close = document.querySelector(".image-modal__close");
  const modalContent = document.querySelector(".image-modal__content");
  const overlay = document.querySelector(".overlay");

  const createImage = (target, num) => {
    let image = document.createElement("img");

    let source = target.closest("a").href;

    const trueSource =
      "." + source.substring(source.search("/images"), source.length);

    image.setAttribute("src", trueSource);
    image.setAttribute("alt", num);

    modalContent.append(image);

    modal.style.display = "block";
    overlay.style.display = "block";
    if (screen.width > 768) {
      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modalContent.style.opacity = progress;
        },
      });
    }

    console.log(image);
  };

  images.forEach((img, index) => {
    img.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target;
      let num = index;
      createImage(target, num);
    });
  });

  close.addEventListener("click", (e) => {
    modal.style.display = "none";
    overlay.style.display = "none";

    modalContent.innerHTML = "";
  });
};

export default modalImg;
