let listSlider = document.querySelectorAll(".header__banner__imgs .item");
let prevBtn = document.querySelector(".header__banner__btn--left");
let nextBtn = document.querySelector(".header__banner__btn--right");
let dots = document.querySelectorAll(".header__banner__nav-btn .radio");

let active = 0;
nextBtn.onclick = () => {
  active = active + 1 > listSlider.length - 1 ? 0 : active + 1;
  reloadSlider("next");
};
prevBtn.onclick = () => {
  active = active - 1 < 0 ? listSlider.length - 1 : active + -1;
  reloadSlider("prev");
};

let refreshInterval = setInterval(() => {
  nextBtn.click();
}, 3000);
function reloadSlider(type, index = 0) {
  if (type == "next") {
    if (active == 0) {
      listSlider[listSlider.length - 1].classList.remove("active");
      listSlider[active].classList.add("active");
    } else {
      listSlider[active - 1].classList.remove("active");
      listSlider[active].classList.add("active");
    }
  }
  if (type == "prev") {
    if (active == listSlider.length - 1) {
      listSlider[0].classList.remove("active");
      listSlider[active].classList.add("active");
    } else {
      listSlider[active + 1].classList.remove("active");
      listSlider[active].classList.add("active");
    }
  }
  if (type == "radio") {
    listSlider[active].classList.remove("active");
    active = index;
    listSlider[active].classList.add("active");
  }
  document.querySelector(`#radio${active}`).checked = true;
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    nextBtn.click();
  }, 3000);
}

dots.forEach((dot, index) => {
  dot.onclick = () => {
    reloadSlider("radio", index);
  };
});
