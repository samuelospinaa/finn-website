const $ = (selector) => document.querySelector(selector);

const phone = document.getElementsByClassName("phone");
const sections = document.querySelectorAll(".section");
const appleLogo = $(".icon-app");
const title = $("span");

function phoneAnimation() {
  const scrollPosition = window.scrollY;
  const endRotationScroll = 839;

  if (scrollPosition > endRotationScroll) {
    phone.style.position = "fixed";
    phone.style.top = "20%";
    phone.style.transform = "rotate(0deg)";
  }
  anime({
    targets: phone,
    translateY: scrollPosition,
    easing: "linear",
    duration: 0,
  });
}
window.addEventListener("scroll", phoneAnimation);
