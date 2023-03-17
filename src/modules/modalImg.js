const modalImg = () => {
  const images = document.querySelectorAll(".document-overlay");
  // console.log(images);

  images.forEach((img) => {
    img.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
};

export default modalImg;
