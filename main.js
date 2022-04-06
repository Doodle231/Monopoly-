import {spacesArray} from "./spaceObjects.js"
import * as players from "./PlayerFactory.js"
import * as displays from "./displays.js"
import { initializeBidding } from "./auctionSettings.js"
import {startGame} from "./initializegame/startgame.js"


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








const modalContent = document.getElementsByClassName("modal-content")[0]



const playerActionsLog =  document.getElementsByClassName("actionstaken")[0]

const buttonNo = document.getElementsByClassName("button-no")[0]


buttonNo.addEventListener('click', function() {
 
  for (let i = 0; i < spacesArray.length; i++) {
    propertyCards[players.activePlayer.updatedlocation].style.display = " block "
    
     }
 
  document.getElementsByClassName("modal")[0].style.display = "none"
  
  initializeBidding()
  
})


  import {setPropertyColors} from "./propertyCards/setPropertyColors.js"



  setPropertyColors()


const rollButton =  document.querySelector('.btn-roll')
const delayedDiceRollPress = () => {
  rollButton.click() 
  
}



       
import {displayChanceCards} from "./uniquecards/UniqueSpaces.js"
import { grabIconChoice } from "./setIcons.js"




  //////////////////////////////////////////////////////////////////
  players.rollButton.addEventListener('click', function() {

    
  if (players.activePlayer === players.player1){
    players.player1.moveplayer().checkOwner()
    return
  }

  if (players.activePlayer === players.CPUPlayer){
      players.CPUPlayer.moveplayer().checkOwner()
      return
  }
  
  if (players.activePlayer === players.CPUPlayer2){
  players.CPUPlayer2.moveplayer().checkOwner()
  return
  }
    
  if (players.activePlayer === players.CPUPlayer3){
  players.CPUPlayer3.moveplayer().checkOwner()
  return
  }


  


 })


const buttonYesSettings = () => {


const buttonYes = document.querySelector(".button-yes")

    buttonYes.addEventListener('click', function(){
      
      



      let landedOn = spacesArray[players.activePlayer.updatedlocation]
      
      if (landedOn.price > players.activePlayer.cash){
  
        
        modalContent.textContent = "Sorry, but you don't have enough " +
        "cash to buy this property. It will need to go to auction..." 
        
        
        
        return
      }


    
     


      determineSmallCard(players.activePlayer.updatedlocation)

    
     


       players.activePlayer.cash -= landedOn.price
       landedOn.owner = players.activePlayer
      
      // const noduplicates = [...new Set(inactivePlayer.propertyowned)]
       players.activePlayer.propertyowned.push(landedOn)
       


      

    if (players.activePlayer === players.player1){
      players.switchPlayer()
    }
     
      
      displays.resetDisplay() 
      const modal = document.getElementsByClassName("modal")[0]
       modal.style.display = "none"

          
       const oneplayercash = document.getElementsByClassName("cash1")[0]


const twoplayercash = document.getElementsByClassName("cash2")[0]

       
       twoplayercash.textContent = " Cash: $" + players.CPUPlayer.cash 
       oneplayercash.textContent = " Cash: $ " + players.player1.cash 
        
         return this
  })
  
}

buttonYesSettings()

const okbutton = document.querySelector (".okay")

okbutton.addEventListener('click', function() {
    const oneplayercash = document.getElementsByClassName("cash1")[0]
   const twoplayercash = document.getElementsByClassName("cash2")[0]
   twoplayercash.textContent = " Cash: $" + players.CPUPlayer.cash 
   oneplayercash.textContent = " Cash: $" + players.player1.cash 
  
    let landedOn = spacesArray[players.activePlayer.updatedlocation]
 
      displays.showModal()
      
  


   
        })