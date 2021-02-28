//all the .js files invoked that come before this .js file is invoked will be inherited into it

//3 ways to devalre varaibles
// var = temp variable, can be used globally
// let = temp variable
// const = final variable

//webELement declaration area
const questionBox = document.querySelector("#actual-question"); //querySelector returns a webElement
const solutionBox = document.querySelector("#actual-solution");

const questionID = document.querySelector("#question-id");
const timerAmount = document.querySelector("#timer");

const nextButton = document.querySelector("#btn-one");
const solutionButton = document.querySelector("#btn-two");

//Global varaibles declaration
let questions = [...JAVA]; //temp array that we assigned from questions.js
// ... means we dont change what the array had in it but we may add to it or concat, working with all the elements inside the JAVA array

//Event Listener area
nextButton.addEventListener("click", nextButtonHandler); //added a eventListener property to this object
solutionButton.addEventListener("click", solutionButtonHandler);

//Function area
function nextButtonHandler(event) {
  // this preventDefault() helps us prevent refreshing
  event.preventDefault();
  updateQuestions();
}

function solutionButtonHandler(event) {
  // this preventDefault() helps us prevent refreshing
  event.preventDefault();
  updateSolutions();
}

var solutionText;
var questionText;

function updateQuestions() {
  //once it reaches 0 then nothing left to update
  let randomIndex = Math.floor(Math.random() * questions.length); //double to int
  //how does it see the questions.js???????*******************

  questionText = JAVA[randomIndex].q;
  solutionText = JAVA[randomIndex].s;
  let timerMinutes = JAVA[randomIndex].t;
  questionBox.innerHTML = questionText; //goes into the questionBox webELement and changes the inner text to the random question we got from questions.js

  timerAmount.innerHTML = timerMinutes;

  questions.splice(randomIndex, 1); //removes this index from our array.
}

function updateSolutions() {
  solutionBox.innerHTML = solutionText;
}
