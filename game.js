console.log("Hello world");

function computerPlay() {
    let choice = Math.floor(Math.random() * 3) + 1; //Picks a random number between 1-3 and returns it
    if (choice === 1) {
        choice = "Rock";
    } else if (choice === 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {

    let firstLetter = playerSelection.substr(0, 1).toUpperCase();
    let remainingLetters = playerSelection.slice(1).toLowerCase();
    let player = (firstLetter + remainingLetters);

    if (player === "Rock") {
        if (computerSelection === "Scissors") {
            return ("You Win! Rock beats Scissors");
        } else if (computerSelection === "Paper") {
            return ("You Lose! Paper beats Rock");
        } else {
            return ("Tie!");
        }
    }
    if (player === "Paper") {
        if (computerSelection === "Rock") {
            return ("You Win! Paper beats Rock");
        } else if (computerSelection === "Scissors") {
            return ("You Lose! Scissors beats Paper");
        } else {
            return ("Tie!");
        }
    }
    if (player === "Scissors") {
        if (computerSelection === "Paper") {
            return ("You Win! Scissors beats Paper");
        } else if (computerSelection === "Rock") {
            return ("You Lose! Rock beats Scissors");
        } else {
            return ("Tie");
        }
    }
    else {
        return ("Error! Player Selection Must Be (Rock, Paper, or Scissors)")
    }
}