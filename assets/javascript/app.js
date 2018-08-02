//Variables here
var trivia = [{
    question: "How would you write 'blahblah' in jQuery",
    choices: ["$('mov')", "$('vow')", "$(she)", "$('#clash')"],
    answer: 4,
},{
    question: "How would you write 'blahblah' in jQuery",
    choices: ["$('mov')", "$('vow')", "$(she)", "$('#clash')"],
    answer: 4,
},{
    question: "How would you write 'blahblah' in jQuery",
    choices: ["$('mov')", "$('vow')", "$(she)", "$('#clash')"],
    answer: 4,
},{
    question: "How would you write 'blahblah' in jQuery",
    choices: ["$('mov')", "$('vow')", "$(she)", "$('#clash')"],
    answer: 4,
},{
    question: "How would you write 'blahblah' in jQuery",
    choices: ["$('mov')", "$('vow')", "$(she)", "$('#clash')"],
    answer: 4,
},{
    question: "How would you write 'blahblah' in jQuery",
    choices: ["$('mov')", "$('vow')", "$(she)", "$('#clash')"],
    answer: 4,
},{
    question: "How would you write 'blahblah' in jQuery",
    choices: ["$('mov')", "$('vow')", "$(she)", "$('#clash')"],
    answer: 4,
},{
    question: "How would you write 'blahblah' in jQuery",
    choices: ["$('mov')", "$('vow')", "$(she)", "$('#clash')"],
    answer: 4,
}]

var intervalId;

//create timer
var timer = {
    time: 10,
    reset: function(){
        $("#timer").text(10);
        time: 10;
    },
    start: function(){
        intervalId = setInterval(timer.count, 1000);
        if (time === 0){

        }
    },
    stop: function(){
        
    },
    countdown: function(){ //displays the 
        var count = timer.time--;
        $("timer").text(count)
    }

}





//Functions here
$("#results").hide();

//Starts the game with the button click
$("#startButton").on("click", function(){
    $("#results").show();
    $("#startGame").hide();
});


