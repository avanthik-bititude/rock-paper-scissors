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

function playRound(systemChoice, humanChoice, humanScore, systemScore) {
  if (systemChoice === humanChoice) {
    console.log("");
  } else if (
    (systemChoice === "paper" && humanChoice === "scissors") ||
    (systemChoice === "scissors" && humanChoice === "rock") ||
    (systemChoice === "rock" && humanChoice === "paper")
  ) {
    humanScore += 1;
  } else {
    systemScore += 1;
  }
  console.log("System : ",systemChoice, " You : ",humanChoice);
  console.log("System Score: ",systemScore," Your Score: " ,humanScore);
  return {systemScore,humanScore}
}

const main = () => {
  let humanScore = 0;
  let systemScore = 0;

  for (let i = 0; i < 5; i++) {
    const systemChoice = getRandom();
    const humanChoice = getHumanChoice();
    output = playRound(systemChoice, humanChoice, humanScore, systemScore);
  }
    if (output.humanScore === output.systemScore) {
    return "Equal Points!";
  } else if (output.humanScore > output.systemScore) {
    return "You win!";
  } else {
    return "System Win!";
  }
};

console.log(main())