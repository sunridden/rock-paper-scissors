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

function playRound(player, computerSelection) {

    let resultText = '';
    const result = document.querySelector("#result-text");

    let winner = 0;
   
    if (player === "Rock") {
        if (computerSelection === "Scissors") {
            resultText = "You Win! Rock beats Scissors";
            winner = 0;
        } else if (computerSelection === "Paper") {
            resultText = "You Lose! Paper beats Rock";
            winner = 1;
        } else {
            resultText = "Tie!";
            winner = 2;
        }
    }
    else if (player === "Paper") {
        if (computerSelection === "Rock") {
            resultText = "You Win! Paper beats Rock";
            winner = 0;
        } else if (computerSelection === "Scissors") {
            resultText = "You Lose! Scissors beats Paper";
            winner = 1;
        } else {
            resultText = "Tie!";
            winner = 2;
        }
    }
    else if (player === "Scissors") {
        if (computerSelection === "Paper") {
            resultText = "You Win! Scissors beats Paper";
            winner = 0;
        } else if (computerSelection === "Rock") {
            resultText = "You Lose! Rock beats Scissors";
            winner = 1;
        } else {
            resultText = "Tie";
            winner = 2;
        }
    }

    result.textContent = resultText;
    return winner;
}

function updateScore(playerScore, computerScore, result) {
    const player = document.querySelector("#player-score");
    const computer = document.querySelector("#computer-score");

    player.textContent = playerScore;
    computer.textContent = computerScore;

}

function gameStatus(playerScore, computerScore) {
    if (playerScore >= 5 || computerScore >= 5) {
        return true;
    } else {
        return false;
    }
}

function displayWinner(winner) {
    const introText = document.querySelector("#intro-text");
    if (winner === 0) {
        introText.textContent = "Congratulations! You've successfully beaten the computer.";
    } else if (winner === 1) {
        introText.textContent = "How unfortunate. You've lost against the computer.";
    } else {
        introText.textContent = "No winner.";
    }

    const startBtn = document.getElementById('start-button');
    startBtn.style.display = "inline";
    
}

function resetGame() {
    const introText = document.querySelector("#intro-text");
    introText.textContent = "Pick a weapon...";

    const resultText = document.querySelector("#result-text");
    resultText.textContent = "Decide your fate";

    //resets score div showing on player's screen
    updateScore(0, 0, 2);
}

function stopGame() {
    const btn = document.querySelectorAll('.button');
    btn.forEach((button) => {
        button.removeEventListener('click', () => {
            if (button.classList.contains('rock')) {
                roundResult = playRound("Rock", computerPlay()); 
            } else if (button.classList.contains('paper')) {
                roundResult = playRound("Paper", computerPlay());
            } else {
                roundResult = playRound("Scissors", computerPlay());
            }
        })
    })
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let gameEnded = false;
    let roundResult = 2;
  
    //resets score from previous round
    resetGame();
   
    const btn = document.querySelectorAll('.button');
    btn.forEach((button) => {
        button.addEventListener('click', buttonInput)
    })

    function buttonInput() {
        if (this.classList.contains('rock')) {
            roundResult = playRound("Rock", computerPlay());
        } else if (this.classList.contains('paper')) {
            roundResult = playRound("Paper", computerPlay());
        } else {
            roundResult = playRound("Scissors", computerPlay());
        }
        //functionality for keeping track of score
        if (roundResult === 0) {
            playerScore++;
        } else if (roundResult === 1) {
            computerScore++;
        }

        updateScore(playerScore, computerScore, roundResult);
        gameEnded = gameStatus(playerScore, computerScore);

        if (gameEnded === true) {
            let winner = roundResult;
            displayWinner(winner);
            removeButtonInput(buttonInput);
           
        }
    }
  
    function removeButtonInput(buttonInput) {
        btn.forEach((button) => {
            button.removeEventListener('click', buttonInput);
            console.log("Removed event handler from: " + button.className);
        })
    }
 }
 



//Checks for button clicks
function startGame() {
    const startBtn = document.getElementById('start-button');
    startBtn.addEventListener('click', () => {
        startBtn.style.display = "none";
        playGame();
    })
}

startGame();


