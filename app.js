let userChosen;
let computerChosen;

var result = results();
const displayResult = document.getElementById("result");
const computerChoice = document.getElementById("computer-choice");

const userChoice = document.getElementById("user-choice");
const possibleChoices = document.querySelectorAll("body");



//get userChosen
//possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", clicked));

possibleChoices.forEach(
    function() {
        addEventListener("click", clicked)
    });

function clicked(e) {
    userChosen = e.target.id;
    generatedComputerChoice();
    results();
    userChoice.innerHTML = userChosen;
    computerChoice.innerHTML = computerChosen;
    displayResult.innerHTML = result;
    console.log(userChosen);
}


function generatedComputerChoice() {
    const randomNumber = Math.round(Math.random() * (2));
    if (randomNumber === 0) {
        return computerChosen = "rock";
    } else if (randomNumber === 1) {
        return computerChosen = "paper";
    } else if (randomNumber === 2) {
        return computerChosen = "scissors";
    }
}


function results() {
    if (computerChosen === userChosen) {
        return result = 'it is a Tie'
    } else if (computerChosen === "rock" && userChosen === "paper") {
        return result = 'you win'
    } else if (computerChosen === "rock" && userChosen === "scissors") {
        return result = 'you lost'
    } else if (computerChosen === "paper" && userChosen === "rock") {
        return result = 'you lost'
    } else if (computerChosen === "paper" && userChosen === "scissors") {
        return result = 'you win'
    } else if (computerChosen === "scissors" && userChosen === "rock") {
        return result = 'you win'
    } else if (computerChosen === "scissors" && userChosen === "paper") {
        return result = 'you lost'
    }


}