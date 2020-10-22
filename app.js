/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable strict */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question:
        'What long-time artistic duo was featured on The Weeknd\'s "I Feel It Comin\'"?',
      answers: ['Chromeo', 'Daft Punk', 'Simon & Garfunkle', 'Genesis'],
      correctAnswer: 'Daft Punk',
      answerInfo:
        '<strong>Fun Fact: </strong>\tHe came up with his name “The Weeknd” after he packed a bag, dropped out of school, left one weekend, and never came home. The Weeknd removed the “e” to avoid copyright issues with a Canadian band that also went by the same name. 🧳 <em>lalive.com</em>',
      infoImage: 'the-weeknd.jpg',
    },
    {
      question: 'Which of these is NOT a Radiohead album?',
      answers: ['Kid A', 'The Bends', 'Pablo Honey', 'Maladroit'],
      correctAnswer: 'Maladroit',
      answerInfo:
        '<strong>Fun Fact: </strong>\tThom Yorke defended his gloomy reputation in 1996 thus: “It’s just that I’m surrounded by a world of grinning idiots and I don’t think I want to be another one. 😬 <em>nme.com</em>',
      infoImage: 'Radiohead-Promo-730x410.jpg',
    },
    {
      question:
        'What state was Led Zeppelin "Going to" on their 1971 album Led Zeppelin IV?',
      answers: ['Virginia', 'New Jersey', 'California', 'Alabama'],
      correctAnswer: 'California',
      answerInfo:
        '<strong>Fun Fact: </strong>\tIn August 1968 Page invited Robert Plant and John Bon w Yardbirds, for a September tour in Scandinavia. In October 1968 they took the name Led Zeppelin, which stemmed from a humorous conversation among several musicians about their chances of going down like a lead balloon.🎈 <em>imdb.com</em>',
      infoImage: 'led-zep-IV.jpg',
    },
    {
      question:
        'In his breathtaking classical performances, Yo-Yo Ma plays what band concert instrument?',
      answers: ['Cello', 'Piano', 'Clarinet', 'Flute'],
      correctAnswer: 'Cello',
      answerInfo:
        '<strong>Fun Fact: </strong>\tMa’s career nearly ended before it began. Because of severe scoliosis, at age 25 he endured risky back surgery and couldn’t play for 6 months. The surgery was a success, however, and he went on to schedule many concerts soon after. 🎻 <em>connollymusic.com</em>',
      infoImage: 'R1606L_YOYOMA.jpg',
    },
    {
      question:
        'What era of music does movements from the classical composer Tchaikovsky originate?',
      answers: ['Romantic', 'Baroque', 'Classic', 'Contemporary'],
      correctAnswer: 'Romantic',
      answerInfo:
        '<strong>Fun Fact: </strong>\tTchaikovsky married just once. Within 6 weeks he had a nervous breakdown. Tchaikovsky’s homosexuality was at odds with the society in which he lived. Bowing under societal and familial pressure, he hastily went ahead with a marriage to one of his former pupils, Antonia Miliukova, who had expressed her undying infatuation with him. Within just six weeks of taking his vows, however, Tchaikovsky fled the marriage and the country. 🎼 <em>musicwithvision.medici.tv</em>',
      infoImage: 'Pyotr-Ilyich-Tchaikovsky.jpg',
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
};

// RENDER FUNCTION

function render() {
  if (store.quizStarted === false) {
    $('main').html(`<article class="question" id="question-card">
    <h2 class="question" id="question-title">Hey welcome, let's test your🎼knowledge!</h2> 
    <form class="answer" id="answer-section">
      <p class="answer">Are you ready?</p>
      <button id="start">Start Quiz</button>
    </section>
  </article>;`);
    $('#start').on('click', function () {
      questionPage(store);
    });
  }
}

const questionPage = () => {
  console.log('questionPage()');
  if (store.questionNumber === store.questions.length) {
    return results();
  }
  let currentAnswers = '';
  for (
    let i = 0;
    i < store.questions[store.questionNumber].answers.length;
    i++
  ) {
    answerValue = store.questions[store.questionNumber].answers[i];
    currentAnswers += `
    <label for="ans${i + 1}">
      <input type="radio" class="answer" id="ans${
        i + 1
      }"name="response" value="${answerValue}" required>
      ${answerValue}
    </label>`;
  }
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
          <button class="submit" id="submit">Submit</button>
        </form>
      <p class="question" id="quiz-score">Correct: ${store.score}/${
    store.questionNumber
  }</p>
    </article>`;

  $('main').html(currentPage);
  $('#submit').click(function () {
    answerPage(store);
  });
};

const answerPage = () => {
  let realAns = store.questions[store.questionNumber].correctAnswer;
  let val = $('input[name="response"]:checked').val();
  let title;
  let color;
  let image = store.questions[store.questionNumber].infoImage;
  let info = store.questions[store.questionNumber].answerInfo;
  if (val === realAns) {
    store.score++;
    title = 'Correct!';
    color = 'green';
  } else {
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
      <button class="submit" id="next">Next</button>
    </form>
    <p class="question" id="quiz-score">Correct: ${store.score}/${
    store.questionNumber + 1
  }</p>   
  </article>`;

  $('main').html(answerEval);
  $('#next').click(function () {
    store.questionNumber++;
    questionPage();
  });
};

const results = () => {
  console.log('restartQuiz()');
  let tempResult = `
    <div class='quiz-result'>
        <h2>Awesome! You finished the Quiz!</h2>
        <p> You scored a ${(store.score / store.questions.length) * 100}%!</p>
        <button type="button" id="restart"> Restart</button>
    </div>
  `;
  $('main').html(tempResult);
  $('#restart').on('click', (event) => {
    store.quizStarted = false;
    store.score = 0;
    store.questionNumber = 0;
    questionPage();
  });
};

$(render());

// MISSING REQUIRED RADIO BUTTON!
//function myFunction() {
//document.getElementsByName("response").required = true; // location.reload;
// location.reload();
