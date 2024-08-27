const question = document.querySelector(".question");
const respanswers = document.querySelector(".answers");
const spnQnd = document.querySelector(".spanQnd");
const twxtFinish = document.querySelector(".finish span");
const constent = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./perguntas.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.diplay = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestions();
}

function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true"){
        questionsCorrect++;
    }
    if (currentIndex < questions.lenght - 1){
        currentIndex++;
        loadQuestion();
    } else {
        twxtFinish();
    }
}

function finish() {
    textFinish.innerHTML = `Você acertou!! ${questionsCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex"
}

function loadQuestion() {
spanQnd.innerHTML = `${currentIndex + 1}/${questions.length}`;
const item = questions[currentIndex];
answers.innerHTML = "";
question.innerHTML = item.question;

item.answers.forEach((answer) => {
const div = document.createElement("div");

    div.innerHTML= `
    <button class="answer" data-correct="${answer.correct}">
    ${answer.option}
    </buttom>
    `;

    answers.appendChild(div);
});

document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
});
}

loadQuestion();