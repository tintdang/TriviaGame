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

$("#A").on("click", timer.start())



    //Functions here
    $("#results").hide();

//Starts the game with the button click
$("#startButton").on("click", function () {
    $("#results").show();
    $("#startGame").hide();
});


