
// include a start button that also triggers the timer need variables like in week3 to adjust what the program is reading from. 
var startButton = document.querySelector('#start');
var checkHighScore = document.querySelector('#highScores');
var myAnswer = document.querySelector('#myAnswer');
var answer = document.querySelector('#answers');
var timeRemaining = document.querySelector('#timer');
var question = document.querySelector('#question');
var quizSection = document.querySelector('#quizSection')
var score = 0;
var timeLeft = 30;
var pointsLost = 5;
var currentQuestion = 0;
var questions = [
    { Q: 'Which of the following keywords is used to define a variable in Javascript?',
    A: [
            'var',
            'let',
            'Both A and B',
            'None of the above',
        ],
        correct: "Both A and B"
    },
    { Q: 'Which of the following methods is used to access HTML elements using Javascript?',
    A: [ 
        'getElementById()',
        'getElementsByClassName()',
        'Both A and B',
        'None of the Above',
        ],
        correct: 'Both A and B'
    },
    { Q: 'Which of the following methods can be used to display data in some form using Javascript?',
    A: [
        'document.write()',
        'console.log()',
        'window.alert()',
        'All of the above',
    ],
        correct: 'All of the above'
    }, 
    { Q: 'When an operators value is NULL, the typeof returned by the unary operator is:',
    A: [
        'Boolean',
        'Undefined',
        'Object',
        'Integer',
    ],
        correct: 'Object'
    }
]
console.log(questions);

// function restartQuiz() {
//     startTimer();
//     startQuestions();

    
// }

function startQuestions() {
    
    myAnswer.innerHTML = '' ; //not working for some reason?? ** fixed!
    questions.innerHTML = '' ;  //not working for some reason?? ** fixed!
    var end = questions.length - 1 
    if (currentQuestion > end) { 
            gameover();
        return;
    };
         console.log(quizSection);
          // loops through the questions and pulls the opjects of the array
    // while (i = 0; i <= questions.length; i++) {
        var newQuestion = questions[currentQuestion].Q;
        var theAnswers = questions[currentQuestion].A;
        clickedAnswers(theAnswers)
        quizSection.innerHTML = newQuestion 
    // }    
} // need to create buttons to pop up with questions
function clickedAnswers (answers) {
    console.log(answers);
    document.getElementById('answers').innerHTML = "";
    for (var j = 0; j < answers.length; j++) {
        var button = document.createElement('button');
        button.textContent = answers[j];
        console.log(j)
        document.querySelector('#answers').appendChild(button);
        button.className = 'answerButton';
        button.addEventListener('click', checkAnswers)
        
        console.log(myAnswer);
    }
    console.log(j);
}   


    // how do we check the answers if correct 
function checkAnswers(event) {
    var guess = event.target.textContent
    var correct = questions[currentQuestion].correct 
    if (guess === correct)
    score++;
    else {
        timeLeft = timeLeft - 5;
        timeRemaining.textContent = timeLeft;
    }
    currentQuestion++;
      //  make if statement to check the answer correct or incorrect
   startQuestions();

  
    
//   if ()  [currentQuestion].correct {  // i know i need to target this object within the array
// // if question is wrong subract from timer and this will attach to the score at the end. 
//     var correctAnswer = true; {

//     score += (currentQuestion + 2) + (Math.floor(timeLeft / 5)); // i dont need random here since we arent looking to do any varied integers just a known subraction
//     timeRemaining.textContent = 'score' + score;
// } else 
// correctAnswer = false; timeLeft = pointsLost; 
// };
}

var timer;
function gameover() {

    clearInterval(timer); // stops timer at 0
    var userName = prompt('Enter Your Name')
    // timeRemaining(prompt) = 'Enter Your Name';
    var name = document.createElement('p');
    name.textContent = userName;
    var highscoretext = document.querySelector('#highScoreText');
    // document.querySelector('.high').textContent += userName;                //not working for some reason??
    // var score = document.createElement(newScore); // not appending child? or do i try innerHTML?
    // score.textContent = newScore;
    highscoretext.textContent += userName;
    var newScore = ' ' + timeLeft;
    highscoretext.textContent += newScore;
    // document.querySelector('.high').textContent += newScore;
    
    var highScore = JSON.parse(localStorage.getItem('highScore'));   // pushing stored items into the array to be pulled 130-135.
    if (highScore == null) {
        highScore = []
    }
    highScore.push(userName + newScore)
    localStorage.setItem('highScore', JSON.stringify(highScore));
    document.getElementById('answers').innerHTML = "";
}
function startTimer() {
    timer = setInterval(function () {
        timeLeft--;
        timeRemaining.textContent = timeLeft;
        // console.log(timeLeft)
        if (timeLeft === 0) {
            gameover();
        }
    }, 1000);

}

startButton.addEventListener('click', function() {
    startTimer();
    startQuestions();
   

});

var scoreButton = document.querySelector('#highScores');
scoreButton.addEventListener('click', function() {
getHighScores();
}); 


function getHighScores() {
   console.log('weeee', 'getHighScores')
   var display = document.querySelector('#display');
   var highScore = JSON.parse(localStorage.getItem('highScore'))
   display.innerHTML = '';

   for (var i = 0; i < highScore.length; i++) {
    // display.textContent = highScore;
    var listOfScores = document.createElement('p');
    listOfScores.textContent = highScore[i];
    display.append(listOfScores);
   }
   };


// var element = event.target;

// questions need to be an array === 3 false and 1 true

// present questions with a timer attached, subtract 5 seconds for wrong answers
 
// when the game is over or time runs out the loop ends. 

// when the game is over the user is asked for initials/name and shows score. 

// for local storage create a var with localStorage.getItem('score' or something)
//could put this in the function with prompt? as thats the info i need to save