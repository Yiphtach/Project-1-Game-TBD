/*-------------------------------- Constants --------------------------------*/
// Defined constants needed for the game

const MAX_STAT = 10; // Maximum value for any state property
// Removed Min_STAT as it's not used

/*---------------------------- Variables (state) ----------------------------*/
// a. Create an object called 'state' with three properties: 'boredom', 'hunger', and 'sleepiness'
// each started at 0.
let state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
};

// b. Define a variable named 'timer' to store the timer for the game.
//      This will be used to control the interval for updating the game state.
let timer;

// c. Define a variable named 'gameOver' to represent if the player has lost the game.
//  This will be a boolean value indicating the game over status.
let gameOver = false; // Initialize to false

/*------------------------ Cached Element References ------------------------*/

// a. Store the spans inside the 'stats-wrapper' section.
const boredomStatEl = document.getElementById('boredom-stat');
const hungerStatEl = document.getElementById('hunger-stat');
const sleepinessStatEl = document.getElementById('sleepiness-stat');

// b. Store the button elements inside the 'button-wrapper' section.
const playBtnEl = document.getElementById('play');
const feedBtnEl = document.getElementById('feed');
const sleepBtnEl = document.getElementById('sleep');

// c. Store the element that displays the game's status on the page.
const gameMessageEl = document.getElementById('message');

// d. Store the button element that will allow the player to play again.
const resetBtnEl = document.getElementById('restart');

// Console log the cached element references to ensure correct elements are grabbed
console.log('boredomStatEl:', boredomStatEl);
console.log('hungerStatEl:', hungerStatEl);
console.log('sleepinessStatEl:', sleepinessStatEl);
console.log('playBtnEl:', playBtnEl);
console.log('feedBtnEl:', feedBtnEl);
console.log('sleepBtnEl:', sleepBtnEl);
console.log('gameMessageEl:', gameMessageEl);
console.log('resetBtnEl:', resetBtnEl);

/*-------------------------------- Functions --------------------------------*/

// a. Create an empty function called `render`
function render() {
    // e. Assign each cached stat element’s textContent to their corresponding property in state.
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepinessStatEl.textContent = state.sleepiness;

    // e. Check if gameOver is true
    if (gameOver) {
        // Stop the game by clearing the interval
        clearInterval(timer); // stop the game

        // Display the game over message and show the restart button
        gameMessageEl.classList.remove('hidden');
        resetBtnEl.classList.remove('hidden');
    } else {
        gameMessageEl.classList.add('hidden'); // hide game over message
        resetBtnEl.classList.add('hidden'); // hide restart button
    }
}

// b. Create a function called `updateStates`
function updateStates() {
    // Increment each property of state by a random number between 0 and 3
    state.boredom += getRandomInt(0, 3);
    state.hunger += getRandomInt(0, 3);
    state.sleepiness += getRandomInt(0, 3);
}

// Helper function to generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// a. Create a function called `init`
function init() {
    // Log a message to confirm the function is called
    console.log('init function called');
    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;
    // c. Set gameOver to false
    gameOver = false;

    // Clear any existing timer
    if (timer) {
        clearInterval(timer);
    }

    // d. Assign timer to a setInterval function
    timer = setInterval(runGame, 2000);

    // f. Call the render function
    render();  // This will work fine as render is implemented
}

// e. Create the runGame function
function runGame() {
    // Invoke updateStates and render inside runGame
    updateStates();
    checkGameOver();
    render();
}

// a. Create the checkGameOver function
function checkGameOver() {
    // b. Check if any state property is 10 or more
    if (state.boredom >= MAX_STAT || state.hunger >= MAX_STAT || state.sleepiness >= MAX_STAT) {
        // c. Set gameOver to true
        gameOver = true;
    }
}

// a. Create a function called `playBtnClick`
function playBtnClick() {
    // b. Reset state.boredom to 0
    state.boredom = 0;
    // c. Call render() to update the display
    render();
}

// a. Create a function called `feedBtnClick`
function feedBtnClick() {
    // b. Reset state.hunger to 0
    state.hunger = 0;
    // c. Call render() to update the display
    render();
}

// a. Create a function called `sleepBtnClick`
function sleepBtnClick() {
    // b. Reset state.sleepiness to 0
    state.sleepiness = 0;
    // c. Call render() to update the display
    render();
}

// d. Attach event listeners to buttons
playBtnEl.addEventListener('click', playBtnClick);
feedBtnEl.addEventListener('click', feedBtnClick);
sleepBtnEl.addEventListener('click', sleepBtnClick);

// a. Add event listener to resetBtnEl
resetBtnEl.addEventListener('click', init);

/*----------------------------- Event Listeners -----------------------------*/

// Call the init function to start the game when the script loads
init();
