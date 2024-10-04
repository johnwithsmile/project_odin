// console.log(Math.floor(Math.random() * 10));
// scissors
function getComputerChoice() {
  let computerChoice = "Ready";
  const getNumber = Math.floor(Math.random() * 9 + 1);
  if (getNumber <= 3) {
    return (computerChoice = "Rock");
    //   ,console.log(`number is ${getNumber} so it's rock`)
  } else if (getNumber < 3 || getNumber <= 6) {
    return (computerChoice = "Paper");
    //   ,console.log(`number is ${getNumber} so it's Paper`)
  } else {
    return (computerChoice = "Scissors");
    //   ,console.log(`number is ${getNumber} so it's Scissors`)
  }
}
getComputerChoice();

function getHumanChoice() {
  let humanChoice = window.prompt("Decide one : Rock, Paper, Scissors");
  //   console.log(humanChoice);
}

getHumanChoice();
