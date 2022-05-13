import { spacesArray} from "./spaceObjects.js"
import * as players from "./PlayerFactory.js"
import {startGame} from "./initializegame/startgame.js"
import { setPropertyColors } from "./propertyCards/setPropertyColors.js"
import {yesButtonSettings} from "./buttonhandlers.js"
import { initializeBidding } from "./auctionSettings.js"
import {buildHandler} from "./buyHouses.js"
import { updateAllCash } from "./displayhelpers/updateallcash.js"
import {generateCommunityCards} from "./uniquecards/generateCommunityCards.js"
updateAllCash()
generateCommunityCards()
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









startGame()


buildHandler()

const smallPieces = document.getElementsByClassName("availablesubcontainer")[0]












///////////////



export const determineSmallCard = (elementId, auctionWinner) => {
      
  let smallCards = document.getElementsByClassName("availablesubcontainer")

  let player1smallCardDisplay = document.getElementsByClassName("cardcontainer")[0]
  let player2smallCardDisplay = document.getElementsByClassName("cardcontainer")[1]
  let player3smallCardDisplay = document.getElementsByClassName("cardcontainer")[2]
  let player4smallCardDisplay = document.getElementsByClassName("cardcontainer")[3]


  let landedOn = spacesArray[players.activePlayer.updatedlocation]

   let element = document.getElementById(elementId)
 

   if (landedOn.spaceType === "unique"){
     return
   }

   
  

   if (auctionWinner === players.player1){
    player1smallCardDisplay.appendChild(element)
  }

   if (auctionWinner === players.CPUPlayer){
     player2smallCardDisplay.appendChild(element)
   }
   
   if (auctionWinner === players.CPUPlayer2){
    player3smallCardDisplay.appendChild(element)
  }

  if (auctionWinner === players.CPUPlayer3){
    player4smallCardDisplay.appendChild(element)
  }
  

  

}



setPropertyColors()




const modalContent = document.getElementsByClassName("modal-content")[0]



const playerActionsLog =  document.getElementsByClassName("actionstaken")[0]

const buttonNo = document.getElementsByClassName("button-no")[0]


buttonNo.addEventListener('click', function() {
  
  
  const propertyCards = document.getElementsByClassName("propertycards")
  for (let i = 0; i < spacesArray.length; i++) {
    propertyCards[players.activePlayer.updatedlocation].style.display = " block "
    
     }
 
  document.getElementsByClassName("modal")[0].style.display = "none"
  
  initializeBidding()
  
})


const rollButton =  document.querySelector('.btn-roll')

let rolls = document.querySelector(".iconbutton")


  //////////////////////////////////////////////////////////////////




  players.rollButton.addEventListener('click', function() {

   
  if (players.activePlayer === players.player1){
    players.player1.moveplayer().checkOwner()
   rolls.disabled = true; 
    return
  }

  if (players.activePlayer === players.CPUPlayer){
      players.CPUPlayer.moveplayer().checkOwner()
      rolls.disabled = true; 
      return
  }
  
  if (players.activePlayer === players.CPUPlayer2){
  players.CPUPlayer2.moveplayer().checkOwner()
   rolls.disabled = true; 
  return
  }
    
  if (players.activePlayer === players.CPUPlayer3){
  players.CPUPlayer3.moveplayer().checkOwner()
  rolls.disabled = false; 
  return
  }


  

})


yesButtonSettings()

