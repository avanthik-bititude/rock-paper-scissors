function getRandom() {
  const max = 3;
  const min = 1;
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice(button) {
  return button.id;
}

function playRound(button) {
  const humanChoice = getHumanChoice(button);
  const systemChoice = getRandom();
  console.log("System Choice:", systemChoice, "Your choice:", humanChoice);
  document.getElementById("choice-human").innerHTML = humanChoice.toUpperCase();
  document.getElementById("choice-system").innerHTML =
    systemChoice.toUpperCase();
  if (systemChoice === humanChoice) {
    return "tie";
  } else if (
    (systemChoice === "paper" && humanChoice === "scissors") ||
    (systemChoice === "scissors" && humanChoice === "rock") ||
    (systemChoice === "rock" && humanChoice === "paper")
  ) {
    return "human";
  } else {
    return "system";
  }
}

function resetGame() {
  humanScore = 0;
  systemScore = 0;
  document.getElementById("choice-human").innerHTML = "Null";
  document.getElementById("choice-system").innerHTML = "Null";
  document.getElementById("score-human").innerHTML = humanScore;
  document.getElementById("score-system").innerHTML = systemScore;
  console.log("Game reset");
}


let humanScore = 0;
let systemScore = 0;
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const result = playRound(button);
    if (result === "human") {
      humanScore++;
    } else if (result === "system") {
      systemScore++;
    }
    console.log("System Score:", systemScore, "Your Score:", humanScore);
    document.getElementById("score-human").innerHTML = humanScore;
    document.getElementById("score-system").innerHTML = systemScore;
    if (humanScore >= 5) {
      alert("Yahh! YOU WIN!");
      resetGame();
    } else if (systemScore >= 5) {
      alert("oops! SYSTEM WINS");
      resetGame();
    }
  });
});

document.getElementById("reset-button").addEventListener("click", resetGame);
