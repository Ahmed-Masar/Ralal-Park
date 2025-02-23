const navMenuBtn = document.querySelector(".nav__menu__btn"),
  navLinks = document.querySelector(".nav__links"),
  menuIcon = navMenuBtn.querySelector("i");

navMenuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".header__container p", scrollRevealOption);
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__iamge img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});
