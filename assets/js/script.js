var begin = document.querySelector(".begin");
var highScores = document.querySelector(".highscores");
var timerElement = document.querySelector(".timer");
var questionBox = document.querySelector(".questions");
var questions = ["The condition of an if / else statement uses which kind of brackets?",
    "Commonly used data types do NOT include ______.",
    "Arrays in JavaScript can be used to store ______.",
    "Before functions can execute, they must be ______.",
    "Individual string values are enclosed in ______."];
var answers0 = ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"];
var correctAnswer0 = ["Parenthesis"];
var answers1 = ["Alerts", "Booleans", "Strings", "Numbers"];
var correctAnswer1 = ["Booleans"];
var answers2 = ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"];
var correctAnswer2 = ["All of the Above"];
var answers3 = ["Declared", "Tagged", "Clicked on", "Coded"];
var correctAnswer3 = ["Declared"];
var Answers4 = ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"];
var correctAnswer4 = ["Quotes"];
var timerCount;
var timer;
var isWin = false;

function beginQuiz() {
    begin.disabled = true
    timerCount = 60;
    startTimer()
    question()
    isWin = false;
}

begin.addEventListener("click", beginQuiz);

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = "Time: " + timerCount;
        if (timerCount >= 0) {
            if (isWin && timerCount > 0) {
              clearInterval(timer);
              winGame();
            }
          }
          if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
          }
}, 1000);
}