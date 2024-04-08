function getComputerChoice() {
  const cpu = Math.random();
  if (cpu >= 0 && cpu < 1 / 3) return "rock";
  else if (cpu >= 1 / 3 && cpu < 2 / 3) return "paper";
  else return "scissors";
}

//function getPlayerSelection() {
//const pl = prompt("Choose between rock paper and scissors:");
//return pl.toLowerCase();
//}

function playRound(p) {
  const c = getComputerChoice();
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

const btn1 = document.querySelector(".bt1");
const btn2 = document.querySelector(".bt2");
const btn3 = document.querySelector(".bt3");
const div = document.querySelector(".result");
const res = document.querySelector(".para");
const reset = document.querySelector(".reset");
let PlWins = 0;
let CpWins = 0;

document.addEventListener("click", function (event) {
  // check which link was clicked using the event.target.id property
  if (PlWins < 5 && CpWins < 5) {
    let round;
    switch (event.target.className) {
      case "bt1":
        round = playRound("rock");
        if (round.includes("win")) {
          PlWins += 1;
        } else if (round.includes("lose")) {
          CpWins += 1;
        }

        div.textContent = round + " " + PlWins + " : " + CpWins;
        res.textContent = checkWin(PlWins, CpWins);
        break;
      case "bt2":
        round = playRound("paper");
        if (round.includes("win")) {
          PlWins += 1;
        } else if (round.includes("lose")) {
          CpWins += 1;
        }
        div.textContent = round + " " + PlWins + " : " + CpWins;
        res.textContent = checkWin(PlWins, CpWins);
        break;
      case "bt3":
        round = playRound("scissors");
        if (round.includes("win")) {
          PlWins += 1;
        } else if (round.includes("lose")) {
          CpWins += 1;
        }
        div.textContent = round + " " + PlWins + " : " + CpWins;
        res.textContent = checkWin(PlWins, CpWins);
        break;
      case "reset":
        div.textContent = "0 : 0";
        PlWins = 0;
        CpWins = 0;
      default:
        break;
    }
  } /*else if (PlWins == 5) {
    res.textContent = "You win this game";
    // console.log("you Win the game");
    PlWins = 0;
    CpWins = 0;
    //console.log("Wanna play another game ?");
  } else if (CpWins == 5) {
    res.textContent = "You lose this game";
    //console.log("you Lose the game");
    PlWins = 0;
    CpWins = 0;
    //console.log("Wanna play another game ?");
  }*/
});
const checkWin = function (a, b) {
  if (a == 5) {
    PlWins = 0;
    CpWins = 0;
    return "You Win this game";
  } else if (b == 5) {
    PlWins = 0;
    CpWins = 0;
    return "You lose this game";
  }
};
//btn1.addEventListener("click", function () {
/*p = "rock";
    const rs = playRound(p);
    div.textContent = rs;
    if (rs.includes("win")) {
      winP = winP + 1;
    } else if (rs.includes("lose")) {
      winC = winC + 1;
    }
    res.textContent = winP + " " + winC;
    console.log(winC);
    console.log(winP);
});*/
/*btn2.addEventListener("click", function () {
  p = "paper";
  const rs = playRound(p);
  div.textContent = rs;
  if (rs.includes("win")) {
    winP = winP + 1;
  } else if (rs.includes("lose")) {
    winC = winC + 1;
  }
  res.textContent = winP + " " + winC;
  console.log(winC);
  console.log(winP);
});
btn3.addEventListener("click", function () {
  p = "scissors";
  const rs = playRound(p);
  div.textContent = rs;
  if (rs.includes("win")) {
    winP = winP + 1;
  } else if (rs.includes("lose")) {
    winC = winC + 1;
  }
  res.textContent = winP + " " + winC;
  console.log(winC);
  console.log(winP);
});*/
