function getRandom() {
  const max = 3;
  const min = 1;
  const random = Math.floor(Math.random() * max - min + 1) + min;
  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const input = prompt("Enter you input : ");
  return input.toLowerCase();
}

function playRound(systemChoice, humanChoice) {
  if (systemChoice === humanChoice) {
    return;
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

let humanScore = 0;
let systemScore = 0;
for (let i = 0; i < 5; i++) {
  const systemChoice = getRandom();
  const humanChoice = getHumanChoice();
  console.log("System : ", systemChoice, " You : ", humanChoice);
  output = playRound(systemChoice, humanChoice);
  if (output === "human") {
    humanScore++;
  } else if (output === "system") {
    systemScore++;
  }
  console.log("System Score: ", systemScore, " Your Score: ", humanScore);
}

if (humanScore > systemScore) {
  console.log("YOU WIN!");
} else if (humanScore === systemScore) {
  console.log("MATCH DRAW");
} else {
  console.log("SYSTEM WIN!");
}
