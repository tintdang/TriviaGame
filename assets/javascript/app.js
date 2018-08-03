//Variables here
var trivia = [
    {
        question: "How would you select an element in jQuery?",
        choices: ["!('div')", "*(div')", "#('div')", "$('div')"],
        answer: "D",
    }, {
        question: "In CSS, what selector calls a class?",
        choices: [".", "!", "$", "?"],
        answer: "A",
    }, {
        question: "In HTML, how do you start a document?",
        choices: ["[!DOCTYPE html]", "<$DOCTYPE html>", "<!DOCTYPE html>", "(!DOCTYPE html)"],
        answer: "C",
    }, {
        question: "What element in HTML contains the visible page content?",
        choices: ["<head>", "<body>", "<html>", "<title>"],
        answer: "B",
    }, {
        question: "In JavaScript, what element is used to store multiple values in a single variable?",
        choices: ["Arrays", "Strings", "Functions", "Variables"],
        answer: "A",
    }, {
        question: "What jQuery method is used to insert concent at the END of a selected element?",
        choices: ["prepend()", "append()", "after()", "final()"],
        answer: "B",
    }, {
        question: "In HTML, what tag is used to render or transform text into an important (bold) version?",
        choices: ["<bold>", "<em>", "<a>", "<strong>"],
        answer: "D",
    }, {
        question: "What tag is used to define a hyperlink, or link to another page?",
        choices: ["<blockquote>", "<strong>", "<a>", "<i>"],
        answer: "C",
    }, {
        question: "In JavaScript, what is a block of code called that is used to perform a specific task?",
        choices: ["Function", "Declaration", "String", "Variable"],
        answer: "A",
    }, {
        question: "Which jQuery method is used to hide selected elements",
        choices: ["visible(false)", "display(none)", "hidden()", "hide()"],
        answer: "D",
    }
]

//shuffle the array
trivia.sort(function(){return 0.5 - Math.random()});

var questionNumber = 0;
var intervalId;
var clockRunning = false;
var intervalIdAnswer;
var clockRunningAnswer = false;
var correct = 0;
var timedOut = 0;
var incorrect = 0;

//create timer
var timer = {
    time: 10,
    reset: function () {
        timer.time = 10;
        $("#timer").text(timer.time) // Sets the timer to refresh
    },
    start: function () {
        if (!clockRunning) {
            intervalId = setInterval(timer.countdown, 1000);
            clockRunning = true;
        };

    },
    stop: function () {
        clearInterval(intervalId)
        clockRunning = false;
    },
    countdown: function () { //displays the 
        timer.time--;
        $("#timer").text(timer.time)
        if (timer.time == 0) {
            timedOut++;
            timer.stop();
            $("#answerBox").hide();
            $("#img").attr("src", "assets/images/time.gif") //play this gif when they run out of time
            $("#question").text("Oof, you ran out of time");
            answerTimer.start()
            //they timed out so do a timed out here
            questionNumber++
            //run through next question
        }
    },

}
//This timer is made for the wait inbetween answers
var answerTimer = {
    time: 5,
    start: function () {
        if (!clockRunningAnswer) {
            intervalIdAnswer = setInterval(answerTimer.countdown, 1000);
            clockRunningAnswer = true;
        };

    },
    stop: function () {
        clearInterval(intervalIdAnswer)
        clockRunningAnswer = false;
    },
    countdown: function () { //displays the 
        answerTimer.time--;
        if (answerTimer.time == 0) {
            //Run the next question
            timer.reset(); // resets the timer

            showQuestion(); //Run the next question!
            answerTimer.stop();
            answerTimer.time = 5; // resets timer
        }
    },
}

function reset() {
    // reset stuff
    questionNumber = 0;
    correct = 0;
    incorrect = 0;
    timedOut = 0;
    // Shuffle it again
    trivia.sort(function(){return 0.5 - Math.random()});
    $("#playAgain").hide(); // hide the button again
    $("#results").show();
    $("#timerBox").show();
    $("#questionBox").show();
    $("#stats").hide();
    $("#correct, #incorrect, #timeOut").text("") //clear the results
    showQuestion();// Start again!
}


function showQuestion() {
    if (questionNumber === trivia.length) {
        //end the game please.
        //fill out results
        $("#stats").show();
        $("results").show();
        $("#correct").text("You got " + correct + " questions correct!");
        $("#incorrect").text("You got " + incorrect + " questions incorrect!");
        $("#timeOut").text("You timed out on " + timedOut + " questions!");
        $("#questionBox").hide();
        $("#timerBox").hide();
        $("#playAgain").show(); //ask them to play again
    }
    else {
        $("#img").attr("src", "assets/images/thinking.gif")
        $("#question").text(trivia[questionNumber].question) //Shows current question
        renderAnswers(); // Shows the answers through function renderAnswers
        $("#question").show();
        $("#answerBox").show();
        timer.start();
        // questionNumber++
        // if they selected the right answer, reset interval and select 
        // if timer.time === 0, show that they timed out
        // else they selected the wrong answer
    }
}


function renderAnswers() { //This renders all the answer choices into the buttons
    $("#A").text(trivia[questionNumber].choices[0]);
    $("#B").text(trivia[questionNumber].choices[1]);
    $("#C").text(trivia[questionNumber].choices[2]);
    $("#D").text(trivia[questionNumber].choices[3]);
}





//Hide the stuff i don't want to show
$("#results").hide();
$("#questionBox").hide();
$("#answerBox").hide();
$("#playAgain").hide(); // hide play again button
$("#stats").hide();

//Starts the game with the button click
$("#startButton").on("click", function () {
    $("#results").show();
    $("#startGame").hide();
    $("#questionBox").show();
    showQuestion();
});

//sets up answer buttons to respond to clicks
$(document).on("click", ".answer", function () {
    var answer = $(this).attr("option") //this calls the result of the answer
    var correctAnswer = trivia[questionNumber].answer
    console.log(answer);
    // hide answer box function
    $("#answerBox").hide();
    // clear question
    // $("#question").hide();

    if (answer === correctAnswer) { //This checks if the answer is equal to the option attribute
        correct++ //iterate correct answers
        $("#img").attr("src", "assets/images/correct.gif") //correct gif
        $("#question").text("You're right!");
        timer.stop(); // stop the timer
        answerTimer.start();// start the answer break timer


    }
    else {
        incorrect++ //iterate incorrect answer
        $("#img").attr("src", "assets/images/wrong.gif") // incorrect gif
        $("#question").text("Ooh, sorry you're.......")
        timer.stop(); // stop the timer
        answerTimer.start(); // start the break timer
    }

    questionNumber++

    //then show answer box fast in both if else function

    //if answer matches with triviaanswer they get a point
    //if they don't answer the question in the amoutn of time, they get tracked of what questions they didn't answer
    //else they answered it wrong so keep talley of that
});

$(document).on("click", "#playAgain", function(){
    reset();
}) //resets the game on pressing play again
