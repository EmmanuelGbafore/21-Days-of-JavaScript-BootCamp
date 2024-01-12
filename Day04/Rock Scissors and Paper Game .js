function getUserChoice() {
    
    return "rock";      // user type in either rock, paper or scissors
  }
  
  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
  
  // Set your choice
  const userMove = getUserChoice();
  
  // Get computer's move
  const computerMove = getComputerChoice();
  
  // Determine the winner and display the result
  console.log(`You chose: ${userMove}`);
  console.log(`Computer chose: ${computerMove}`);
  console.log(determineWinner(userMove, computerMove));
  