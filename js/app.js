const d = document;

d.addEventListener("click", (e) => {
  if (e.target.matches(".menu-btn") || e.target.matches(".menu-btn *")) {
    d.querySelector(".menu").classList.toggle("is-active");
    d.querySelector(".menu-btn").firstElementChild.classList.toggle("d-none");
    d.querySelector(".menu-btn").lastElementChild.classList.toggle("d-none");
  }
  if (e.target.matches(".menu a")) {
    d.querySelector(".menu").classList.remove("is-active");
    d.querySelector(".menu-btn").firstElementChild.classList.remove("d-none");
    d.querySelector(".menu-btn").lastElementChild.classList.add("d-none");
  }
});
