const scroll = () => {
  const scrollBtn = document.querySelector(".smooth-scroll");
  const offer = document.querySelector("#offer");
  const header = document.querySelector("#header");

  scrollBtn.style.display = "none";

  const checkPosition = () => {
    let scrolled = offer.getBoundingClientRect().top;
    let height = offer.getBoundingClientRect().height;
    let result = scrolled + height;
    if (result <= 0) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };
  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    header.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", checkPosition);
};

export default scroll;
