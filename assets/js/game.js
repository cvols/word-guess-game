let library = ['phaser', 'transporter', 'starship', 'federation', 'data', 'borg', 'klingon'];
let user_wrong_guesses = [];
let user_right_guesses = [];
let word_2_guess = library[Math.floor(Math.random() * library.length)];

// getting HTML elements to modify
let display_guess_word = document.getElementById("guess_word");
let wrong_guesses = document.getElementById("letters_guessed_wrong");
let dashes;
let guesses_left = 6;

// setting challenge word to be dashes



console.log(word_2_guess);

document.onkeyup = (e) => {
    let user_guess = e.key;
    if (word_2_guess.includes(user_guess) && (event.keyCode >= 65) && (event.keyCode <= 90)) {
        user_right_guesses.push(user_guess);

    } else if ((event.keyCode >= 65) && (event.keyCode <= 90)) {
        user_wrong_guesses.push(user_guess);
        guesses_left = guesses_left -1;
        while (guesses_left === 0) {
            document.getElementById("loser").style.display = "block";
            break;
        }
    } else {
        document.getElementById("tng_warning").style.display = "block";
        document.getElementById("tng_danger").style.display = "block";
    }

    wrong_guesses.innerHTML = user_wrong_guesses;
};


// TODO
// added remaining guesses counter
// use .include() to check for letters in the guess word
// if, else to push correct guesses into the screen to replace dash
// add sound for win
// add sound for loss