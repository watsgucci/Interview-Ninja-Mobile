const singlePlayerLink = document.querySelector(".li-single-player");
const multiPlayerLink = document.querySelector(".li-multi-player");
const settingsLink = document.querySelector(".li-settings");

singlePlayerLink.addEventListener("click", buttonAnimation);

function buttonAnimation(event) {
  event.preventDefault();
  singlePlayerLink.className = "animate__animated animate__fadeOutUp";
  multiPlayerLink.className = "animate__animated animate__fadeOutUp";
  settingsLink.className = "animate__animated animate__fadeOutUp";

  setTimeout(function () {
    window.location.href = "singlePlayer.html";
  }, 1000);
}
