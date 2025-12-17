let time = 600;
let timer;

function selectPlan(name){
  document.getElementById("planName").innerText = name;
  document.getElementById("cart").style.display = "block";
}

function openCart(){
  document.getElementById("cart").style.display = "block";
}

function closeCart(){
  document.getElementById("cart").style.display = "none";
}

function openQR(){
  document.getElementById("cart").style.display = "none";
  document.getElementById("qr").style.display = "block";
  startTimer();
}

function closeQR(){
  document.getElementById("qr").style.display = "none";
  clearInterval(timer);
  time = 600;
  document.getElementById("timer").innerText = "10:00";
}

function startTimer(){
  clearInterval(timer);
  timer = setInterval(()=>{
    time--;
    let m = Math.floor(time/60);
    let s = time % 60;
    document.getElementById("timer").innerText =
      `${m}:${s < 10 ? "0" : ""}${s
