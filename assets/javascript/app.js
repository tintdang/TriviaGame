//Variables here
var trivia = [
    {
        question: "How would you select an element in jQuery?",
        choices: ["$('mov')", "$('vow')", "$(she)", "$('#clash')"],
        answer: "D",
    }, {
        question: "How would you write 'blahblah' in jQuery",
        choices: ["$('mov')", "$('vow')", "$(she)", "I am a test"],
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
    time: 4,
    reset: function () {
        timer.time = 4;
    },
    start: function () {
        if (!clockRunning) {
            intervalId = setInterval(timer.countdown, 1000);
            clockRunning = true;
        };

    },
    stop: function() {
        clearInterval(intervalId)
        clockRunning = false;
    },
    countdown: function () { //displays the 
        timer.time--;
        $("#timer").text(timer.time)
        if (timer.time == 0) {
            timedOut++;
            timer.stop();
            $("#img").attr("src", "assets/images/time.gif") //play this gif when they run out of time
            answerTimer.start()
            //they timed out so do a timed out here
            questionNumber++
            //run through next question
        }
    },

}

var answerTimer = {
    time: 6,
    start: function () {
        if (!clockRunningAnswer) {
            intervalIdAnswer = setInterval(answerTimer.countdown, 1000);
            clockRunningAnswer = true;
        };

    },
    stop: function() {
        clearInterval(intervalIdAnswer)
        clockRunningAnswer = false;
    },
    countdown: function () { //displays the 
        answerTimer.time--;
        if (answerTimer.time == 0) {
            //Run the next question
            timer.reset();
            $("#answerBox").hide();
            $("#question").hide();
            showQuestion();
            answerTimer.stop();
            answerTimer.time = 5;
        }
    },
}

function reset() {
    //reset stuff
}


function showQuestion(){
    if(questionNumber === trivia.length){
        //end the game please.
        //fill out results
        $("#correct").text("You got " + correct + " questions correct!");
        $("#incorrect").text("You got " + incorrect + " questions incorrect!");
        $("#timeOut").text("You timed out " + timedOut + " questions!");
        $("#questionBox").hide();
        reset();
    }
    else{
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


function renderAnswers(){
    $("#A").text(trivia[questionNumber].choices[0]);
    $("#B").text(trivia[questionNumber].choices[1]);
    $("#C").text(trivia[questionNumber].choices[2]);
    $("#D").text(trivia[questionNumber].choices[3]);
}



//Where my click functions would work
window.onload = function () {

    // $("#A").on("click", timer.start) // Test function to see if timer works

}

// inside the question asking function and to look for when the game ends

//Functions here
$("#results").hide();

//Starts the game with the button click
$("#startButton").on("click", function () {
    $("#results").show();
    $("#startGame").hide();
    timer.start();
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
    $("#question").hide();

    if (answer === correctAnswer){
        correct++
        $("#img").attr("src", "assets/images/correct.gif")
        timer.stop();
        answerTimer.start();
        
    }
    else {
        incorrect++
        $("#img").attr("src", "assets/images/wrong.gif")
        timer.stop();
        answerTimer.start();
    }

    questionNumber++

    //then show answer box fast in both if else function

    //if answer matches with triviaanswer they get a point
    //if they don't answer the question in the amoutn of time, they get tracked of what questions they didn't answer
    //else they answered it wrong so keep talley of that
});

//Set up Question box


//Set up answer box
//Set up wrong answer
//set up right answer


//reveal questions right/ wrong/ timed out





//Set up results at the end when they finish the trivia
