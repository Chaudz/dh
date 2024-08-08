let listSlider = document.querySelectorAll(".header__banner__imgs .item");
let prevBtn = document.querySelector(".header__banner__btn--left");
let nextBtn = document.querySelector(".header__banner__btn--right");
let dots = document.querySelectorAll(".header__banner__nav-btn .radio");

let active = 0;

listSlider[active].classList.add("active");
dots[active].checked = true;

nextBtn.onclick = () => {
  active = active + 1 > listSlider.length - 1 ? 0 : active + 1;
  reloadSlider("next");
};

prevBtn.onclick = () => {
  active = active - 1 < 0 ? listSlider.length - 1 : active - 1;
  reloadSlider("prev");
};

let refreshInterval = setInterval(() => {
  nextBtn.click();
}, 3000);

function reloadSlider(type, index = 0) {
  listSlider.forEach((slide) => slide.classList.remove("active"));
  listSlider[active].classList.add("active");
  document.querySelector(`#radio${active}`).checked = true;
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    nextBtn.click();
  }, 3000);
}

dots.forEach((dot, index) => {
  dot.onclick = () => {
    active = index;
    reloadSlider("radio");
  };
});
