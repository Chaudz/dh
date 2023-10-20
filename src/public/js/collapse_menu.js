const navMenu = document.querySelector(".header__nav");
const collapseMenuBtn = document.querySelector(".header-btn__menu-icon");

collapseMenuBtn.onclick = () => {
  navMenu.classList.toggle("active");
};
