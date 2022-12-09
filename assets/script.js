
// include a start button that also triggers the timer
var startButton = document.querySelector('#start');
var checkHighScore = document.querySelector('highScores');

var answer = document.querySelector('#answers');
var timeRemaining = document.querySelector('#timer');
var score = 0;
var timeLeft = 2;
var pointsLost = 5;
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
    Correct: '13'
    }
]

function startquestions()

   
function startTimer() {
    var timer = setInterval(function() {
        timeLeft--;
        timeRemaining.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer); // stops timer at 0
            var userName = prompt('Enter Your Name')
            // timeRemaining(prompt) = 'Enter Your Name';
            var name = document.createElement(userName);
            name.textContent = userName;
            document.body.div.appendchild(userName);
            var score = document.createElement(newScore);
            score.textContent = newScore;
            document.body.div.appendchild(newScore);
        }
    }, 1000);
}


startButton.addEventListener('click', function(startTimer) {});
// function runGetName() {
//     // timeRemaining(prompt) = 'Enter Your Name';
//     var userName = document.createElement("h1");
//     userName.appendChild('high')
// }


// var element = event.target;



startTimer()
startquestions()

// questions need to be an array === 3 false and 1 true

// present questions with a timer attached, subtract 5 seconds for wrong answers
 
// when the game is over or time runs out the loop ends. 

// when the game is over the user is asked for initials/name and shows score. 