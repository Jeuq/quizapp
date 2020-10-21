/* eslint-disable indent */
/* eslint-disable strict */
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question:
        'What long-time artistic duo was featured on The Weeknd\'s "I Feel It Comin\'"?',
      answers: ['Chromeo', 'Daft Punk', 'Simon & Garfunkle', 'Genesis'],
      correctAnswer: 'Daft Punk',
    },
    {
      question: 'Which of these is NOT a Radiohead album?',
      answers: ['Kid A', 'The Bends', 'Pablo Honey', 'Maladroit'],
      correctAnswer: 'Maladroit',
    },
    {
      question:
        'What state was Led Zeppelin "Going to" on their 1971 album Led Zeppelin IV?',
      answers: ['Virginia', 'New Jersey', 'California', 'Alabama'],
      correctAnswer: 'California',
    },
    {
      question:
        'In his breathtaking classical performances, Yo-Yo Ma plays what band concert instrument?',
      answers: ['Cello', 'Piano', 'Clarinet', 'Flute'],
      correctAnswer: 'Cello',
    },
    {
      question:
        'What era of music does movements from the classical composer Tchaikovsky originate?',
      answers: ['Romantic', 'Baroque', 'Classic', 'Contemporary'],
      correctAnswer: 'Romantic',
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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)



function startPage(){
  // loads first 
  }
  
  
  function handleStartQuiz () {
  // click -> starting quiz
  }
  
  
  function render() {
    if (store.quizStarted === false) {
      startPage();
    } else if (store.quizStarted) {
      questionPage();
      // if (input === answer) {
        // render correctPage
      //} else if ( input !== answer) {
        // render incorrect page}
  
  
  }
  
  
  function main() {
    
  }
  
  
  function questionPage () {
  // reference store.questionnumber
  // template for formatting of question
  // template for radio button labels and values for options
  // submit button
  // increment store.questionnumber
  // send to answerPage

  let currentAnswers = [];

  // Grabs all the answers for the current question.
  for (
    let i = 0;
    i < store.questions[store.questionNumber].answers.length;
    i++
  ) {
    currentAnswers[i] = `
    <label for="ans${i + 1}">
      <input type="radio" class="answer" id="ans${i + 1}"/>
      ${store.questions[store.questionNumber].answers[i]}
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
          ${currentAnswers}
          <button class="answer" id="submit">Next</button>
        </form>
      <p class="question" id="quiz-score">Score</p>
    </article>`;
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

const nextQuestion = () => {
  $('main').on('click', '#next', (event) => {
    if (store.questionNumber === store.questions.length) {
      handleStartQuiz(getResults());
    } else {
      handleStartQuiz(questionPage(i));
    }
  });
};

const restartQuiz = () => {
  $('main').on('click', '#restart', (event) => {
    let index = 0;
    store.quizStarted = false;
    store.score = 0;
    store.questionNumber = 0;
    handleStartQuiz(startPage());
  });
};

function answers() {}
// compare click location to answer choice
// if click !== answer, render answerPage template with incorrect response
// if click === answer, render answerPage with correct
// answerPage template:
// correct/incorrect text
// indicate correct answer
// indicate number correct out of total
// next button question

const main = () => {
  handleStartQuiz();
  render();
  //counter();
  nextQuestion();
  restartQuiz();
};

$(main);
