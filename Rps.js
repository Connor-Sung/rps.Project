/* 
1. Set up a random number generater
2. Limit the number to 1, 2, or 3
3. Assign 1 to Rock, 2 to Paper, 3 to Scissors
4. Set up a prompt that only accepts Rock paper or Scissors
5. Input Rock beats Scissors, Paper beats Rock, Scissors beats Paper, or Draw
6. Declare winner
*/

function randomlessthan(num){
    return(Math.floor(Math.random() * num));
}

// let

let player;

player = prompt("Rock, Paper, or Scissors?");
console.log(`Player choose ${player}`);


if (player == "Rock") {
    console.log(randomlessthan(3) + 1);
};

if (player == "Paper") {
    console.log(randomlessthan(3) + 1);
};

if (player == "Scissors") {
    console.log(randomlessthan(3) + 1);
};
if (!player == "Rock, Paper, Scissors") {
    prompt("Rock, Paper, or Scissors");
};