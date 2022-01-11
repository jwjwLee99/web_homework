window.onload = function() {
  "use strict";
  const str = prompt("주민번호를 입력하세요.(단, '-'제외)");

  const firstCheck = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];

  let result = 0;

  for (let i = 0; i < str.length - 1; i++) {
    let intStr = parseInt(str.substring(i, i + 1));
    result += firstCheck[i] * intStr;
  }

  let secCheck = 11 - (result % 11);

  if (secCheck > 9) {
    secCheck %= 10;
  }

  let lastStr = parseInt(str.substring(12));
  let text = document.getElementById("outcome");
  if (secCheck == lastStr) {
    text.innerHTML="유효한 주민번호입니다.";
  } else {
    text.innerHTML="유효하지 않는 주민번호입니다.";
  }
}