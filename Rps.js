/* 
1. Set up a random number generater
2. Limit the number to 1, 2, or 3
3. Assign 1 to Rock, 2 to Paper, 3 to Scissors
4. Set up a prompt that only accepts Rock paper or Scissors
5. Input Rock beats Scissors, Paper beats Rock, Scissors beats Paper, or Draw
6. Declare winner
*/
let player;
let ScoreboardPlayer = 0 
let ScoreboardComputer = 0

while (ScoreboardComputer < 5 || ScoreboardPlayer < 5){

function randomlessthan(num){
    return (Math.floor(Math.random() * num))};

player = prompt("Rock, Paper, or Scissors?");
console.log(`Player choose ${player}`);
player = player.toUpperCase()

let choice = (randomlessthan(3) + 1)
if (choice == 1){
    console.log("Computer choose Rock")
}
if (choice == 2){
    console.log("Computer choose Paper")
}
if (choice == 3){
    console.log("Computer choose Scissor")
}

    if (player == "ROCK" && choice == 3) {
        console.log("Player won. Rock beats scissors")
        ScoreboardPlayer = ScoreboardPlayer + 1;
        console.log(ScoreboardPlayer);
    }
    
    if (player == "ROCK" && choice == 2) {
        console.log("CPU won. Paper beats Rock")
        ScoreboardComputer = ScoreboardComputer + 1;
        console.log(ScoreboardComputer + 1 );
    }
    
    if (player == "ROCK" && choice == 1) {
        console.log("Tied. Rock on Rock")
        console.log(ScoreboardPlayer); 
        console.log(ScoreboardComputer);
    }
    
    if (player == "PAPER" && choice == 1) {
        console.log("Player won. Paper beats Rock")
        ScoreboardPlayer = ScoreboardPlayer + 1;
        console.log(ScoreboardPlayer);
    }
    
    if (player == "PAPER" && choice == 2) {
        console.log("Tied. Paper on Paper")
        console.log(ScoreboardPlayer); 
        console.log(ScoreboardComputer);
    }
    
    if (player == "PAPER" && choice == 3) {
        console.log("CPU won. Scissors beats Paper")
        ScoreboardComputer = ScoreboardComputer + 1;
    }
    
    if (player == "SCISSORS" && choice == 3) {
        console.log("Tied. Scissors on Scissors");
        console.log(ScoreboardPlayer);
        console.log(ScoreboardComputer);
    }
    
    if (player == "SCISSORS" && choice == 2) {
        console.log("Player won. Scissors beats Paper")
        ScoreboardPlayer = ScoreboardPlayer + 1;
        console.log(ScoreboardPlayer);
    }
    
    if (player == "SCISSORS" && choice == 1) {
        console.log("CPU won. Rock beats scissors")
        ScoreboardComputer = ScoreboardComputer + 1;
        console.log(ScoreboardComputer);
    }

if (player != "ROCK" && player != "PAPER" && player != "SCISSORS"){
    alert("This is not a prompt option. Now I'll not work");
    break;
};

if (ScoreboardPlayer >= 5) {
    alert("Player has won");
    break;
}
if (ScoreboardComputer >= 5) {
    alert("You lost to predetermined moves from a BOT. SKILL ISSUE");
    break;
};

if (ScoreboardComputer < 5) {
    alert(`CPU has ${ScoreboardComputer}`);
};
if (ScoreboardPlayer < 5) {
    alert(`Player has ${ScoreboardPlayer}`);
};
};
