let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let x = Math.random();
    if (x<1/3){
        return "rock";
    }
    else if(x>=1/3 && x<2/3){
        return "paper";
    }
    else{
        return "scissors";
    }
}
function  getHumanChoice(){
    let entry = prompt("Enter one of these values: rock, paper, scissors");
    while (entry !="rock" && entry != "paper" && entry !="scissors"){
        entry = prompt("Enter one of these values: rock, paper, scissors");
    }
    return entry;
}
function playRound(humanChoice,computerChoice){
     humanChoice = humanChoice.toLowerCase();
     if (humanChoice == computerChoice){
        return "It's a tie!";
     }
     else if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        return "You won, rock beats scissors!";
     }
     else if(humanChoice == "scissors" && computerChoice=="paper"){
        humanScore++;
        return "You won, scissors beat paper!";
     }
     else if(humanChoice == "paper"&& computerChoice == "rock"){
        humanScore++;
        return "You won, paper beats rock!";
     }
     else if(humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        return "You losed, paper beats rock!"
     }
     else if(humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        return "You losed, rock beats scissors!"
     }
     else if(humanChoice == "paper" && computerChoice=="scissors"){
        computerScore++;
        return "You losed, scissors beat paper!"
     }
     
}
function playGame(){
    for (let i = 0;i<5;i++){
        let uservalue = getHumanChoice();
        let computervalue = getComputerChoice();
        console.log("Your choice is:  "+ uservalue + "   , the computer's choice is:   "+ computervalue);
        playRound(uservalue,computervalue);
        console.log("Your score is: "+ humanScore + " , the computer score is: " + computerScore);
    }
    if (humanScore==computerScore){
        return "It's a tie sir!";
    }
    else if(humanScore>computerScore){
        return "You won sir!";
    }
    else{
        return "You losed sir!";
    }
}
console.log(playGame());


