const vectors = document.querySelector(".vector");
const navLink = document.querySelector(".links");

vectors.addEventListener("click", () => {
  vectors.classList.toggle("active");
  navLink.classList.toggle("active");
});

document.querySelectorAll("ul.links > li").forEach((n) =>
  n.addEventListener("click", () => {
    vectors.classList.remove("active");
    navLink.classList.remove("active");
  })
);

