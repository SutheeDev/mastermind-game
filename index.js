// Grab all required elements from HTML
const input = document.getElementById("guess");
const warning = document.getElementById("warning");
const btn = document.getElementById("btn");
const levelBtns = document.querySelectorAll(".level-btn");

let randomNum;
let difficulty = "medium";

const difficultyRanges = {
  easy: [0, 1, 2, 3],
  medium: [0, 1, 2, 3, 4, 5, 6, 7],
  difficult: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
};

// When levelBtns is clicked, alter the difficulty, get a new randomNum, and change levelBtn color.
levelBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnText = btn.textContent.toLowerCase();
    if (btnText !== difficulty) {
      difficulty = btnText;
    }
    updateLevelBtns();
    getRandomNum(difficulty);
  });
});

// Function to change levelBtn color
const updateLevelBtns = () => {
  levelBtns.forEach((btn) => {
    btn.classList.remove("clicked");
    if (btn.textContent.toLowerCase() === difficulty) {
      btn.classList.add("clicked");
    }
  });
};

// Add eventListener to allow users to hit enter when submit the input
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});

// Function to reset the input form
const resetValue = () => {
  input.value = "";
  input.focus();
};

const displayWarning = (msg) => {
  warning.innerText = msg;
  setTimeout(() => {
    warning.innerText = "";
  }, 1500);
};

// Function to change rule details on the front-end
const alterRangeRule = (min, max) => {
  const rangeRule = document.querySelector(".rangeRule");
  const text = `> Choose ${
    max + 1
  }  different numbers (${min} - ${max}) for each digit`;
  rangeRule.innerText = text;
};

// Function to fetch random numbers from random.org
const fetchRandomNumbers = async (difficulty = "medium") => {
  const min = difficultyRanges[difficulty][0];
  const max =
    difficultyRanges[difficulty][difficultyRanges[difficulty].length - 1];
  const response = await fetch(
    `https://www.random.org/integers/?num=4&min=${min}&max=${max}&col=4&base=10&format=plain&rnd=new`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch numbers");
  }

  alterRangeRule(min, max);

  return response.text();
};

// Function to fetch random numbers and manipulate it into an array of numbers.
const getRandomNum = async (difficulty) => {
  let result = await fetchRandomNumbers(difficulty);
  randomNum = result
    .split("")
    .filter((item) => item !== "\t" && item !== "\n")
    .map(Number);
  console.log(randomNum);
};

const compareCombinations = (comNum, playerNum) => {
  let correctNumbers = 0;
  let correctPositions = 0;
  let tempPlayerNum = [...playerNum];
  let tempComNum = [...comNum];

  for (let i = 0; i < comNum.length; i++) {
    if (tempComNum[i] === tempPlayerNum[i]) {
      correctPositions++;
      correctNumbers++;
      // Remove the macthed positions so they're skipped in next iterations
      tempComNum[i] = null;
      tempPlayerNum[i] = null;
    }
  }

  for (let j = 0; j < comNum.length; j++) {
    if (tempPlayerNum[j] !== null && tempComNum.includes(tempPlayerNum[j])) {
      correctNumbers++;
      tempComNum[tempComNum.indexOf(tempPlayerNum[j])] = null;
    }
  }

  return [correctNumbers, correctPositions];
};

const declareResult = (result, randomNum) => {
  btn.disabled = true;
  const outcomeMsg = document.querySelector(".outcome-msg");
  const outcome = document.createElement("h2");
  const showResult = document.createElement("p");
  const randomNumStr = randomNum.join(" ");
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Restart";
  restartBtn.classList.add("restart");
  showResult.textContent = `The combination is ${randomNumStr}`;

  if (result === "win") {
    outcome.textContent = "YOU WIN!";
    outcomeMsg.classList.add("win");
  } else if (result === "lose") {
    outcome.textContent = "YOU LOSE!";
    outcomeMsg.classList.add("lose");
  }

  outcomeMsg.appendChild(outcome);
  outcomeMsg.appendChild(showResult);
  outcomeMsg.appendChild(restartBtn);

  restartBtn.addEventListener("click", () => {
    location.reload();
  });
};

playGame = async () => {
  // Set up and display remained attempts
  let attempts = 10;
  const attemptsMsg = document.getElementById("attempts");
  attemptsMsg.innerText = `${attempts} attempts remain`;

  // get the random number combination
  await getRandomNum(difficulty);

  // Listen to the click event when the user click the button
  btn.addEventListener("click", function () {
    const userGuess = Array.from(input.value).map(Number);

    // Check if the user input numbers in correct range
    const min = difficultyRanges[difficulty][0];
    const max =
      difficultyRanges[difficulty][difficultyRanges[difficulty].length - 1];

    for (let i = 0; i < userGuess.length; i++) {
      if (isNaN(userGuess[i]) || userGuess[i] < min || userGuess[i] > max) {
        const text = `Only numbers from ${min} - ${max} allowed for each digit`;
        displayWarning(text);
        resetValue();
        return;
      }
    }

    // Check if the input has 4 digits
    if (userGuess.length != 4) {
      const text = "Please input 4 numbers!";
      displayWarning(text);
      resetValue();
      return;
    }

    // After validate the user's input, decrement the attempts
    attempts--;
    attemptsMsg.innerText = `${attempts} attempts remain`;

    // Compare the number combinations
    const [correctNumbers, correctPositions] = compareCombinations(
      randomNum,
      userGuess
    );

    // Declare the win
    if (correctNumbers === 4 && correctPositions === 4) {
      declareResult("win", randomNum);
    }

    // Display the guess history
    const historyContainer = document.querySelector(".history-container");
    const historyDiv = document.createElement("div");
    const inputHistory = document.createElement("p");
    const resultHistory = document.createElement("p");

    const guess = userGuess.join(" ");

    inputHistory.textContent = guess;
    resultHistory.textContent = `${correctNumbers} correct number and ${correctPositions} correct location`;

    historyDiv.appendChild(inputHistory);
    historyDiv.appendChild(resultHistory);
    historyContainer.appendChild(historyDiv);

    // Declare the lose
    if (attempts === 0) {
      declareResult("lose", randomNum);
    }

    // Reset the input value
    resetValue();
  });
};

playGame();
