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
        question: "How would you write 'blahblah' in jQuery",
        choices: ["$('mov')", "$('vow')", "$(she)", "$('#clash')"],
        answer: "C",
    }
]
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
        timer.time = 11;
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
            timer.reset();
            // $("#question").hide();
            showQuestion();
            answerTimer.stop();
            answerTimer.time = 5;
        }
    },
}

function reset() {
    // reset stuff
    questionNumber = 0;
    correct = 0;
    incorrect = 0;
    timedOut = 0;
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





// inside the question asking function and to look for when the game ends

//Functions here
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

//sets up answer buttons
$(document).on("click", ".answer", function () {
    var answer = $(this).attr("option") //this calls the result of the answer
    var correctAnswer = trivia[questionNumber].answer
    console.log(answer);
    // hide answer box function
    $("#answerBox").hide();
    // clear question
    // $("#question").hide();

    if (answer === correctAnswer) {
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
}) //resets the game

//Set up Question box


//Set up answer box
//Set up wrong answer
//set up right answer


//reveal questions right/ wrong/ timed out





//Set up results at the end when they finish the trivia
