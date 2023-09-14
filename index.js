"use strict";

let loginDiv = document.getElementById("loginDiv"),
  registerDiv = document.getElementById("registerDiv"),
  menuDiv = document.getElementById("menuDiv"),
  menuDisable = document.getElementById("menuDisable");

let registerBtn = document.getElementById("registerBtn"),
  loginBtn = document.getElementById("loginBtn"),
  menuBtn = document.getElementById("menuBtn");

let loginHead = document.getElementById("loginHead"),
  registerHead = document.getElementById("registerHead");

registerDiv.style.display = "none";

function showRegisterDiv() {
  setTimeout(() => {
    loginDiv.style.display = "none";
    registerDiv.style.display = "block";
  }, 200);
}
registerBtn.addEventListener("click", showRegisterDiv);

function showLoginDiv() {
  setTimeout(() => {
    registerDiv.style.display = "none";
    loginDiv.style.display = "block";
  }, 200);
}
const showRegHead = () => {
  if ((registerDiv.style.display = "none")) {
    registerDiv.style.display = "block";
    loginDiv.style.display = "none";
  }
}
const showLogHead = () => {
  if ((loginDiv.style.display = "none")) {
    loginDiv.style.display = "block";
    registerDiv.style.display = "none";
  }
}
const showMenu = () => {
  menuDiv.style.display = "block";
  setTimeout(() => {
    menuDiv.classList.add("menuClicked");
  }, 100);
}
const closeMenu = () => {
  menuDiv.style.display = "none";
  menuDiv.classList.remove("menuClicked");
}
// menuDisable.addEventListener("click", )
// window.onload = menuDiv.classList.remove("menuClicked");
