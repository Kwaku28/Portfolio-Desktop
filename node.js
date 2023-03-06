const vectors = document.querySelector(".vector");
const navLink = document.querySelector(".links");

vectors.addEventListener("click", () => {
  vectors.classList.toggle("active");
  navLink.classList.toggle("active");
});

