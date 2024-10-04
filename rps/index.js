// console.log(Math.floor(Math.random() * 10));
// scissors
function getComputerChoice() {
  let computerChoice = 0;
  const getNumber = Math.floor(Math.random() * 9 + 1);
  if (getNumber <= 3) {
    return (computerChoice = "ROCK");
    //   ,console.log(`number is ${getNumber} so it's rock`)
  } else if (getNumber < 3 || getNumber <= 6) {
    return (computerChoice = "PAPER");
    //   ,console.log(`number is ${getNumber} so it's Paper`)
  } else {
    return (computerChoice = "SCISSORS");
    //   ,console.log(`number is ${getNumber} so it's Scissors`)
  }
}
getComputerChoice();

function getHumanChoice() {
  let humanChoice = window
    .prompt("Decide one : Rock, Paper, Scissors")
    .toUpperCase();
  return humanChoice;
  //   console.log(humanChoice);
}

// getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound() {
  let playGame = 1;
  while (playGame <= 5) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(
      `Round ${playGame}: You chose ${humanChoice}, Computer chose ${computerChoice}`
    );

    if (humanChoice === computerChoice) {
      console.log(`${playGame} Round: It's a draw!`);
    } else if (
      (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
      (humanChoice === "PAPER" && computerChoice === "ROCK") ||
      (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
      console.log(`${playGame} Round: You won!`);
      humanScore++;
    } else {
      console.log(`${playGame} Round: Computer won!`);
      computerScore++;
    }
    playGame++;
  }

  console.log(`Final Score: You - ${humanScore}, Computer - ${computerScore}`);
}

playRound();
