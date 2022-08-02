let possibleChoices = ["rock" , "peper" , "scissors"];

function getComputerChoice() {
    return Math.floor(Math.random() * possibleChoices.length);
}

function playRound(playerSelection , computerSelection){
    if (playerSelection == computerSelection) {
        return 0;
    } else if (playerSelection == "rock"){
        if (computerSelection == "scissors"){
            return 1;
        } else {
            return 2;

        }
    } else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            return 1;

        } else {
            return 2;

        }
    } else if (playerSelection == "scissors"){

        if (computerSelection == "paper"){
            return 1;

        } else {
            return 2;

        }
    }
}

function game (rounds){
    let botWin = 0;
    let PlayerWin = 0;
    let draw = 0;
    for (let i = 0 ; i < rounds ; i++){
        const playerSelection = prompt("What's your sign?").toLowerCase();
        const computerSelection = possibleChoices[getComputerChoice()];
        let result = playRound(playerSelection, computerSelection);
        switch (result) {
            case 0:
                draw++;
                console.log("draw!");
                break;

            case 1:
                PlayerWin++;
                console.log("Player WON!");

                break;
            case 2:
                botWin++;
                console.log("Bot WON!!");
                break;
            default:

                break;
        }
        if (PlayerWin > botWin){
            console.log(`Player WON! Player:${PlayerWin} VS Bot:${botWin} and ${draw}` );
        } else if ( PlayerWin < botWin){
            console.log(`Bot WON! Player:${PlayerWin} VS Bot:${botWin} and ${draw}` );   
        }else{
            console.log(`Draw! Player:${PlayerWin} VS Bot:${botWin} and ${draw}` );

        }
    }
}


game(1);
