const firstRandomNum = Math.floor(Math.random() * 10);
const secondRandomNum = Math.floor(Math.random() * 10);

const questionEl = document.getElementById("question");

questionEl.innerText = `What is ${firstRandomNum} multiplied by ${secondRandomNum}?`;

const correctAnswer = firstRandomNum * secondRandomNum;

const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

formEl.addEventListener("submit", () => {
  const submittedAnswer = +inputEl.value;
  if (submittedAnswer == correctAnswer) {
    score++;
    storeInLocalStorage();
  } else {
    score--;
    storeInLocalStorage();
  }
});

function storeInLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

const scoreEl = document.getElementById('score')
scoreEl.innerText = `score: ${score}`
