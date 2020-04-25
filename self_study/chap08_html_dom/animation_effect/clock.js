const interTime = 500;
function getCurTime() {
  curTime = new Date();
  hour = curTime.getHours();
  min = curTime.getMinutes();
  sec = curTime.getSeconds();
  current = document.getElementById("current_time");
  current.innerHTML = hour + "시 " + min + "분 " + sec + "초";
}
// conTime = new Date();
//       setInterval(() => {
//         nowTime = new Date();
//         now_hours = nowTime.getHours();
//         now_mins = nowTime.getMinutes();
//         now_seconds = nowTime.getSeconds();
//         now_clock = document.getElementById("clock");
//         now_clock.innerText =
//           now_hours -
//           conTime.getHours() +
//           "시 " +
//           (now_mins - conTime.getMinutes()) +
//           "분 " +
//           (now_seconds - conTime.getSeconds()) +
//           "초 입니다.";
//       }, 500);

setInterval(getCurTime, interTime);
