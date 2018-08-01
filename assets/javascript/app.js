//Variables here
var trivia = [{
    question: "How would you write 'blahblah' in jQuery",
    choices: ["$('mov')", "$('vow')", "$(she)", "$('#clash')"],
    answer: 1,
}]




//Functions here
$("#results").hide();

//Starts the game with the button click
$("#startButton").on("click", function(){
    $("#results").show();
    $("#startGame").hide();
});


