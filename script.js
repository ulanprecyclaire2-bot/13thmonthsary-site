/* 🔐 PASSWORD LOCK */
let attempts = 0;

function unlock() {
  const pass = document.getElementById("passwordInput").value;
  const box = document.getElementById("loginBox");

  if (pass === "Babet") {
    document.getElementById("gameArea").classList.remove("hidden");
    document.getElementById("unlockMsg").innerHTML = "💜Hii babi welcomee💙";
    typeText();
  } 
  else {
    attempts++;

    document.getElementById("unlockMsg").innerHTML = "Wrong password 💔";

    document.getElementById("hint").innerHTML =
      attempts >= 2 ? "Hint: CS" : "";

    box.classList.add("shake");
    setTimeout(() => box.classList.remove("shake"), 400);
  }
}

/* typing */
const text = "Welcome to your Love Game Room 💜💙";
let i = 0;

function typeText() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text[i];
    i++;
    setTimeout(typeText, 50);
  }
}

/* WHY I LOVE YOU */
const reasons = [
  "God-fearing",
  "Faithful",
  "Kind and Gentleman",
  "Smart",
  "Talented",
  "Very gwapoo",
  "You always supports me and make me feel special",
  "The way you appreciates and compliments me",
  "Being patient with me",
  "You make me feel safe and secured",
  "You're always there for me",
  "You being yourself... pinaka love nako"
];

let r = 0;

function showReason() {
  document.getElementById("reasonBox").innerHTML =
    reasons[r % reasons.length];
  r++;
}

/* SPIN */
const prizes = [
  "💜 Unlimited Bite",
  "💙 Try again",
  "💜 So sad.. wala",
  "💙 Hugg",
  "💜 Kisssss",
  "💙 You decide"
];

function spinWheel() {
  document.getElementById("wheelResult").innerHTML =
    prizes[Math.floor(Math.random() * prizes.length)];
}

/* SCRATCH */
function scratch() {
  const msgs = [
    "💜 iloveyousomuchh babi",
    "💜 iloveyou more than words can say"
  ];

  document.getElementById("scratchResult").innerHTML =
    msgs[Math.floor(Math.random() * msgs.length)];
}

/* CHAT */
function chat() {
  const chat = [
    "Babi: Iloveyousomuch babi",
    "You: Mas love man tika🙄",
    "Babi: Fakii",
    "You: Ayg tuo"
  ];

  document.getElementById("chatBox").innerHTML =
    chat[Math.floor(Math.random() * chat.length)];
}

/* POINTS */
let points = 0;

function addPoint() {
  points++;
  document.getElementById("points").innerHTML = points + " 💜";
}

/* LETTER */
function letter() {
  document.getElementById("letter").classList.remove("hidden");
}

/* FINAL */
function finalScene() {
  document.body.innerHTML = `
    <div style="height:100vh;display:flex;justify-content:center;align-items:center;
    background:linear-gradient(-45deg,#4b0082,#1e90ff,#8a2be2);color:white;text-align:center;">
      <h1>💜 Game Complete 💙<br>I love you forever, babi 💖</h1>
    </div>
  `;
}

/* HEARTS */
function heart() {
  const h = document.createElement("div");
  h.classList.add("heart");
  h.innerHTML = "💜";
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = (2 + Math.random() * 3) + "s";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 4000);
}

setInterval(heart, 200);
