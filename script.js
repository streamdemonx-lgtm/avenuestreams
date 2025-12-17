let selectedPlan = "";

function openCart() {
  document.getElementById("cart").style.display = "flex";
}

function closeCart() {
  document.getElementById("cart").style.display = "none";
}

function selectPlan(plan) {
  selectedPlan = plan;
  document.getElementById("planName").innerText = plan;
  openCart();
}

function openQR() {
  document.getElementById("cart").style.display = "none";
  document.getElementById("qr").style.display = "flex";
  startTimer();
}

function closeQR() {
  document.getElementById("qr").style.display = "none";
}

function submitPayment() {
  alert("Payment received! Our team will contact you shortly.");
  closeQR();
}

function startTimer() {
  let time = 600;
  const timerEl = document.getElementById("timer");

  const interval = setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    timerEl.innerText = `${min}:${sec < 10 ? "0" : ""}${sec}`;
    time--;

    if (time < 0) {
      clearInterval(interval);
      timerEl.innerText = "Expired";
    }
  }, 1000);
}
