const daysEl = document.getElementById("days")

const hoursEl = document.getElementById("hours")

const minsEl = document.getElementById("mins")

const secEl = document.getElementById("sec")

const birthDay ='24 dec 2023';

function countdown(){

  const birthDayDate = new Date(birthDay);

  const currentDate = new Date();

  const totalSeconds = (birthDayDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);

  const hours = Math.floor(totalSeconds / 3600) % 24;

  const mins = Math.floor(totalSeconds / 60) %60;

  const seconds = Math.floor(totalSeconds) % 60;

  // console.log(days, hours, mins, seconds);
  // console.log(totalSeconds);

  daysEl.innerHTML = days+ " Days";

  hoursEl.innerHTML = hours+ " Hours";

  minsEl.innerHTML = mins+ " mins";

  secEl.innerHTML = seconds+ " seconds";

  // check if countdown is over
  if (totalSeconds <= 0) {
    // clear the interval
    clearInterval(interval);
    // redirect the page
    window.location.href="./birthdaycake.html";
    
  }
}

// run the countdown function every second
var interval = setInterval(countdown, 1000);
