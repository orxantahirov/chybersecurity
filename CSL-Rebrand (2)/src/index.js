"use strict";

function toggleNav() {
  const navUL = document.getElementById("nav-ul");
  navUL.classList.toggle("show");
}

window.onload = () => {
  const hamburger = document.getElementById("hamburger");
  hamburger.addEventListener("click", () => {
    toggleNav();
  });
};
