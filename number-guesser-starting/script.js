let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>
  Math.floor(Math.random() * 10) + 1

const compareGuesses = (userGuess, computerGuess, secretTargetNumber) => {
  if (Math.abs(userGuess - secretTargetNumber) <= Math.abs(computerGuess - secretTargetNumber))
    return "User wins";
  else
    return "Computer wins";
}


  console.log(generateTarget())
  console.log(compareGuesses(3,5,4))
