let library = ['phaser', 'transporter', 'starship', 'federation', 'data', 'borg', 'klingon'];
let user_guesses = [];
let word_2_guess = library[Math.floor(Math.random() * library.length)];

// getting HTML elements to modify
let display_guess_word = document.getElementById("guess_word");
let wrong_guesses = document.getElementById("letters_guessed");

// setting challenge word to be dashes
