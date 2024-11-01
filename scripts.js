let getComputerChoice = function() {
    return Math.floor(Math.random() * 3);
  }

let getPlayerchoice = function() {
    let choice = prompt("Choose between Rock, Paper or Scissors!").toLowerCase()
    switch (choice) {
        case "rock":
          return 0;
        case "paper":
          return 1;
        case "scissors":
          return 2;
      }
}

let game = function() {
    let round = 0, playerwins = 0, computerwins = 0;
    do {
        let computerchoice = getComputerChoice(), playerchoice = getPlayerchoice()
        if (computerchoice == 0 && playerchoice == 1) {
          playerwins++; round++;
        } if (computerchoice == 0 && playerchoice == 2) {
          computerwins++; round++;
        } if (computerchoice == 1 && playerchoice == 2) {
          playerwins++; round++;
        } if (computerchoice == 1 && playerchoice == 0) {
          computerwins++; round++;
        } if (computerchoice == 2 && playerchoice == 0) {
          playerwins++; round++;
        } if (computerchoice == 2 && playerchoice == 1) {
          computerwins++; round++;
        } if (computerchoice == playerchoice) {
          round++;
        }
    } while (round != 5);
    console.log("Player Wins:", playerwins);
    console.log("Computer Wins:", computerwins);
    console.log("Rounds Played:", round);
}

game()