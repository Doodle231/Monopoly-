import { spacesArray} from "./spaceObjects.js"
import * as players from "./PlayerFactory.js"
import {startGame} from "./initializegame/startgame.js"
import { setMobilePropertyColors, setPropertyColors } from "./propertyCards/setPropertyColors.js"
import {yesButtonSettings} from "./buttonhandlers.js"
import { initializeBidding } from "./auctionSettings.js"
import {buildHandler} from "./buyHouses.js"
import {generateCommunityCards} from "./uniquecards/generateCommunityCards.js"
import {initPlayerMenu} from "./playermenu.js"

import { generateAuctionPropertyCards } from "./propertyCards/generatePropertyCards.js"
import {tradeSettings} from "/trade.js"
import {updateSmallRailRoadCards, updateUtilityCards } from "./updatesmalluniquecards.js"
import { checkifPlayerIsBankrupt } from "./checkforbankrupt.js"


startGame()
initPlayerMenu()
generateCommunityCards()
tradeSettings()
buildHandler()



export const determineSmallCard = (elementId, auctionWinner) => {
      


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
setMobilePropertyColors()


const buttonNo = document.getElementsByClassName("button-no")[0]


buttonNo.addEventListener('click', function() {
  
  
  const propertyCards = document.getElementsByClassName("propertycards")
  for (let i = 0; i < spacesArray.length; i++) {
    propertyCards[players.activePlayer.updatedlocation].style.display = " block "
    
     }
 
  document.getElementsByClassName("modal")[0].style.display = "none"
  
  initializeBidding()
  
})






let rollIcon = document.getElementsByClassName("iconbutton")[0]

  players.rollButton.addEventListener('click', function() {
  
  
  
    updateSmallRailRoadCards(5)
    updateSmallRailRoadCards(15)
    updateSmallRailRoadCards(25)
    updateSmallRailRoadCards(35)
  
    updateUtilityCards()
  
  
  
  
  
  
  
  
  
  
    if (players.activePlayer === players.player1){
    players.player1.moveplayer().checkOwner()
   rollIcon.style.display ="none"

    return
  }

  if (players.activePlayer === players.CPUPlayer ){
      players.CPUPlayer.moveplayer().checkOwner()
      rollIcon.style.display ="none"
      return
  }
  
  if (players.activePlayer === players.CPUPlayer2){
  players.CPUPlayer2.moveplayer().checkOwner()
  rollIcon.style.display ="none"
  return
  }
    
  if (players.activePlayer === players.CPUPlayer3){
  players.CPUPlayer3.moveplayer().checkOwner()
  rollIcon.style.display ="block"
  return
  }


  

})


yesButtonSettings()




   

  generateAuctionPropertyCards()


  const propertyTitle = document.getElementsByClassName("auctionpropertytitle")

const setsmallPropertyColors= ()=> {

    propertyTitle[39].classList = "darkbluecard"
    propertyTitle[37].classList = "darkbluecard"
  
  propertyTitle[35]. classList = "railroad"
   propertyTitle[34].classList = "greencard"
   propertyTitle[32].classList = "greencard"
   propertyTitle[31].classList = "greencard"
  
   propertyTitle[29].classList = "yellowcard"
   propertyTitle[28].classList ="waterworks"
   propertyTitle[27].classList = "yellowcard"
   propertyTitle[26].classList = "yellowcard"
   propertyTitle[25]. classList = "railroad"
   propertyTitle[24].classList = "redcard"
   propertyTitle[23].classList = "redcard"
   propertyTitle[21].classList = "redcard"
   
   propertyTitle[19].classList = "orangecard"
   propertyTitle[18].classList = "orangecard"
   propertyTitle[16].classList = "orangecard"
   propertyTitle[15]. classList = "railroad"
  
   propertyTitle[14].classList = "pinkcard"
   propertyTitle[13].classList = "pinkcard"
   propertyTitle[12].classList = "electriccompany"
   propertyTitle[11].classList = "pinkcard"
  
  
   propertyTitle[9].classList = "lightbluecard"
  
   propertyTitle[8].classList = "lightbluecard"
   propertyTitle[7].classList = "chancecardsmain"
   propertyTitle[6].classList = "lightbluecard"
   propertyTitle[5].classList = "railroad"
   propertyTitle[3].classList = "browncard"
  
   propertyTitle[1].classList = "browncard"
  
  }
  
  setsmallPropertyColors()

  const displayPropertyOnclick = () => {
    const propertyButton = document.getElementById("mypropertybtn")
   propertyButton.addEventListener('click', function() {

    const propertyPage = document.getElementById("propertypageformobile")
    const buttonwrapper = document.getElementById("buttonwrapper")
    propertyPage.style.display = "block"


   })
  }
  displayPropertyOnclick()

  const propertyPage = document.getElementById("propertypageformobile")

  propertyPage.style.display = "none"


  const closePropertyButton = document.getElementById("closepropertypage")
  closePropertyButton.addEventListener('click', function() {
  const buttonwrapper = document.getElementById("buttonwrapper")
  buttonwrapper.style.diplay = "flex"
   propertyPage.style.display = "none"
  })


checkifPlayerIsBankrupt()