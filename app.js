$("#startButton").on("click", function () {
   points.start();
})

var questions = [{
    question: "What is the name off the famous local theater?",
    answerOptions: ["The Fox Theater", "The Loft", "The Gallagher Theater", "The Screening Room"],
    correctAnswer: "The Fox Theater"
}, {
    question: "What side of town is A Mountain located on?",
    answerOptions: ["North", "West", "South", "East"],
    correctAnswer: "West"
}, {
    question: "What year did the San Xavier Mission complete construction?",
    answerOptions: ["1801", "1775", "1799", "1797"],
    correctAnswer: "1797"
}, {
    question: "The Saguaro Cactus blooms its first flower at 70 years old.",
    answerOptions: ["True", "False"],
    correctAnswer: "True"
}, {
    question: "What kind of Rattlesnake is the bridge on Broadway Boulevard modeled after?",
    answerOptions: ["Speckled", "Diamondack", "Blacktailed", "Sidewinder"],
    correctAnswer: "Diamondback"
}, {
    question: "Which university is the UofA's long time rival?",
    answerOptions: ["ASU", "UCLA", "FSU", "MIT"],
    correctAnswer: "ASU"
}, {
    question: "El Charro is the oldest Mexican restaurant is the U.S.",
    answerOptions: ["True", "False"],
    correctAnswer: "True"
}, {
    question: "These movies were filmed in/around Tucson, except for...",
    answerOptions: ["Revenge of the Nerds", "Can't Buy Me Love", "Animal House", "Major League"],
    correctAnswer: "Animal House"
}, {
    question: "Which big event takes over Tucson every February?",
    answerOptions: ["The Tamale Festival", "The 4th Avenue Street Fair", "The Gem and Mineral Show", "Lights in Winterhaven"],
    correctAnswer: "The Gem and Mineral Show"
}, {
    question: "The Monsoon Season is Tucson's fifth season (between summer and fall.)",
    answerOptions: ["True", "False"],
    correctAnswer: "True"
}]

var points = {
    correct: 0,
    incorrect: 0,
    time: 130,
    countdown: function(){
        points.time--;
        $("#time").html(points.time);
        if(points.time === 0){
            console.log("Time's Up!");
            points.done();
        }
    },
    start: function(){
        timer = setInterval(points.countdown,1000);
        $("#subwrapper").prepend('<h2> Time Left: <span id = "time"> 130 </span> seconds</h2>')
        $("#startButton").remove();
        for (var i = 0; i < questions.length; i++){
            $("#subwrapper").append("<h2>" + questions[i].question + "</h2>")
            for (var j = 0; j < questions[i].answerOptions.length; j++){
                $("#subwrapper").append("<input type = 'radio' name = 'question'-" + i + "' value = '" + questions[i].answerOptions[j] + "'>" + questions[i].answerOptions[j])
            }
        }
    }
}