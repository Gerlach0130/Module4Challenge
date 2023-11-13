var begin = document.querySelector(".begin");
var highScores = document.querySelector(".highscores");
var timerElement = document.querySelector(".timer");
var questionElement = document.querySelector(".questions");
var questions = ["The condition of an if / else statement uses which kind of brackets?",
    "Commonly used data types do NOT include ______.",
    "Arrays in JavaScript can be used to store ______.",
    "Before functions can execute, they must be ______.",
    "Individual numbers listed in variables are inside what?"];
var feedback = document.querySelector(".answerfeedback");
var timerCount;
var timer;
var textform = document.querySelector(".textform");
var submitbutton = document.querySelector(".submitbutton");

function beginQuiz() {
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    answer1.disabled = false;
    answer2.disabled = false;
    answer3.disabled = false;
    answer4.disabled = false;
    begin.disabled = true;
    timerCount = 60;
    startTimer();
    question1();
}

begin.addEventListener("click", beginQuiz);

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = "Time: " + timerCount;
          if (timerCount === 0) {
              clearInterval(timer);
              endGame();
          }
}, 1000);
}

function question1() {
    var answers0 = ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"];
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    highScores.disabled = true;
    questionElement.textContent = questions[0];
    answer1.textContent = answers0[0];
    answer2.textContent = answers0[1];
    answer3.textContent = answers0[2];
    answer4.textContent = answers0[3];
    answer1.addEventListener("click", wrongAnswer1, removeHandler);
    answer2.addEventListener("click", wrongAnswer1, removeHandler);
    answer3.addEventListener("click", rightAnswer1, removeHandler);
    answer4.addEventListener("click", wrongAnswer1, removeHandler);
}

highScores.addEventListener("click", showScores);

function showScores() { 
    var initials = localStorage.getItem("Initials");
    var score = localStorage.getItem("Score");
    questionElement.textContent = initials + " " + score;
}

function finishGame() {
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    questionElement.textContent = ""
    begin.disabled = false;
    highScores.disabled = false;
    document.getElementById("hssubmit").style.visibility = "hidden";
    timerElement.textContent = "Time: 60";
    feedback.textContent = "";
    answer1.disabled = false;
    answer2.disabled = false;
    answer3.disabled = false;
    answer4.disabled = false;
    begin.addEventListener("click", beginQuiz);
}

function showSubmit() {
    document.getElementById("hssubmit").style.visibility = "visible";
}



function rightAnswer1() {
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    var answers1 = ["Alerts", "Booleans", "Strings", "Numbers"];
    feedback.textContent = "Correct!";
    questionElement.textContent = questions[1];
    answer1.textContent = answers1[0];
    answer2.textContent = answers1[1];
    answer3.textContent = answers1[2];
    answer4.textContent = answers1[3];
    answer1.addEventListener("click", wrongAnswer2, removeHandler);
    answer2.addEventListener("click", rightAnswer2, removeHandler);
    answer3.addEventListener("click", wrongAnswer2, removeHandler);
    answer4.addEventListener("click", wrongAnswer2, removeHandler);
}

function wrongAnswer1() {
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    var answers1 = ["Alerts", "Booleans", "Strings", "Numbers"];
    feedback.textContent = "Wrong!";
    questionElement.textContent = questions[1];
    answer1.textContent = answers1[0];
    answer2.textContent = answers1[1];
    answer3.textContent = answers1[2];
    answer4.textContent = answers1[3];
    answer1.addEventListener("click", wrongAnswer2, removeHandler);
    answer2.addEventListener("click", rightAnswer2, removeHandler);
    answer3.addEventListener("click", wrongAnswer2, removeHandler);
    answer4.addEventListener("click", wrongAnswer2, removeHandler);
}

function rightAnswer2() {
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    var answers2 = ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"];
    feedback.textContent = "Correct!";
    questionElement.textContent = questions[2];
    answer1.textContent = answers2[0];
    answer2.textContent = answers2[1];
    answer3.textContent = answers2[2];
    answer4.textContent = answers2[3];
    answer1.addEventListener("click", wrongAnswer3, removeHandler);
    answer2.addEventListener("click", wrongAnswer3, removeHandler);
    answer3.addEventListener("click", wrongAnswer3, removeHandler);
    answer4.addEventListener("click", rightAnswer3, removeHandler);
}

function wrongAnswer2() {
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    var answers2 = ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"];
    feedback.textContent = "Wrong!";
    questionElement.textContent = questions[2];
    answer1.textContent = answers2[0];
    answer2.textContent = answers2[1];
    answer3.textContent = answers2[2];
    answer4.textContent = answers2[3];
    answer1.addEventListener("click", wrongAnswer3, removeHandler);
    answer2.addEventListener("click", wrongAnswer3, removeHandler);
    answer3.addEventListener("click", wrongAnswer3, removeHandler);
    answer4.addEventListener("click", rightAnswer3, removeHandler);
}

function rightAnswer3() {
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    var answers3 = ["Declared", "Tagged", "Clicked on", "Coded"];
    feedback.textContent = "Correct!";
    questionElement.textContent = questions[3];
    answer1.textContent = answers3[0];
    answer2.textContent = answers3[1];
    answer3.textContent = answers3[2];
    answer4.textContent = answers3[3];
    answer1.addEventListener("click", rightAnswer4, removeHandler);
    answer2.addEventListener("click", wrongAnswer4, removeHandler);
    answer3.addEventListener("click", wrongAnswer4, removeHandler);
    answer4.addEventListener("click", wrongAnswer4, removeHandler);
}

function wrongAnswer3() {
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    var answers3 = ["Declared", "Tagged", "Clicked on", "Coded"];
    feedback.textContent = "Wrong!";
    questionElement.textContent = questions[3];
    answer1.textContent = answers3[0];
    answer2.textContent = answers3[1];
    answer3.textContent = answers3[2];
    answer4.textContent = answers3[3];
    answer1.addEventListener("click", rightAnswer4, removeHandler);
    answer2.addEventListener("click", wrongAnswer4, removeHandler);
    answer3.addEventListener("click", wrongAnswer4, removeHandler);
    answer4.addEventListener("click", wrongAnswer4, removeHandler);
}

function rightAnswer4() {
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    var answers4 = ["Parenthsis", "Nothing", "Quotes", "Square Brackets"];
    feedback.textContent = "Correct!";
    questionElement.textContent = questions[4];
    answer1.textContent = answers4[0];
    answer2.textContent = answers4[1];
    answer3.textContent = answers4[2];
    answer4.textContent = answers4[3];
    answer1.addEventListener("click", endGameW, removeHandler);
    answer2.addEventListener("click", endGame, removeHandler);
    answer3.addEventListener("click", endGameW, removeHandler);
    answer4.addEventListener("click", endGameW, removeHandler);
}

function wrongAnswer4() {
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    var answers4 = ["Parenthsis", "Nothing", "Quotes", "Square Brackets"];
    feedback.textContent = "Wrong!";
    questionElement.textContent = questions[4];
    answer1.textContent = answers4[0];
    answer2.textContent = answers4[1];
    answer3.textContent = answers4[2];
    answer4.textContent = answers4[3];
    answer1.addEventListener("click", endGameW, removeHandler);
    answer2.addEventListener("click", endGame, removeHandler);
    answer3.addEventListener("click", endGameW, removeHandler);
    answer4.addEventListener("click", endGameW, removeHandler);
}

function removeHandler() {
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    answer1.removeEventListener("click", endGameW, removeHandler);
    answer2.removeEventListener("click", endGame, removeHandler);
    answer3.removeEventListener("click", endGameW, removeHandler);
    answer4.removeEventListener("click", endGameW, removeHandler);
    answer1.removeEventListener("click", wrongAnswer1, removeHandler);
    answer2.removeEventListener("click", wrongAnswer1, removeHandler);
    answer3.removeEventListener("click", rightAnswer1, removeHandler);
    answer4.removeEventListener("click", wrongAnswer1, removeHandler);
    answer1.removeEventListener("click", wrongAnswer2, removeHandler);
    answer2.removeEventListener("click", rightAnswer2, removeHandler);
    answer3.removeEventListener("click", wrongAnswer2, removeHandler);
    answer4.removeEventListener("click", wrongAnswer2, removeHandler);
    answer1.removeEventListener("click", wrongAnswer3, removeHandler);
    answer2.removeEventListener("click", wrongAnswer3, removeHandler);
    answer3.removeEventListener("click", wrongAnswer3, removeHandler);
    answer4.removeEventListener("click", rightAnswer3, removeHandler);
    answer1.removeEventListener("click", rightAnswer4, removeHandler);
    answer2.removeEventListener("click", wrongAnswer4, removeHandler);
    answer3.removeEventListener("click", wrongAnswer4, removeHandler);
    answer4.removeEventListener("click", wrongAnswer4, removeHandler);
    return;
}

function endGame() {
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    answer1.textContent = "A.";
    answer2.textContent = "B.";
    answer3.textContent = "C.";
    answer4.textContent = "D.";
    answer1.disabled = true;
    answer2.disabled = true;
    answer3.disabled = true;
    answer4.disabled = true;
    begin.disabled = true;
    document.querySelector(".textform").value="";
    feedback.textContent = "Correct!";
    questionElement.textContent = "Your Score = " + timerCount + " Enter Initials:";
    clearInterval(timer);
    document.getElementById("hssubmit").style.visibility = "visible";
    var initials = textform.value;
    submitbutton.addEventListener("click", function() {
        feedback.textContent = "";
        var initials = textform.value;
        localStorage.setItem("Score", timerCount);
        localStorage.setItem("Initials", initials);
        finishGame();
    });
}

function endGameW() {
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    answer1.textContent = "A.";
    answer2.textContent = "B.";
    answer3.textContent = "C.";
    answer4.textContent = "D.";
    answer1.disabled = true;
    answer2.disabled = true;
    answer3.disabled = true;
    answer4.disabled = true;
    begin.disabled = true;
    document.querySelector(".textform").value="";
    feedback.textContent = "Wrong!";
    questionElement.textContent = "Your Score = " + timerCount + " Enter Initials:";
    clearInterval(timer);
    document.getElementById("hssubmit").style.visibility = "visible";
    var initials = textform.value;
    submitbutton.addEventListener("click", function() {
        feedback.textContent = "";
        var initials = textform.value;
        localStorage.setItem("Score", timerCount);
        localStorage.setItem("Initials", initials);
        finishGame();
        submitbutton.removeEventListener("click");
    });
}

function submitForm() {
    var form = document.querySelector(".textform")[0];
    form.submit();
    form.reset();
    return false;
}