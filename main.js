import {spacesArray} from "./spaceObjects.js"
import * as players from "./PlayerFactory.js"
import {startGame} from "./initializegame/startgame.js"
import {okayButtonSettings, yesButtonSettings, rollButtonSettings, buttonNoSettings} from "./buttonhandlers.js"

startGame()
players.nameHighlight()

const smallPieces = document.getElementsByClassName("availablesubcontainer")[0]
const smallerPieces = smallPieces.getElementsByClassName("smallcard")


export const determineSmallCard = (elementId) => {
      
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


  

   if (players.activePlayer === players.player1){
    player1smallCardDisplay.appendChild(element)
  }

   if (players.activePlayer === players.CPUPlayer){
     player2smallCardDisplay.appendChild(element)
   }
   
   if (players.activePlayer === players.CPUPlayer2){
    player3smallCardDisplay.appendChild(element)
  }

  if (players.activePlayer === players.CPUPlayer3){
    player4smallCardDisplay.appendChild(element)
  }

}



const checkIfBankrupt = () => {

  if (players.activePlayer.cash <= 0){
    console.log("out of cash")
  }

  

}




const modalContent = document.getElementsByClassName("modal-content")[0]




  import {setPropertyColors} from "./propertyCards/setPropertyColors.js"



  setPropertyColors()







  
rollButtonSettings()
yesButtonSettings()
okayButtonSettings()
buttonNoSettings()



