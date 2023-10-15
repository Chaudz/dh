window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 600) {
    document.querySelector(".header__wrapper").classList.add("active");
  } else {
    document.querySelector(".header__wrapper").classList.remove("active");
  }
});
