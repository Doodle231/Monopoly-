import * as players from "./PlayerFactory.js"
import { spacesArray } from "./spaceObjects.js"
import { usermessage } from "./PlayerFactory.js"
import { resetDisplay } from "./displays.js "
import { CloseModal } from "./displays.js"
const oneplayercash = document.getElementsByClassName("cash1")[0]

const twoplayercash = document.getElementsByClassName("cash2")[0]

const okbutton = document.querySelector (".okay")
const buttonYes = document.querySelector(".button-yes")
const buttonNo = document.querySelector(".button-no")
function jail () {
        
    let landedOn = spacesArray[players.activePlayer.updatedlocation]
    
    if (landedOn === jail ){
    okbutton.style.display = " block"
    buttonYes.style.display = "none "
    buttonNo.style.display = "none "
    usermessage[0].textContent = "You have landed on the jail space. You have been taken directly to jail"
    resetDisplay() 
    

  if (landedOn === jail && players.activePlayer === player1 ){
  player1.location.splice(0, player1.location.length)
  player1.location.push(10)  
  spaceNames[player1.location].append(boardPiece[0])
  }
  

  if (landedOn === jail && players.activePlayer === CPUPlayer){
  CPUPlayer.location.splice(0, CPUPlayer.location.length)
 CPUPlayer.location.push(10)  
 spaceNames[CPUPlayer.location].append(boardPiece2[0])
  }
}
}

export function incomeTaxSetting (){

  let landedOn = spacesArray[players.activePlayer.updatedlocation]
 if (landedOn.name = "Income Tax") {
   console.log("income")
  players.activePlayer.cash -= 50 
    usermessage[0].textContent = " You have landed on Income Tax. $50 has been taken from  your account"
    resetDisplay() 
   okbutton.style.display = "block "
   buttonYes.style.display = "none "
   buttonNo.style.display = "none"
  
twoplayercash.textContent = " Cash: $" + players.CPUPlayer.cash 
oneplayercash.textContent = " Cash: $" + players.player1.cash 
    


    CloseModal() 
  }
}
