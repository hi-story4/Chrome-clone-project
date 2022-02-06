const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  //padStart는 text에서 사용 가능. String이용하여 변환.
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
//getClock을 일단 실행시키면 시작부터 시간을 볼수 있다.
//곧바로 실행시키지 않으면 첫 1초간은 00:00:00을 보게 될것.
setInterval(getClock, 1000);
