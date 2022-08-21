import * as players from "./PlayerFactory.js"

export const checkifPlayerIsBankrupt = () => { 

const player1BankruptUIOverlay = document.getElementsByClassName("bankrupt")[0]
const player2BankruptUIOverlay = document.getElementsByClassName("bankrupt")[1]
const player3BankruptUIOverlay = document.getElementsByClassName("bankrupt")[2]
const player4BankruptUIOverlay = document.getElementsByClassName("bankrupt")[3]
const player2cash = document.getElementsByClassName("cash2")[0]
const player3cash = document.getElementsByClassName("cash3")[0]
const player4cash = document.getElementsByClassName("cash4")[0]

    if (players.player1.cash <= 0){
      players.player1.name = "bankrupt"
     player1BankruptUIOverlay.style.display = "block"

}

if (players.CPUPlayer.cash <= 0){
  players.CPUPlayer.name = "bankrupt"
 player2BankruptUIOverlay.style.display = "block"
 player2cash.style.display = "none" 

}


if (players.CPUPlayer2.cash <= 0){
  players.CPUPlayer2.name = "bankrupt"
 player3BankruptUIOverlay.style.display = "block"
 player3cash.style.display = "none"
}


if (players.CPUPlayer3.cash <= 0){
  players.CPUPlayer3.name = "bankrupt"
 player4BankruptUIOverlay.style.display = "block"
 player4cash.style.display = "none"
}


if (players.CPUPlayer.cash <= 0 && players.CPUPlayer.cash <= 0 && players.CPUPlayer.cash <= 0 ){
  launchWinScreen()
}

}

function launchWinScreen (){
  let winScreen = document.getElementById("winscreen")
  winScreen.style.display = "block"
}