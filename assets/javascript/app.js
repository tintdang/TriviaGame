//Variables here
var trivia = {
    question1: {
        question: "How would you write 'blahblah' in jQuery",
        choices: ["$('mov')", "$('vow')", "$(she)", "$('#clash')"],
        answer: 4,
    },
    question2: {
        question: "How would you write 'blahblah' in jQuery",
        choices: ["$('mov')", "$('vow')", "$(she)", "$('#clash')"],
        answer: 4,
    },
    question3: {
        question: "How would you write 'blahblah' in jQuery",
        choices: ["$('mov')", "$('vow')", "$(she)", "$('#clash')"],
        answer: 4,
    }
}

var intervalId;
var clockRunning = false;

//create timer
var timer = {
    time: 10,
    reset: function () {
        clearInterval(intervalId);
        clockRunning = false
        timer.time = 10;
    },
    start: function () {
        if (!clockRunning) {
            intervalId = setInterval(timer.countdown, 1000);
            clockRunning = true;
        };

    },
    countdown: function () { //displays the 
        timer.time--;
        $("#timer").text(timer.time)
        if (timer.time == 0) {
            timer.reset();
        };
    }

}

//Where my click functions would work
window.onload = function () {
    // $("#A").on("click", timer.start) // Test function to see if timer works

}


//Functions here
$("#results").hide();

//Starts the game with the button click
$("#startButton").on("click", function () {
    $("#results").show();
    $("#startGame").hide();
});

//sets up answer buttons
$(document).on("click", ".answer", function(){
    var answer = $(this).attr("option") //this calls the result of the answer
    console.log(answer);
    //if answer matches with triviaanswer they get a point
    //if they don't answer the question in the amoutn of time, they get tracked of what questions they didn't answer
    //else they answered it wrong so keep talley of that
});


//Set up right answer box




//Set up wrong answer box


//Set up results at the end when they finish the trivia
