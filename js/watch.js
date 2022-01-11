"use strict";
let timeId = null;

function printTime() {
  const date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  document.getElementById("result").innerHTML = `${hh < 10 ? `0${hh}` : hh}:${mm < 10 ? `0${mm}` : mm}:${ss < 10 ? `0${ss}` : ss}`;
}

function gotime() {
  timeId = setInterval(printTime, 1000);
  si = null;
}

function stoptime() {
  clearInterval(timeId);
  clearInterval(si);
}

const si = setInterval(printTime);
