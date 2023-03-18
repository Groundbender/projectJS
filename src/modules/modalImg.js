const modalImg = () => {
  const images = document.querySelectorAll(".document-overlay");
  const modal = document.querySelector(".modal-img");
  const closeBtn = document.querySelector("");

  images.forEach((img) => {
    img.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
};

export default modalImg;
