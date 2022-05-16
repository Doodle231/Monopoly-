

import * as players from "./PlayerFactory.js"
import { spacesArray} from "./spaceObjects.js"
export const initPlayerMenu = () => {

    let playerMenu = document.querySelector(".menu")
    let closeMenuButton = document.querySelector(".closemenu")
    
    closeMenuButton.addEventListener('click', function() {

playerMenu.style.display = "none"

})

let propertyAmount = document.querySelector(".propertyowned")
let menuButton = document.getElementsByClassName("iconbutton")[3]
let playerLocation = document.querySelector(".spacecurrentlyat")
let propertyList = document.getElementsByClassName("first")[3]



menuButton.addEventListener('click', function() {
 

  propertyAmount.textContent =  players.player1.propertyowned.length 
  let propertyOnwed = document.querySelector(".percentageofpropertyowned")
  let cashOwned = document.querySelector(".percentageofcashowned")

  let currentLocation = spacesArray[players.player1.updatedlocation].name


  playerLocation.textContent =  currentLocation

  for (let i = 0; i < players.player1.propertyowned.length; i++){
    
   

 }

let percentWithDecimal = players.player1.propertyowned.length / 28 *100 
let totalCashAllPlayers = players.player1.cash + players.CPUPlayer.cash + players.CPUPlayer2.cash +
 players.CPUPlayer3.cash 

let percentCashDecimal = players.player1.cash / totalCashAllPlayers * 100

let percentageOfPropertyOwned = Math.round(percentWithDecimal)
let percentageofcashowned = Math.round(percentCashDecimal)


cashOwned.textContent =  percentageofcashowned + " % "


propertyOnwed.textContent =  percentageOfPropertyOwned  + " % "




playerMenu.style.display = "grid"

})



}


