let library = ['phaser', 'transporter', 'starship', 'federation', 'data', 'borg', 'klingon'];
let user_wrong_guesses = [];
let user_right_guesses = [];
let hidden_word = [];
let word_2_guess = library[Math.floor(Math.random() * library.length)];
let arr_w2g = word_2_guess.split("");
let guesses_left = 6;
let losses = 0;
let wins = 0;


// getting HTML elements to modify
let display_guess_word = document.getElementById("guess_word");
let wrong_guesses = document.getElementById("letters_guessed_wrong");
let track_losses = document.getElementById("losses");
let track_wins = document.getElementById("wins");
let track_guesses_left= document.getElementById("guesses_left");
let replay = document.getElementById("play_again");

arr_w2g.forEach( (i) => {
    hidden_word.push("_");
    display_guess_word.innerHTML = hidden_word;
})

track_guesses_left.innerHTML = guesses_left;
track_wins.innerHTML = wins;
track_losses.innerHTML = losses;

// setting challenge word to be dashes
let reset_game = () => {
    wins++;
    track_wins.innerHTML = wins;
    hidden_word = [];
    word_2_guess = library[Math.floor(Math.random() * library.length)];
    arr_w2g = word_2_guess.split(""); 
    user_right_guesses = [];
    user_wrong_guesses = [];
    wrong_guesses.innerHTML = user_wrong_guesses;
    arr_w2g.forEach( (i) => {
        hidden_word.push("_");
        display_guess_word.innerHTML = hidden_word;
        replay.style.display = "none";
    })
    
      
}



//checking on if the guesses are correct and taking action
document.onkeyup = (e) => {
    let user_guess = e.key;
    let a = 0;
    if (arr_w2g.includes(user_guess) && (event.keyCode >= 65) && (event.keyCode <= 90) && (!user_right_guesses.includes(user_guess))) {
        arr_w2g.forEach( (i) => {
                
            if ( arr_w2g[a] == user_guess) {
                user_right_guesses.push(user_guess);
                hidden_word[a] = user_guess;
                display_guess_word.innerHTML = hidden_word;
                
            } 
            a++;

            if (arr_w2g.length === user_right_guesses.length) {
                replay.style.display = "block";
                let win_song = document.getElementById('song');
                win_song.play();
            }
            
        })
         // let audio = new Audio('../imgs/song.mp3');
                    // audio.play();
    } else if (user_right_guesses.includes(user_guess)) {
        
        alert("you've guessed that key CORRECTLY already!")

    } else if (user_wrong_guesses.includes(user_guess)) {
        
        alert("you've guessed that key INCORRECTLY already!")

    } else if ((event.keyCode >= 65) && (event.keyCode <= 90)) {
        user_wrong_guesses.push(user_guess);
        wrong_guesses.innerHTML = user_wrong_guesses;        
        guesses_left = guesses_left -1;
        track_guesses_left.innerHTML = guesses_left;  

        if  (guesses_left === 0) {
            // document.getElementById("loser").style.display = "block";
            user_wrong_guesses = [];            
            alert("YOU ARE A LOSER! Click 'ok' to try again!")
            guesses_left = 6;            
            losses++
            track_guesses_left.innerHTML = guesses_left;
            track_losses.innerHTML = losses;    
            
        }
    } else {
        alert("you have not guessed a letter but rather typed a different non-alphabetic key. Try again!")
    }

    wrong_guesses.innerHTML = user_wrong_guesses;
};


// TODO
// added remaining guesses counter
// use .include() to check for letters in the guess word
// if, else to push correct guesses into the screen to replace dash
// add sound for win
// add sound for loss