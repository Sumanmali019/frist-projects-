const game = () => {
  let pScore = 0;
  let cScore = 0;
  //start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    //interacting with play buttom
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //play game
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    //computer options
    const computerOptions = ["rock", "paper", "scissors"];

    //generate random numebr only after player  clicking on any button
    options.forEach((option) => {
      option.addEventListener("click", function () {
        //computer choise
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoise = computerOptions[computerNumber];
        //Compare hands
        setTimeout(() => {
          compareHands(this.textContent, computerChoise);

          //update images
          playerHand.src = `./image/${this.textContent}.png`;
          computerHand.src = `./image/${computerChoise}.png`;
        }, 1000);

        //animation
        playerHand.style.animation = "shakePlayer 1s ease";
        computerHand.style.animation = "shakeComputer 1s ease";
      });
    });
  };

  //update score
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };
  //COMARING HANDS
  const compareHands = (playerChoise, computerChoise) => {
    //update text
    const winner = document.querySelector(".winner");
    //checking tie
    if (playerChoise === computerChoise) {
      winner.textContent = "its a tie ";
      return;
    }
    //check for Rock
    if (playerChoise === "rock") {
      if (computerChoise === "scissors") {
        winner.textContent = "Player Wins 👦🏾";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins 💻";
        cScore++;
        updateScore();
        return;
      }
    }
    //checking for paper
    if (playerChoise === "paper") {
      if (computerChoise === "scissors") {
        winner.textContent = "Computer Wins 💻";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent("Player Wins 👦🏾");
        pScore++;
        updateScore();
        return;
      }
    }
    //checking for scissors
    if (playerChoise === "scissors") {
      if (computerChoise === "rocK") {
        winner.textContent = "Computers Wins 💻";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins 👦🏾";
        pScore++;
        updateScore();
        return;
      }
    }
  };
  //is call all the time functiomn
  startGame();
  playMatch();
};

//start the game function
game();
