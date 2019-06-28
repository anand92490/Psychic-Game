
// the Player makes a guess by pressing any alphabet he wishies to.
// Player can repeat the action 9 times to make the exact guess.
//computer makes a random guess between a and z.
// computer takes the player's input within the 9th key stroke.
// computer matches the player's input to determine the Players's win, loss or tie.
// display and count the result to the Player.


 var computerChoice = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var wins = 0;
 var losses = 0;
 var guessLeft = 10;
 var printGuesses = [];   

 document.onkeyup = function(event) {
    //  alert("key pressed");

    var playerGuess = event.key;
    
    var playerOptions = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    var computerGuess = computerChoice [Math.floor(Math.random() * computerChoice.length)];


    if (playerOptions.indexOf(playerGuess) > - 1) {


     if (playerGuess === computerGuess) {
         wins ++;
         guessLeft = 10;
         printGuesses = [];

     } 

     if (guessLeft === 0){
        guessLeft = 10;
        losses ++;
        printGuesses = []
         
     }
     
     if (playerGuess != computerGuess) {
        guessLeft --;
        printGuesses.push(playerGuess) 
     }

     var html = 
     "<h1> Psychic Game </h1>" +
     "<h2> Guess What Letter am I Thinking of!!!😈 😈" +
     "<p> Wins: " + wins + "</p>" +
     "<p> Losses: " + losses + "</p>" +
     "<p> Guesses Left: " + guessLeft + "</p>" +
     "<p> Your Guesses: " + printGuesses.join(", ") + "</p>";

     document.querySelector("#game").innerHTML = html;

     }

 };


