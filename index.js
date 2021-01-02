const dateCountdown = new Date("January 2 2021");
let time;

//DOM
const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const topAnimate = document.querySelector(".top");
const bottom = document.querySelector(".bottom");

function add0(num) {
  return ("0" + num).slice(-2);
}

function animateFlip(num) {
  if (num == num) {
    // topAnimate.style.rotationX = "-180deg";
    topAnimate.style.color = "orangered";
    console.log(num);
  }
}

function checkZero(num, time) {
  if (num < 0) {
    time.innerHTML = 00;
  } else {
    time.innerHTML = num;
  }
}

function setTime() {
  setInterval(function () {
    const now = Date.parse(new Date());
    const timeLeft = dateCountdown - now;
    let seconds = add0(Math.floor((timeLeft / 1000) % 60));
    let minutes = add0(Math.floor((timeLeft / 1000 / 60) % 60));
    let hours = add0(Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
    let days = add0(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));

    checkZero(days, day);
    checkZero(hours, hour);
    checkZero(minutes, minute);
    second.innerHTML = seconds;
  }, 1000);
  animateFlip(seconds);
}

function init() {
  const now = Date.parse(new Date());
  const timeLeft = dateCountdown - now;
  let seconds = add0(Math.floor((timeLeft / 1000) % 60));
  let minutes = add0(Math.floor((timeLeft / 1000 / 60) % 60));
  let hours = add0(Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
  let days = add0(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  day.innerHTML = days;
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
  setTime();
}
init();
