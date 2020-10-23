// store = quiz object
const QUIZ = {
  questions: [
    {
      title:
        "1. What long-time artistic duo was featured on The Weeknd's \"I Feel It Comin'\"?",
      answers: ["Chromeo", "Daft Punk", "Simon & Garfunkle", "Genesis"],
      correct: 1,
    },
    {
      title:
        "2. What era of music does movements from the classical composer Tchaikovsky originate?",
      answers: ["Romantic", "Baroque", "Classic", "Contemporary"],
      correct: 0,
    },
    {
      title: "3. Which of these is NOT a Radiohead album?",
      answers: ["Kid A", "The Bends", "Pablo Honey", "Maladroit"],
      correct: 3,
    },
    {
      title:
        "4. What state was Led Zeppelin 'Going to' on their 1971 album Led Zeppelin IV?",
      answers: ["Virginia", "New Jersey", "California", "Alabama"],
      correct: 2,
    },
    {
      title:
        "5.In his breathtaking classical performances, Yo-Yo Ma plays what band concert instrument?",
      answers: ["Cello", "Piano", "Clarinet", "Flute"],
      correct: 0,
    },
  ],
  started: false, // boolean
  feedback: false, // false or a string of text
  correct: false, // true or false
  cQ: 0, //loop from 0 to questions.length.
  score: 0, // //loop from 0 to questions.length.
  summaryGif: "musicSummary.gif",
};

// RENDER FUNCTION this will call all my template generator to display!
function render() {
  // the first check we do is to see if we haven't started yet, then show the startHTML page
  if (!QUIZ.started) {
    renderStart();
    // if we have started but have feedback for the user, show the feedbackHTML page
  } else if (QUIZ.feedback) {
    renderFeedback();
    // if we have run out of questions, show the summaryHTML page
  } else if (QUIZ.cQ >= QUIZ.questions.length) {
    renderSummary();
  } else {
    // otherwise ... we render the current questionHTML
    renderQuestion();
  }
}

// These are the template generators... that my render function will call when a conditional is met.
function renderStart() {
  $("main").html(`
        <section class="start">
            <h2>Welcome fellow! Let's test your musical 🎼 knowledge!</h2>
            <button id="start">Start Quiz</button>
        </section>
    `);
}

function renderFeedback() {
  $("main").html(`
        <section class="feedback">
            <h2>${QUIZ.correct ? "Awesome you got it!" : "WRONG! :("}</h2>
            <p>${QUIZ.feedback}</p>
            <button id="next">Next Question</button>
        </section>
    `);
}

function renderSummary() {
  $("main").html(`
        <section class="summary">
            <h2>Quiz Summary</h2>
             <img class="gifplayer" src="musicSummary.gif"${QUIZ.summaryGif}>
            <p> You scored a ${(QUIZ.score / QUIZ.questions.length) * 100}%!</p>
            <p>You got ${QUIZ.score} out of ${
    QUIZ.questions.length
  } correct!</p>
            <button id="restart">Try Again!</button>
        </section>
    `);
}

function renderQuestion() {
  const question = QUIZ.questions[QUIZ.cQ];
  $("main").html(`
        <form class="question">
          <div class = "question-tittle">
            <h2>${question.title}</h2>
          </div>
            <ul>
                ${question.answers
                  .map((answer, i) => {
                    return `<li>
                            <input type="radio" name="answer" value="${i}" required id="${i}" />
                            <label for="${i}">${answer}</label>
                        </li>`;
                  })
                  .join("")}
            </ul>
             <h2> Score 📢 ${QUIZ.score} | ${QUIZ.questions.length}<h2>
            <button id="submit" type="submit">Submit Answer</button>
        </form>
    `);
}

// EVENT LISTENERS when a button is clicked.
function onStart() {
  $("main").on("click", "#start", startedQuiz);
}
function onNext() {
  $("main").on("click", "#next", nextQuestion);
}
function onRestart() {
  $("main").on("click", "#restart", restartQuiz);
}
function onAnswer() {
  $("main").on("submit", "form", submitAnswer);
}

// This are the functions with the required conditionals.
function startedQuiz() {
  QUIZ.started = true;
  render();
}

function nextQuestion() {
  QUIZ.cQ++;
  QUIZ.feedback = false;
  QUIZ.correct = false;
  render();
}

function restartQuiz() {
  QUIZ.started = false;
  QUIZ.cQ = 0;
  QUIZ.score = 0;
  render();
}

function submitAnswer(event) {
  // prevent Default
  event.preventDefault();
  const question = QUIZ.questions[QUIZ.cQ];
  const guess = parseInt($('input[type="radio"]:checked').val());
  if (question.correct === guess) {
    QUIZ.score++;
    QUIZ.correct = true;
  }
  QUIZ.feedback = `The correct answer is ${question.answers[question.correct]}`;
  render();
}

// MAIN FUNCTION....will CALLBACK all the EVENT LISTENERS and call RENDER so the info can be display.
function main() {
  onRestart();
  onNext();
  onAnswer();
  onStart();
  render();
}

$(main);
