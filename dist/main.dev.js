"use strict";

var iconHam = document.querySelector(".icon-ham");
var iconClose = document.querySelector(".icon-close");
var headerUl = document.querySelector(".header_ul");
document.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    toggleNav();
  }
});

function toggleNav() {
  iconHam.classList.toggle("icon-ham__hide");
  iconClose.classList.toggle("icon-close__show");
  headerUl.classList.toggle("icon-close__show");
  console.log(headerUl);
}