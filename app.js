/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable strict */
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What long-time artistic duo was featured on The Weeknd\'s "I Feel It Comin\'"?',
      answers: ['Chromeo', 'Daft Punk', 'Simon & Garfunkle', 'Genesis'],
      correctAnswer: 'Daft Punk',
      answerInfo: 'welknd',
      infoImage: 'the-weeknd.jpg'
    },
    {
      question: 'Which of these is NOT a Radiohead album?',
      answers: ['Kid A', 'The Bends', 'Pablo Honey', 'Maladroit'],
      correctAnswer: 'Maladroit',
      answerInfo: 'radioman',
      infoImage: 'Radiohead-Promo-730x410.jpg'
    },
    {
      question: 'What state was Led Zeppelin "Going to" on their 1971 album Led Zeppelin IV?',
      answers: ['Virginia', 'New Jersey', 'California', 'Alabama'],
      correctAnswer: 'California',
      answerInfo: 'lead zepples',
      infoImage: 'led-zep-IV.jpg'
    },
    {
      question: 'In his breathtaking classical performances, Yo-Yo Ma plays what band concert instrument?',
      answers: ['Cello', 'Piano', 'Clarinet', 'Flute'],
      correctAnswer: 'Cello',
      answerInfo: 'yo mama',
      infoImage: 'R1606L_YOYOMA.jpg'
    },
    {
      question:
        'What era of music does movements from the classical composer Tchaikovsky originate?',
      answers: ['Romantic', 'Baroque', 'Classic', 'Contemporary'],
      correctAnswer: 'Romantic',
      answerInfo: 'good old russian fren',
      infoImage: 'Pyotr-Ilyich-Tchaikovsky.jpg'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
};

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

const startPage = () => {
  console.log('startPage()');
  // loads first and show the title + the button to start the quiz return
  handleStartQuiz();
  return `
  <article class="question" id="question-card">
    <h2 class="question" id="question-title">Randow Music Knowlegde Quiz</h2> 
    <form class="answer" id="answer-section">
      <p class="answer">Are you ready?</p>
      <button id="start">Start Quiz</button>
    </section>
  </article>`;
};

const handleStartQuiz = () => {
  // click -> starting quiz
  $('main').on('click', '#start', function () {
    store.quizStarted = true;
    render();
  });
};

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

const render = () => {
  console.log('render()');
  // depending on status of store.quizStarted
  // load startPage or
  // execute questionPage (.html)
  // depending on input
  // render correctPage or
  // render incorrectPage

  if (store.quizStarted === false) {
    $('main').html(startPage());
  }
  if (store.quizStarted === true) {
    $('main').html(questionPage());
  }
}

const questionPage = () => {
  console.log('questionPage()');
  // reference store.questionnumber
  // template for formatting of question
  // template for radio button labels and values for options
  // submit button
  // increment store.questionnumber
  // send to answerPage

  checkAnswer();

  let currentAnswers = '';

  // Grabs all the answers for the current question.
  for (
    let i = 0;
    i < store.questions[store.questionNumber].answers.length;
    i++
  ) {
    answerValue = store.questions[store.questionNumber].answers[i];
    currentAnswers += `
    <label for="ans${i + 1}">
      <input type="radio" class="answer" id="ans${i + 1}" name="response" value="${answerValue}"/>
      ${answerValue}
    </label>`;
  }

  // Creates the current question page template.
  let currentPage = `
    <article class="question" id="question-card">
      <h2 class="question" id="question-title">Question ${
        store.questionNumber + 1
      }</h2>
      <p class="question" id="question-text">${
        store.questions[store.questionNumber].question
      }</p>
        <form class="answer" id="answer-section">
          ${
            currentAnswers
          }
          <button class="submit" id="check${store.questionNumber}">Submit</button>
        </form>
      <p class="question" id="quiz-score">Correct: ${store.score}/${store.questionNumber}</p>
    </article>`;

    return currentPage;
};

const answerPage = (val) => {
  console.log('answerPage()');
// compare click location to answer choice
// if click !== answer, render answerPage template with incorrect response
// if click === answer, render answerPage with correct
// answerPage template:
// correct/incorrect text
// indicate correct answer
// indicate number correct out of total
// next button question

  nextQuestion();

  let realAns = store.questions[store.questionNumber].correctAnswer;
  let title;
  let color;
  let image = store.questions[store.questionNumber].infoImage;
  let info = store.questions[store.questionNumber].answerInfo;

  if (val === realAns)
  {
    store.score++;
    title = 'Correct!';
    color = 'green';
  }
  else
  {
    title = 'Wrong!';
    color = 'red';
  }

  let answerEval = `
  <article class="question" id="question-card">
  <h2 style="color:${color};" class="question" id="question-title">${title}</h2>
    <form class="answer" id="answer-section">
      <img src="images/${image}"/>
      <p class="question" id="question-text">${info}</p>
      <p>The correct answer was: <strong>${realAns}</strong></p> 
      <button class="submit" id="next${store.questionNumber}">Next</button>
    </form>
    <p class="question" id="quiz-score">Correct: ${store.score}/${store.questionNumber + 1}</p>   
  </article>`;

  return answerEval;

};

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

const nextQuestion = () => {
  let id = '#next' + store.questionNumber;
  $('main').on('click', id, (event) => {
    store.questionNumber++;
    render();
  });
};

const checkAnswer = () => {
  let id = '#check' + store.questionNumber;
  $('main').on('click', id, (event) => {
    let val = $('input[name="response"]:checked').val();
    $('main').html(answerPage(val));
  });
};

const restartQuiz = () => {
  console.log('restartQuiz()');
  $('main').on('click', '#reset', (event) => {
    store.quizStarted = false;
    store.score = 0;
    store.questionNumber = 0;
    render();
  });
};

const main = () => {
  console.log('main()');
  restartQuiz();
  render();
};

$(main);
