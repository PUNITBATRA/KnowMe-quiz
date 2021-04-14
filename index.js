var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Punit",
    score: 5,
  },

  {
    name: "User A",
    score: 4,
  },

  {
    name: "User B",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Jaipur"
}, {
  question: "Where I am studying right now? ",
  answer: "Jammu"
},
{
  question: "Which year currently I'm in? ",
  answer: "Final"
},
{
  question: "Which Tech-stack I am working on? ",
  answer: "MERN"
},
{
  question: "Where I am doing intern currently? ",
  answer: "Chennai"
}
];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to \"Do You Know Punit?\"");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("Right!");
    score = score + 1;
    
  } else {
    console.log("Wrong!");
   
  }

  console.log("Current Score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you have beaten it ping me on twitter @punitbatra6!");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


