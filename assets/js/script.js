var begin = document.querySelector(".begin");
var highScores = document.querySelector(".highscores");
var timerElement = document.querySelector(".timer");
var questionElement = document.querySelector(".questions");
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
var answers4 = ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"];
var correctAnswer4 = ["Quotes"];
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var feedback = document.querySelector(".answerfeedback");
var timerCount;
var timer;
var textform = document.querySelector(".textform");
var submitbutton = document.querySelector(".submitbutton");

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
          if (timerCount === 0) {
              clearInterval(timer);
              loseGame();
          }
}, 1000);
}

function question() {
    highScores.disabled = true;
    questionElement.textContent = questions[0];
    answer1.textContent = answers0[0];
    answer2.textContent = answers0[1];
    answer3.textContent = answers0[2];
    answer4.textContent = answers0[3];
    answer1.addEventListener("click", wrongAnswer1);
    answer2.addEventListener("click", wrongAnswer1);
    answer3.addEventListener("click", rightAnswer1);
    answer4.addEventListener("click", wrongAnswer1);
}

function endGameW() {
    answer1.textContent = "A.";
    answer2.textContent = "B.";
    answer3.textContent = "C.";
    answer4.textContent = "D.";
    questionElement.textContent = "Your Score = " + timerCount + " Enter Initials:";
    clearInterval(timer);
    showSubmit();
    submitbutton.addEventListener("click", saveHs);
}

function endGame() {
    answer1.textContent = "A.";
    answer2.textContent = "B.";
    answer3.textContent = "C.";
    answer4.textContent = "D.";
    questionElement.textContent = "Your Score = " + timerCount + " Enter Initials:";
    clearInterval(timer);
    showSubmit();
    var initials = textform.value;
    submitbutton.addEventListener("click", function() {
        var initials = textform.value;
        localStorage.setItem("Score", timerCount);
        localStorage.setItem("Initials", initials);
        finishGame();
    });
}

highScores.addEventListener("click", showScores);

function showScores() { 
    var initials = localStorage.getItem("Initials");
    var score = localStorage.getItem("Score");
    questionElement.textContent = initials + " " + score;
}

function finishGame() {
    questionElement.textContent = ""
    begin.disabled = false;
    highScores.disabled = false;
    document.getElementById("hssubmit").style.visibility = "hidden";
    timerElement.textContent = "Time: 60";
}

function showSubmit() {
    document.getElementById("hssubmit").style.visibility = "visible";
}



function rightAnswer1() {
    feedback.textContent = "Correct!";
    questionElement.textContent = questions[1];
    answer1.textContent = answers1[0];
    answer2.textContent = answers1[1];
    answer3.textContent = answers1[2];
    answer4.textContent = answers1[3];
    answer1.addEventListener("click", wrongAnswer2);
    answer2.addEventListener("click", rightAnswer2);
    answer3.addEventListener("click", wrongAnswer2);
    answer4.addEventListener("click", wrongAnswer2);
}

function wrongAnswer1() {
    feedback.textContent = "Wrong!";
    questionElement.textContent = questions[1];
    answer1.textContent = answers1[0];
    answer2.textContent = answers1[1];
    answer3.textContent = answers1[2];
    answer4.textContent = answers1[3];
    answer1.addEventListener("click", wrongAnswer2);
    answer2.addEventListener("click", rightAnswer2);
    answer3.addEventListener("click", wrongAnswer2);
    answer4.addEventListener("click", wrongAnswer2);
}

function rightAnswer2() {
    feedback.textContent = "Correct!";
    questionElement.textContent = questions[2];
    answer1.textContent = answers2[0];
    answer2.textContent = answers2[1];
    answer3.textContent = answers2[2];
    answer4.textContent = answers2[3];
    answer1.addEventListener("click", wrongAnswer3);
    answer2.addEventListener("click", wrongAnswer3);
    answer3.addEventListener("click", wrongAnswer3);
    answer4.addEventListener("click", rightAnswer3);
}

function wrongAnswer2() {
    feedback.textContent = "Wrong!";
    questionElement.textContent = questions[2];
    answer1.textContent = answers2[0];
    answer2.textContent = answers2[1];
    answer3.textContent = answers2[2];
    answer4.textContent = answers2[3];
    answer1.addEventListener("click", wrongAnswer3);
    answer2.addEventListener("click", wrongAnswer3);
    answer3.addEventListener("click", wrongAnswer3);
    answer4.addEventListener("click", rightAnswer3);
}

function rightAnswer3() {
    feedback.textContent = "Correct!";
    questionElement.textContent = questions[3];
    answer1.textContent = answers3[0];
    answer2.textContent = answers3[1];
    answer3.textContent = answers3[2];
    answer4.textContent = answers3[3];
    answer1.addEventListener("click", rightAnswer4);
    answer2.addEventListener("click", wrongAnswer4);
    answer3.addEventListener("click", wrongAnswer4);
    answer4.addEventListener("click", wrongAnswer4);
}

function wrongAnswer3() {
    feedback.textContent = "Wrong!";
    questionElement.textContent = questions[3];
    answer1.textContent = answers3[0];
    answer2.textContent = answers3[1];
    answer3.textContent = answers3[2];
    answer4.textContent = answers3[3];
    answer1.addEventListener("click", rightAnswer4);
    answer2.addEventListener("click", wrongAnswer4);
    answer3.addEventListener("click", wrongAnswer4);
    answer4.addEventListener("click", wrongAnswer4);
}

function rightAnswer4() {
    feedback.textContent = "Correct!";
    questionElement.textContent = questions[4];
    answer1.textContent = answers4[0];
    answer2.textContent = answers4[1];
    answer3.textContent = answers4[2];
    answer4.textContent = answers4[3];
    answer1.addEventListener("click", endGame);
    answer2.addEventListener("click", endGameW);
    answer3.addEventListener("click", endGameW);
    answer4.addEventListener("click", endGameW);
}

function wrongAnswer4() {
    feedback.textContent = "Wrong!";
    questionElement.textContent = questions[4];
    answer1.textContent = answers4[0];
    answer2.textContent = answers4[1];
    answer3.textContent = answers4[2];
    answer4.textContent = answers4[3];
    answer1.addEventListener("click", endGame);
    answer2.addEventListener("click", endGameW);
    answer3.addEventListener("click", endGameW);
    answer4.addEventListener("click", endGameW);
}