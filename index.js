const newYear = Date.parse(new Date().getFullYear() + 1, 0, 1);
let time;

//DOM
const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

function add0(num) {
  return ("0" + num).slice(-2);
}

function setTime() {
  setInterval(function () {
    const now = Date.parse(new Date());
    const timeLeft = newYear - now;
    let seconds = add0(Math.floor((timeLeft / 1000) % 60));
    let minutes = add0(Math.floor((timeLeft / 1000 / 60) % 60));
    let hours = add0(Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
    let days = add0(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
  }, 1000);
}

function init() {
  const now = Date.parse(new Date());
  const timeLeft = newYear - now;
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
