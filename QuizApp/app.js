const questions = [
  {
    question:
      "Which of the following is a correct way to declare a variable in JavaScript?",
    answers: [
      { text: "var x = 10;", correct: true },
      { text: "variable x = 10;", correct: false },
      { text: "let 10 = x;", correct: false },
      { text: "const x;", correct: false },
    ],
  },

  {
    question: "Which method is used to add an element at the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },

  {
    question: "Which symbol is used for strict equality comparison in JavaScript?",
    answers: [
      { text: "=", correct: false },
      { text: "==", correct: false },
      { text: "===", correct: true },
      { text: "!=", correct: false },
    ],
  },

  {
    question: "Which of the following is a JavaScript data type?",
    answers: [
      { text: "Number", correct: false },
      { text: "String", correct: false },
      { text: "Boolean", correct: false },
      { text: "All of the above", correct: true },
    ],
  },

  {
    question: "What does Array.prototype.pop() do?",
    answers: [
      { text: "Adds an element to the start of an array", correct: false },
      { text: "Removes the last element from an array", correct: true },
      { text: "Sorts the array", correct: false },
      { text: "Reverses the array", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const ansButton = document.getElementById("ans-btn");
const nextButton = document.getElementById("next-btn");

let currentQueIndex = 0;
let score = 0;

function startQuiz() {
  currentQueIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQue = questions[currentQueIndex];
  let questionNo = currentQueIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQue.question;

  currentQue.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    ansButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (ansButton.firstChild) {
    ansButton.removeChild(ansButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(ansButton.children).forEach(button => {
    if(button.dataset.correct === "true") {
        button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQueIndex++; 
    if(currentQueIndex < questions.length) {
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQueIndex < questions.length) {
        handleNextButton();
    }else {
        startQuiz();
    }
});

startQuiz();
