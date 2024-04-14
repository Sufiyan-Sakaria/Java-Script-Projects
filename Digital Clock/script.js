let hrs = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");

setInterval(() => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hrs.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
});
