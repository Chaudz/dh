let scrollToZeroBtn = document.querySelector(".btn-scroll");
window.addEventListener("scroll", () => {
  if (scrollY > 700) {
    scrollToZeroBtn.style.display = "block";
  } else {
    scrollToZeroBtn.style.display = "none";
  }
});
scrollToZeroBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
