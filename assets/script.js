
// include a start button that also triggers the timer
var startButton = document.querySelector('#start');
var checkHighScore = document.querySelector('highScores');

var timeRemaining = document.querySelector('#timer');

var timeLeft = 2;


startButton.addEventListener('click', function(_startTimer) {});
   
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
        }
    }, 1000);
}

// function runGetName() {
//     // timeRemaining(prompt) = 'Enter Your Name';
//     var userName = document.createElement("h1");
//     userName.appendChild('high')
// }


// var element = event.target;



startTimer()

// questions need to be an array === 3 false and 1 true

// present questions with a timer attached, subtract 5 seconds for wrong answers
 
// when the game is over or time runs out the loop ends. 

// when the game is over the user is asked for initials and shows score. 