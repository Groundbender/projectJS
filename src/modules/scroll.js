const scroll = () => {
  const scrollBtn = document.querySelector(".smooth-scroll");
  const header = document.querySelector("#header");

  scrollBtn.style.display = "none";

  const checkPosition = () => {
    let scrolled = header.getBoundingClientRect().top;
    let height = header.getBoundingClientRect().height;
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
