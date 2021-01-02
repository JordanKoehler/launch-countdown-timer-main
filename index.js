const dateCountdown = new Date("January 2 2021");

//DOM
const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const bottom = document.getElementById("bottom");

function add0(num) {
  return ("0" + num).slice(-2);
}

function animateFlip(num, section) {
  const topAnimate = document.querySelector("." + section + " .top");

  topAnimate.classList.add("animationClass");
  setTimeout(function () {
    topAnimate.classList.remove("animationClass");
  }, 500);
}

function setTime() {
  setInterval(function () {
    const now = Date.parse(new Date());
    const timeLeft = dateCountdown - now;

    //Grabbing new countdown numbers and store
    let seconds = add0(Math.floor((timeLeft / 1000) % 60));
    let minutes = add0(Math.floor((timeLeft / 1000 / 60) % 60));
    let hours = add0(Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
    let days = add0(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));

    second.innerHTML = seconds;
    animateFlip(days, "days");
    animateFlip(seconds, "seconds");
    animateFlip(minutes, "minutes");
    animateFlip(hours, "hours");
  }, 1000);
}

function init() {
  const now = Date.parse(new Date());
  const timeLeft = dateCountdown - now;
  let seconds = add0(Math.floor((timeLeft / 1000) % 60));
  let minutes = add0(Math.floor((timeLeft / 1000 / 60) % 60));
  let hours = add0(Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
  let days = add0(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));

  let prevSec = seconds;
  day.innerHTML = days;
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
  animateFlip(seconds, "seconds");
  setTime();
}
init();
