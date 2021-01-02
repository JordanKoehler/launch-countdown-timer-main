//DOM
const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

function add0(num) {
  return ("0" + num).slice(-2);
}

function animateFlip(num, newNum, section) {
  const topAnimate = document.querySelector("." + section + " .top");
  const bottom = document.querySelector("." + section + " .bottom");
  if (num != newNum) {
    topAnimate.classList.add("animationClassTop");
    setTimeout(function () {
      topAnimate.classList.remove("animationClassTop");
    }, 500);
  }
}
const time = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  days: 0,
  countdown: new Date("July 19 2021"),
};

function init() {
  const now = Date.parse(new Date());
  const timeLeft = time.countdown - now;
  newSeconds = add0(Math.floor((timeLeft / 1000) % 60));
  newMinutes = add0(Math.floor((timeLeft / 1000 / 60) % 60));
  newHours = add0(Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
  newDays = add0(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));

  time.seconds = newSeconds;
  time.minutes = newMinutes;
  time.hours = newHours;
  time.days = newDays;
  day.innerHTML = newDays;
  hour.innerHTML = newHours;
  minute.innerHTML = newMinutes;
  second.innerHTML = newSeconds;
}

function start() {
  setInterval(function () {
    const now = Date.parse(new Date());
    const timeLeft = time.countdown - now;

    function setTime() {
      //Grabbing new countdown numbers and store
      newSeconds = add0(Math.floor((timeLeft / 1000) % 60));
      newMinutes = add0(Math.floor((timeLeft / 1000 / 60) % 60));
      newHours = add0(Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
      newDays = add0(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));

      day.innerHTML = newDays;
      hour.innerHTML = newHours;
      minute.innerHTML = newMinutes;
      second.innerHTML = newSeconds;

      animateFlip(time.days, newDays, "days");
      animateFlip(time.seconds, newSeconds, "seconds");
      animateFlip(time.minutes, newMinutes, "minutes");
      animateFlip(time.hours, newHours, "hours");
      console.log(time.seconds, newSeconds);

      time.seconds = newSeconds;
      time.minutes = newMinutes;
      time.hours = newHours;
      time.days = newDays;
    }
    setTime();
  }, 1000);
}

init();

start();
