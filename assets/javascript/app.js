//Pseudo-code: This is a quiz for the "Dark Knight" movie (2008). A score screen and a reset screen needs to be added. Classes and IDs also need to be rechecked in the HTML file, to ensure that they match the JQuery code, as they have undergone revisions.
//The game overall does not function, and will require additional work.
//As always, comments for improvement are appreciated!

////////////////////////////////////
//Questions:
//1. Which actor won an Oscar for The Dark Knight? 
//Choices: Christian Bale, Michael Cain, Heath Ledger, Aaron Eckhart
//Ans: Heath Ledger won a post-humous Oscar

//2. Which new vehicle of Batman's was introduced in TDK?
//Choices: Batwing, Jetskis, Batpod, Batcycle
//Ans: Batpod

//3. What sports car does Bruce Wayne drive?
//Choices: Ferrari 448 GTB, Lamborghini Murcielago, Ferrari SF90 Stradale, Lamborghini Aventador SV
//Ans: Lamborghini Murcielago

//4. What name does The Joker's nametag have in the "Hospital scene"?
//Choices: Denise, Sasha, Matilda, Erica
//Ans: Matilda

//5. At what location was the final confrontation between Batman and the Joker shot during filming?
//Choices: Sears Tower, Empire State Building, Trump Tower (Chicago), Flatiron
//Ans: Trump Tower (Chicago)

//6. Which of the following is true of The Dark Knight?
//Choices: It is the highest grossing comic book movie of all time, The first comic book movie to gross 1 billion dollars worldwide, Has the most oscar nominations (8) of any comic book movie, All of the above
//Ans: All of the above
///////////////////////////////////////////////

$(document).ready(function(){

var right = 0;
var wrong = 0;
var noAnswer = 0;
var timer = 10;
var guess = "";
var intervalId;
var timerOn = false;
var ques_amount = questions.length;
var choose;
var index;
var array = [];
var placeholder = [];

var questions = [ 
    {
        question: "Which actor won an Oscar for The Dark Knight?",
        choices: {
            a: 'Christian Bale',
            b: 'Michael Cain',
            c: 'Heath Ledger',
            d: 'Aaron Eckhart'
        },

        answer: 'c'
},

    {       
        question: "Which new vehicle of Batman's was introduced in TDK?",
        choices: {
            a: 'Batwing',
            b: 'Jetskis',
            c: 'Batpod',
            d: 'Batcycle'
        },

        answer: 'a'

}, 

    { 
        question: "What sports car does Bruce Wayne drive?",
        choices: {
            a: 'Ferrari 448 GTB',
            b: 'Lamborghini Murcielago',
            c: 'Ferrari SF90 Stradale',
            d: 'Lamborghini Aventador SV'
        },

        answer: 'b'

},

    {
        question: "What name does The Joker's nametag have in the 'Hospital scene'?",
        choices: {
            a: 'Denise',
            b: 'Sasha',
            c: 'Matilda',
            d: 'Erica'
        },

        answer: 'c'

},

    {
        question: "At what location was the final confrontation between Batman and the Joker shot during filming?",
        choices: {
            a: 'Sears Tower',
            b: 'Empire State Building',
            c: 'Trump Tower (Chicago)',
            d: 'Flatiron'
        },

        answer: 'c'

},

    {
        question: "Which of the following is true of The Dark Knight?",
        choices: {
            a: 'It is the highest grossing comic book movie of all time',
            b: 'The first comic book movie to gross 1 billion dollars worldwide',
            c: 'Has the most oscar nominations (8) of any comic book movie',
            d: 'All of the above'
        },

        answer: 'd'

},]


$("#play").on("click", function () {
    $("#play").hide();
    displayQuestion();
    Timer();
    for(var i = 0; i < questions.length; i++) {
placeholder.push(questions[i]);
    }
})
$("#reset").hide;

function TimedInterval(){
	if (!running) {
	intervalId = setInterval(decrement, 1000); 
	running = true;
	}
}

function decrement() {
	$("#TimeRemaining").html("<h3>Time remaining: " + timer + "</h3>");
    timer --;

if (timer === 0) {
    noAnswer++;
    stop();
    $("#results").html("<p>Time's up, Batman! The correct answer is: " + choose.choices[choose.answer] + "</p>");
    }
}

function stop() {
	running = false;
	clearInterval(intervalId);
}

function displayQuestion() {
	index = Math.floor(Math.random()*questions.length);
	choose = questions[index];

$("#questionContainer").html("<h2>" + choose.question + "</h2>");
		for(var i = 0; i < choose.choices.length; i++) {
			var userChoice = $("<div>");
			userChoice.addClass("answerchoice");
			userChoice.html(choose.choices[i]);
			userChoice.attr("data-guessvalue", i);
			$("#questionContainer").append(userChoice);
}

$(".answerchoice").on("click", function () {
	guess = $(this).attr("data-guessvalue");

	if (guess === choose.answer) {
		stop();
		right++;
		guess="";
		$("#results").html("<p>That's correct!</p>");
		
	} else {
		stop();
		wrong++;
		guess="";
		$("#results").html("<p>Wrong answer, Batman! The correct answer is: " + choose.choices[choose.answer] + "</p>");
    
        }
    }

$("#reset").on("click", function() {
        $("#reset").hide();
        $("#results").empty();
        $("#questionContainer").empty();
        for(var i = 0; i < holder.length; i++) {
            options.push(holder[i]);
        }
        runTimer();
        displayQuestion();
    
}

