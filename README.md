# Mastermind Game

![The Mastermind Game User Interface](https://res.cloudinary.com/dnc7potxo/image/upload/v1714597538/ReadMe-Images/Mastermind%20Game/Main_tchsxj.png) <br><br>

Welcome to the [Mastermind Game!](https://su-t-mastermind-game.netlify.app/) This project presents a classic implementation of the Mastermind game, a code-breaking game where players guess a secret combination of numbers. <br><br>

## Table of Contents

- [Running the Code](#howtorun)
- [Gameplay Instructions](#howtoplay)
- [Implementation Details](#implementation)
- [Extension](#extension)
- [Feedback](#feedback) <br><br>

## Running the Code: <a name="howtorun"></a>

1. Navigate to the Mastermind Game [repository](https://github.com/SutheeDev/mastermind-game).
2. Click the green 'Code' button on top of the commit history to open the popover. Then, select the 'Download ZIP' option to download the file to your local machine.
3. Find the downloaded file in your download folder and double-click to unzip the file.
4. Launch a text editor of your preference. Then, import the unzipped file into the text editor by dragging and dropping it into the editor's interface.
5. In your text editor, open the index.html file.
6. Right-click on the html file to open the context menu.
7. Select "Open with," and choose your preferred web browser from the list of available options (e.g., Google Chrome, Firefox, etc.). If you use a Visual Studio Code, you can also choose 'Open with Live Server [⌘L ⌘O]'
8. The application should now open in your selected web browser. <br><br>

## Gameplay Instructions: <a name="howtoplay"></a>

Once the game is loaded, follow these steps to play. <br><br>

1. Read all the rules that are displayed on the screen.
2. Choose the game's difficulty level by clicking on the easy, medium, or difficult buttons. The game's difficulty is set to medium by default.

![Three Difficulty Level Buttons: Easy Medium Difficult](https://res.cloudinary.com/dnc7potxo/image/upload/v1714607229/ReadMe-Images/Mastermind%20Game/levelBtns_tfvyo7.png) <br><br>

3. To play the game, input a combination of 4 numbers into the input form and hit the GUESS button or press Enter.
4. The input form only accepts a combination of 4 numbers. The warning message will be displayed if you input something other than numbers or input less or more than 4 numbers.

![Red Warning Statement Appeared Under GUESS Button](https://res.cloudinary.com/dnc7potxo/image/upload/v1714607230/ReadMe-Images/Mastermind%20Game/Warning_qgywfo.png) <br><br>

5. Depending on the difficulty level, a specific range of numbers is allowed. If you input a number that is out of range, a warning message will be displayed. For example, the easy level only allows you to input numbers that range from 0 to 3 in each digit. So, if you input 1234 as your combination, you'll get the warning message since the number 4 is not allowed.
6. After each guess, the computer will provide feedback on how your combination compares to the hidden number. <br>

![Display of the User's Guesses and Feedback](https://res.cloudinary.com/dnc7potxo/image/upload/v1714607229/ReadMe-Images/Mastermind%20Game/Feedback_fligwa.png) <br><br>

- Example of the feedback:

  - 2 correct number and 0 correct location
    - This means your combination has two correct numbers, but nothing is in the correct location.
  - 2correct number and 1 correct location
    - This means one number in your guess is in the accurate position and another correct number is in the wrong position.
  - 0 correct number and 0 correct location
    - This means the hidden number does not include any numbers in your guess.
  - 4 correct number and 4 correct location
    - This means you get all numbers correctly; you win the game! <br>

7. Use the feedback to refine your next guess.
8. You have a total of 10 attempts to guess the number. If you run out of attempts, you lose the game. If you guess the correct combination, you win!
9. The hidden number combination will be reviewed when the game is finished. <br><br>

## Implementation Details: <a name="implementation"></a>

The Mastermind Game is implemented using Vanilla JavaScript. Here's an overview of the development process. <br><br>

### Choosing How to Start:

- Decided to utilize Vanilla JavaScript along with simple HTML and CSS. Wanted to focus more on how the game works and kept the front-end simple.

### Getting Random Numbers:

- Figured out how to [fetch random numbers](https://github.com/SutheeDev/mastermind-game/blob/fde5ac28cebfd8cbd081300ea87aba5635245f37/index.js#L68-L82) from random.org. Implemented a robust function to fetch and [transform](https://github.com/SutheeDev/mastermind-game/blob/fde5ac28cebfd8cbd081300ea87aba5635245f37/index.js#L85-L92) the response into a usable array of number combinations.

### User input Validation:

- Implemented a [validation protocol](https://github.com/SutheeDev/mastermind-game/blob/fde5ac28cebfd8cbd081300ea87aba5635245f37/index.js#L161-L181) by checking for out-of-range numbers, non-numeric characters, and validated the length of the input.

### Comparing Guesses:

- Developed a main [function](https://github.com/SutheeDev/mastermind-game/blob/fde5ac28cebfd8cbd081300ea87aba5635245f37/index.js#L94-L118) to compare the user's guess with the hidden combination, generating feedback on correct numbers and correct locations.

### Seamless Input Handling:

- Enhanced user experience by implementing a [function](https://github.com/SutheeDev/mastermind-game/blob/fde5ac28cebfd8cbd081300ea87aba5635245f37/index.js#L46-L49) to automatically reset input values after each guess, simplifying the gameplay flow.

### Feedback Display:

- Provided a [feedback display](https://github.com/SutheeDev/mastermind-game/blob/fde5ac28cebfd8cbd081300ea87aba5635245f37/index.js#L199-L211) to the user based on comparison results, showing the user how many numbers are right and how many are in the right place.

### Result Declaration:

- Established a function to [declare game outcomes](https://github.com/SutheeDev/mastermind-game/blob/fde5ac28cebfd8cbd081300ea87aba5635245f37/index.js#L120-L146), ensuring users are promptly informed of their success or failure with hidden combination revelation. <br><br>

## Extension: <a name="extension"></a>

To make the game more engaging, difficulty levels were implemented. Users can choose between easy, medium, and difficult levels, each offering a different range of numbers to guess from. <br><br>

### Adding More Challenge:

- Recognized the potential for more interesting gameplay experience through the addition of difficulty levels.
- Implemented difficulty level buttons and provided users with the option to tailor the game's challenge to their preference. The game adjusts based on what users pick.

### Dynamic Difficulty Adjustment:

- Engineered a flexible system to dynamically [adjust difficulty](https://github.com/SutheeDev/mastermind-game/blob/fde5ac28cebfd8cbd081300ea87aba5635245f37/index.js#L16-L26) levels upon user interaction, ensuring seamless integration and alignment of difficulty level mechanics with front-end design.

### Dynamic Reset of Hidden Combination:

- [Reset](https://github.com/SutheeDev/mastermind-game/blob/fde5ac28cebfd8cbd081300ea87aba5635245f37/index.js#L24) the hidden combination when users switch difficulty levels, maintaining gameplay integrity and challenge relevance.

### Visual Clarity for Difficulty Selection:

- Incorporated visual indicators to [highlight](https://github.com/SutheeDev/mastermind-game/blob/fde5ac28cebfd8cbd081300ea87aba5635245f37/index.js#L28-L36) the selected difficulty level, improving user engagement and navigation. <br><br>

## Feedback <a name="feedback"></a>

Feedback to improve this project is welcome. If you have any suggestions or would like to collaborate, please get in touch with me on GitHub. Thanks!
