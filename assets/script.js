
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
    { Q: 'What is the name for the Jewish New Year?',
    A: [
            'Hanukkah',
            'Yom Kippur',
            'Kwanza',
            'Rosh Hashanah',
        ],
        correct: "Hanukkah"
    },
    { Q: 'How many blue stripes are there on the U.S. flag?',
    A: [ 
        '6',
        '7',
        '13',
        '0',
        ],
        correct: '13'
    },
    { Q: 'Which planet is the hottest?',
    A: [
        'Venus',
        'Saturn',
        'Mercury',
        'Mars',
    ],
        correct: 'Mercury'
    }
]
console.log(questions);
function startQuestions() {
    myAnswer.innerHTML = '' ; //not working for some reason??
    questions.innerHTML = '' ;  //not working for some reason??
    var end = questions.length - 1 
    if (currentQuestion > end) { 
            gameover();

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
    for (var j = 0; j < answers.length; j++) {
        var button = document.createElement('button');
        button.textContent = answers[j];
        console.log(j)
        
        myAnswer.addEventListener('click', checkAnswers)
        document.querySelector('#answers').appendChild(button);
        console.log(button)
    }
    console.log(j);
}   


    // how do we check the answers if correct 
function checkAnswers(event) {
    var guess = event.target.textContent
    if (myAnswer === correct)
    score++;
    else {
        timeLeft = timeLeft - 5;
    }
      //  make if statement to check the answer correct or incorrect
   startQuestions()
    currentQuestion++;
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
    var name = document.createElement(userName);
    name.textContent = userName;
    document.querySelector('.high').textContent += userName;                //not working for some reason??
    // var score = document.createElement(newScore); // not appending child? or do i try innerHTML?
    // score.textContent = newScore;
    var newScore = ' ' + timeLeft;
    document.querySelector('.high').textContent += newScore;

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

// var element = event.target;

// questions need to be an array === 3 false and 1 true

// present questions with a timer attached, subtract 5 seconds for wrong answers
 
// when the game is over or time runs out the loop ends. 

// when the game is over the user is asked for initials/name and shows score. 

// for local storage create a var with localStorage.getItem('score' or something)
//could put this in the function with prompt? as thats the info i need to save