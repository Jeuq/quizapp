/* eslint-disable strict */
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What long-time artistic duo was featured on The Weeknd\'s "I Feel It Comin\'"?',
      answers: [
        'Chromeo',
        'Daft Punk',
        'Simon & Garfunkle',
        'Genesis'
      ],
      correctAnswer: 'Daft Punk'
    },
    {
      question: 'Which of these is NOT a Radiohead album?',
      answers: [
        'Kid A',
        'The Bends',
        'Pablo Honey',
        'Maladroit'
      ],
      correctAnswer: 'Maladroit'
    },
    {
      question: 'What state was Led Zeppelin "Going to" on their 1971 album Led Zeppelin IV?',
      answers: [
        'Virginia',
        'New Jersey',
        'California',
        'Alabama'
      ],
      correctAnswer: 'California',
    },
    {
      question: 'In his breathtaking classical performances, Yo-Yo Ma plays what band concert instrument',
      answers: [
        'Cello',
        'Piano',
        'Clarinet',
        'Flute'
      ],
      correctAnswer: 'Cello',
    },
    {
       question: 'What era is Tchaikovsky from?',
      answers: [
        'Romantic',
        'Baroque',
        'Classic',
        'Contemporary'
      ],
      correctAnswer: 'Romantic'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
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
// depending on status of store.quizStarted
// load startPage or
// execute questionPage (.html)
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
}


function answers() {
// if correct send to correctPage
// if incorrect send to incorrectPage
}
