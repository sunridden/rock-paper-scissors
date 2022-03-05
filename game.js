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
            console.log("You Win! Rock beats Scissors");
            return 1;
        } else if (computerSelection === "Paper") {
            console.log("You Lose! Paper beats Rock");
            return 2;
        } else {
            console.log("Tie!");
            return 0;
        }
    }
    if (player === "Paper") {
        if (computerSelection === "Rock") {
            console.log("You Win! Paper beats Rock");
            return 1;
        } else if (computerSelection === "Scissors") {
            console.log("You Lose! Scissors beats Paper");
            return 2;
        } else {
            console.log("Tie!");
            return 0;
        }
    }
    if (player === "Scissors") {
        if (computerSelection === "Paper") {
            console.log("You Win! Scissors beats Paper");
            return 1;
        } else if (computerSelection === "Rock") {
            console.log("You Lose! Rock beats Scissors");
            return 2;
        } else {
            console.log("Tie");
            return 0;
        }
    }
    else {
        console.log("Error! Player Selection Must Be (Rock, Paper, or Scissors)")
    }
}

function game() {
    let winner = 0;
    let loser = 0;

    for (let i = 0; i < 5; i++ ) {
        let currentRound = (playRound(prompt("Choose a weapon!"), computerPlay()));
        if (currentRound === 1) {
            winner++;
        } else if (currentRound === 2) {
            loser++;
        }
    }

    if (winner > loser) {
        console.log("You won the game! Refresh to play again.");
    } else if (winner < loser) {
        console.log("You lost! Refresh to play again.");
    } else {
        console.log("Tie Game! Refresh to play again.");
    }
}