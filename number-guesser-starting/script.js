let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>
  Math.floor(Math.random() * 10) + 1

const compareGuesses = (userGuess, computerGuess, secretTargetNumber) => {
  if (Math.abs(userGuess - secretTargetNumber) <= Math.abs(computerGuess - secretTargetNumber))
    return true;
  else
    return false;
}

const updateScore = winner => {
  if (winner === "human")
    humanScore += 1;
  else if (winner === "computer")
    computerScore += 1;
}

const advanceRound = () => {
  currentRoundNumber +=1;
}

  console.log(generateTarget())
  console.log(compareGuesses(3,5,4))
