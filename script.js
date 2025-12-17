let selectedPlan = "";

function selectPlan(plan) {
  selectedPlan = plan;
  document.getElementById("planName").innerText = plan;
  document.getElementById("cart").style.display = "flex";
}

function openCart() {
  document.getElementById("cart").style.display = "flex";
}

function closeCart() {
  document.getElementById("cart").style.display = "none";
}

function openQR() {
  document.getElementById("cart").style.display = "none";
  document.getElementById("qr").style.display = "flex";
  startTimer();
}

function closeQR() {
  document.getElementById("qr").style.display = "none";
}

let time = 600;
function startTimer() {
  const timerEl = document.getElementById("timer");
  timerEl.innerText = "10:00";

  const interval = setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    timerEl.innerText =
      min + ":" + (sec < 10 ? "0" + sec : sec);

    if (time <= 0) {
      clearInterval(interval);
      timerEl.innerText = "Expired";
    }
    time--;
  }, 1000);
}

function submitPayment() {
  alert(
    "Payment received!\nPlan: " +
      selectedPlan +
      "\nWe will contact you shortly."
  );
  closeQR();
}let selectedPlan = "";

function selectPlan(plan) {
  selectedPlan = plan;
  document.getElementById("planName").innerText = plan;
  document.getElementById("cart").style.display = "flex";
}

function openCart() {
  document.getElementById("cart").style.display = "flex";
}

function closeCart() {
  document.getElementById("cart").style.display = "none";
}

function openQR() {
  document.getElementById("cart").style.display = "none";
  document.getElementById("qr").style.display = "flex";
  startTimer();
}

function closeQR() {
  document.getElementById("qr").style.display = "none";
}

let time = 600;
function startTimer() {
  const timerEl = document.getElementById("timer");
  timerEl.innerText = "10:00";

  const interval = setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    timerEl.innerText =
      min + ":" + (sec < 10 ? "0" + sec : sec);

    if (time <= 0) {
      clearInterval(interval);
      timerEl.innerText = "Expired";
    }
    time--;
  }, 1000);
}

function submitPayment() {
  alert(
    "Payment received!\nPlan: " +
      selectedPlan +
      "\nWe will contact you shortly."
  );
  closeQR();
}
