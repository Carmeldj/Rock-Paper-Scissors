function getComputerChoice() {
  const cpu = Math.random();
  if (cpu >= 0 && cpu < 1 / 3) return "rock";
  else if (cpu >= 1 / 3 && cpu < 2 / 3) return "paper";
  else return "scissors";
}

//console.log(getComputerChoice());

function getPlayerSelection() {
  const pl = prompt("Choose between rock paper and scissors:");
  return pl.toLowerCase();
}

//console.log(playerSelection());

function playGame() {
  for (let i = 0; i <= 4; i++) {
    const c = getComputerChoice();
    const p = getPlayerSelection();

    function playRound(c, p) {
      if (c == p) return "You are tie !!!";
      else if (c == "rock" && p == "paper") return "You win! Paper beats Rock";
      else if (c == "rock" && p == "scissors")
        return "You lose! Rock beats Scissors";
      else if (c == "scissors" && p == "paper")
        return "You lose! Scissors beats Paper";
      else if (c == "scissors" && p == "rock")
        return "You win! Rock beats Scissors";
      else if (c == "paper" && p == "rock") return "You lose! Paper beats rock";
      else return "You win! Scissors beats Paper";
    }

    console.log(playRound(c, p));
  }
}

playGame();
