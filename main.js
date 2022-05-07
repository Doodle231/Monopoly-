import { spacesArray} from "./spaceObjects.js"
import * as players from "./PlayerFactory.js"
import {startGame} from "./initializegame/startgame.js"
import { setPropertyColors } from "./propertyCards/setPropertyColors.js"
import {yesButtonSettings} from "./buttonhandlers.js"
import { initializeBidding } from "./auctionSettings.js"
import {buildHandler} from "./buyHouses.js"


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


  //////////////////////////////////////////////////////////////////
  players.rollButton.addEventListener('click', function() {

    
  if (players.activePlayer === players.player1){
    players.player1.moveplayer().checkOwner().checkforcolorset()
    return
  }

  if (players.activePlayer === players.CPUPlayer){
      players.CPUPlayer.moveplayer().checkOwner().checkforcolorset()
      return
  }
  
  if (players.activePlayer === players.CPUPlayer2){
  players.CPUPlayer2.moveplayer().checkOwner().checkforcolorset()
  return
  }
    
  if (players.activePlayer === players.CPUPlayer3){
  players.CPUPlayer3.moveplayer().checkOwner().checkforcolorset()
  return
  }


  

})


yesButtonSettings()

