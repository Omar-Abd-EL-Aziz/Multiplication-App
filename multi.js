const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

console.log(num1, num2);
/////////////////////////////////////////////////////////////////////
let ask = `ما هو حاصل ضرب ${num1} <span>&#215;</span> ${num2} ؟`;
const question = document.querySelector("h1");
question.innerHTML = ask;
//////////////////////////////////////////////////////////////////////

const input = document.querySelector("input");
let score = JSON.parse(sessionStorage.getItem("score"));
if (!score) {
  score = 0;
}

const scoreEl = document.querySelector("h4");
scoreEl.innerText = `نتيجتك : ${score}`;
const total = num1 * num2;
///////////////////////////////////////////////////////////////////////
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let userValue = +input.value;
  console.log(userValue);
  if (total === userValue) {
    score++;
    saveScore();
  } else {
    score--;
    saveScore();
  }
  console.log(score);
});
//////////////////////////////////////////////////////////////////////////
const saveScore = () => {
  sessionStorage.setItem("score", JSON.stringify(score));
};

/////////////////////////////////////////////////////////////////////////
const succes = document.querySelector(".succes");
const wrong = document.querySelector(".wrong");
console.log(succes, wrong);
const btn = document.querySelector(".btn");
const right = new Audio("audiomass-output.mp3");
const faild = new Audio("faild.mp3");
btn.addEventListener("click", () => {
  if (total === +input.value) {
    succes.style.display = "block";
    console.log(`right`);
    right.play();
  } else {
    wrong.style.display = "block";
    console.log(`Wrong`);
    faild.play();
  }
});

const refresh = () => {
  window.location.reload();
};
