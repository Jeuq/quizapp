// store = quiz object
const QUIZ = {
  // 5 or more questions are required
  questions: [
    {
      title:
        "What long-time artistic duo was featured on The Weeknd's \"I Feel It Comin'\"?",
      answers: ["Chromeo", "Daft Punk", "Simon & Garfunkle", "Genesis"],
      correct: 1,
      info:
        "<strong>Fun Fact: </strong>\tHe came up with his name “The Weeknd” after he packed a bag, dropped out of school, left one weekend, and never came home. The Weeknd removed the “e” to avoid copyright issues with a Canadian band that also went by the same name. 🧳 <em>lalive.com</em>",
      image: "the-weeknd.jpg",
    },
    {
      title: "Which of these is NOT a Radiohead album?",
      answers: ["Kid A", "The Bends", "Pablo Honey", "Maladroit"],
      correct: 3,
      info:
        "<strong>Fun Fact: </strong>\tThom Yorke defended his gloomy reputation in 1996 thus: “It’s just that I’m surrounded by a world of grinning idiots and I don’t think I want to be another one. 😬 <em>nme.com</em>",
      image: "Radiohead-Promo-730x410.jpg",
    },
    {
      title:
        'What state was Led Zeppelin "Going to" on their 1971 album Led Zeppelin IV?',
      answers: ["Virginia", "New Jersey", "California", "Alabama"],
      correct: 2,
      info:
        "<strong>Fun Fact: </strong>\tIn August 1968 Page invited Robert Plant and John Bon w Yardbirds, for a September tour in Scandinavia. In October 1968 they took the name Led Zeppelin, which stemmed from a humorous conversation among several musicians about their chances of going down like a lead balloon.🎈 <em>imdb.com</em>",
      image: "led-zep-IV.jpg",
    },
    {
      title:
        "In his breathtaking classical performances, Yo-Yo Ma plays what band concert instrument?",
      answers: ["Cello", "Piano", "Clarinet", "Flute"],
      correct: 0,
      info:
        "<strong>Fun Fact: </strong>\tMa’s career nearly ended before it began. Because of severe scoliosis, at age 25 he endured risky back surgery and couldn’t play for 6 months. The surgery was a success, however, and he went on to schedule many concerts soon after. 🎻 <em>connollymusic.com</em>",
      image: "R1606L_YOYOMA.jpg",
    },
    {
      title:
        "What era of music does movements from the classical composer Tchaikovsky originate?",
      answers: ["Baroque", "Romantic", "Classic", "Contemporary"],
      correct: 1,
      info:
        "<strong>Fun Fact: </strong>\tTchaikovsky married just once. Within 6 weeks he had a nervous breakdown. Tchaikovsky’s homosexuality was at odds with the society in which he lived. Bowing under societal and familial pressure, he hastily went ahead with a marriage to one of his former pupils, Antonia Miliukova, who had expressed her undying infatuation with him. Within just six weeks of taking his vows, however, Tchaikovsky fled the marriage and the country. 🎼 <em>musicwithvision.medici.tv</em>",
      image: "Pyotr-Ilyich-Tchaikovsky.jpg",
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
const render = () => {
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
const renderStart = () => {
  $("main").html(`
        <section class="start">
            <h2>Welcome fellow! Let's test your musical 🎼 knowledge!</h2>
            <button id="start">Start Quiz</button>
        </section>
    `);
};

const renderFeedback = () => {
  const question = QUIZ.questions[QUIZ.cQ];
  $("main").html(`
        <section class="feedback">
            <h2>${QUIZ.correct ? "Awesome you got it!" : "WRONG! :("}</h2>
            <img src="images/${question.image}" />
            <p>${question.info}</p>
            <p>${QUIZ.feedback}</p>
            <button id="next">Next Question</button>
        </section>
    `);
};

const renderSummary = () => {
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
};

const renderQuestion = () => {
  const question = QUIZ.questions[QUIZ.cQ];
  $("main").html(`
        <form class="question">
          <div class = "question-tittle">
            <h2>${question.title}</h2>
          </div>
           <h2> Question❓ ${QUIZ.cQ + 1} | ${QUIZ.questions.length} </h2>
            <ul id="answer-section">
                ${question.answers
                  .map((answer, i) => {
                    return `<li>
                            <input type="radio" name="answer" value="${i}" required id="${i}" />
                            <label for="${i}">${answer}</label>
                        </li>`;
                  })
                  .join("")}
            </ul>
            <h2 id="score">
            Score 📢 ${QUIZ.score} | ${QUIZ.questions.length}<h2>
            <button id="answer" type="submit">Submit Answer</button>
        </form>
    `);
};

// EVENT LISTENERS when a button is clicked.
const onStart = () => {
  $("main").on("click", "#start", startedQuiz);
};
const onNext = () => {
  $("main").on("click", "#next", nextQuestion);
};
const onRestart = () => {
  $("main").on("click", "#restart", restartQuiz);
};
const onAnswer = () => {
  $("main").on("submit", "form", submitAnswer);
};

// This are the functions with the required conditionals.
const startedQuiz = () => {
  QUIZ.started = true;
  render();
};

const nextQuestion = () => {
  QUIZ.cQ++;
  QUIZ.feedback = false;
  QUIZ.correct = false;
  render();
};

const restartQuiz = () => {
  QUIZ.started = false;
  QUIZ.cQ = 0;
  QUIZ.score = 0;
  render();
};

const submitAnswer = (event) => {
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
};

// MAIN FUNCTION....will CALLBACK all the EVENT LISTENERS and call RENDER so the info can be display.
const main = () => {
  onRestart();
  onNext();
  onAnswer();
  onStart();
  render();
};

$(main);
