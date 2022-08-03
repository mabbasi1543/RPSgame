let possibleChoices = ["rock" , "peper" , "scissors"];
let botWin = 0;
let PlayerWin = 0;
let draw = 0;

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

document.querySelector(".rock").addEventListener("click", () => game("rock"));
document.querySelector(".paper").addEventListener("click", () => game("paper"));
document.querySelector(".scissors").addEventListener("click", () => game("scissors"));
document.querySelector(".start").addEventListener("click", () => start());

 function renderTble(playerSelection , computerSelection, winner){
    let tbody = document.querySelector('tbody');
    let row = document.createElement('tr');
    let data_1 = document.createElement('td');
    data_1.innerHTML = botWin + PlayerWin + draw;
    let data_2 = document.createElement('td');
    data_2.innerHTML = playerSelection;
    let data_3 = document.createElement('td');
    data_3.innerHTML = computerSelection;
    let data_4 = document.createElement('td');
    data_4.innerHTML = winner;

    row.appendChild(data_1);
    row.appendChild(data_2);
    row.appendChild(data_3);
    row.appendChild(data_4);

    tbody.appendChild(row);
 }
function game (playerSelection){
        const computerSelection = possibleChoices[getComputerChoice()];
        let result = playRound(playerSelection , computerSelection);
        switch (result) {
            case 0:
                draw++;
                
                document.querySelector(".drawscore").textContent = draw
                renderTble(playerSelection , computerSelection, "Draw");

                break;

            case 1:
                PlayerWin++;
                
                document.querySelector(".playerscore").textContent = PlayerWin
                renderTble(playerSelection , computerSelection, "Player");

                break;
            case 2:
                botWin++;
                
                document.querySelector(".camputerscore").textContent = botWin
                renderTble(playerSelection , computerSelection, "Computer");

                break;
            default:
                break;
        }
}


function start (){
    const scoreArray = document.getElementsByClassName("score");
    const choicesArray = document.getElementsByClassName("choices");
    document.querySelector(".state").style.visibility = "hidden";
    document.querySelector(".results").style.visibility = "visible";

    if (scoreArray) {
      for (var x = 0; x < scoreArray.length; x++) {
        scoreArray[x].style.visibility = "visible";
      }
    }
    if (choicesArray) {
        for (var x = 0; x < choicesArray.length; x++) {
            choicesArray[x].style.visibility = "visible";
        }
        }
}