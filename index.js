// Dice Roller Application
// Constants
const DICE_CONFIG = {
  min: 1,
  max: 6,
  numberOfDice: 3,
};

// DOM Elements
const rollButton = document.getElementById("roll");
const diceLabels = [
  document.getElementById("my_label1"),
  document.getElementById("my_label2"),
  document.getElementById("my_label3"),
];

/**
 * Generates a random number between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random number
 */
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

/**
 * Rolls all dice and updates their display labels
 */
const rollDice = () => {
  diceLabels.forEach((label) => {
    const randomValue = generateRandomNumber(DICE_CONFIG.min, DICE_CONFIG.max);
    label.textContent = randomValue;
  });
};

// Event Listener
rollButton.addEventListener("click", rollDice);
