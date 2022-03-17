import {SpaceObjects, spacesArray} from "./spaceObjects.js"
import * as players from "./PlayerFactory.js"
import * as displays from "./displays.js"
import * as auctionSettings from "./auctionSettings.js"




const introPage = false;

if (introPage === true ){

  const backGround = document.getElementsByClassName("background")[0]
  const mainContainer = document.getElementsByClassName("container")[0]
  const navBar = document.getElementsByClassName("navbar")[0]
  mainContainer.style.display = "none"
  navBar.style.display = "none"
  backGround.style.display = "none"
}


if (introPage === false){
 const introPage =  document.getElementsByClassName("intropage")[0]
  introPage.style.display = "none"
}


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




const playerTurn = document.getElementsByClassName("playerturn")[0]

const prices = document.getElementsByClassName("price")




const player1StatusMessage = document.getElementsByClassName("playerName1")[0]
const CPUPlayerStatusMessage = document.getElementsByClassName("playerName2")[0]
const ChanceCards = document.getElementsByClassName("chancecards")





const playerMoney = document.getElementsByClassName("cash")[0]
const modalContent = document.getElementsByClassName("modal-content")[0]


const playerActionsLog =  document.getElementsByClassName("actionstaken")[0]







//  for updating the space names in the UI


 import {generatePropertyCards} from "./generatePropertyCards.js"

  generatePropertyCards()

  import {setPropertyColors} from "./setPropertyColors.js"
import { generateUIproperty } from "./uipropertycards.js"


  setPropertyColors()

 

const onehouse = document.getElementsByClassName("onehouse")


const railroadcards = document.getElementsByClassName("railroad")

/*
for (let i = 0; i < railroadcards.length; i++){
  let trainImage = document.createElement("img")
  onehouse[5].innerText = " Rent with 1 train" + " $" + readingRailRoad.house1rent

  trainImage.src = "rr.gif"
  railroadcards[i].appendChild(trainImage)

  
  }

*/ 
  

//const railroads = [readingRailRoad, pennRR, band0, shortLine]
const rollButton =  document.querySelector('.btn-roll')
const delayedDiceRollPress = () => {
  rollButton.click() 
  
}


const computerClickEvent = () => {


setTimeout(delayedDiceRollPress,1000)
  




}
       
import {displayChanceCards} from "./UniqueSpaces.js"


  //////////////////////////////////////////////////////////////////
  players.rollButton.addEventListener('click', function() {
    displayChanceCards()
    
  
/*
  for (let i = 0; i < railroads.length; i++){

    if(inactivePlayer.railroads === 2){
  railroads[i].rent = 50
    }
  
    if(inactivePlayer.railroads === 3){
      railroads[i].rent = 100
    }
        
    if(inactivePlayer.railroads === 4){
          railroads[i].rent = 200
    }

  }

*/ 

  
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


  


 players.nameHighlight() 



  document.querySelector(".button-no").addEventListener('click', function(){
        
    document.getElementsByClassName("modal")[0].style.display = "none"
     
  })


 })

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
       


      
      if (landedOn === spacesArray[5]){
        players.activePlayer.railroads += 1; 
      
      }
      
      if (landedOn === spacesArray[15]){
        players.activePlayer.railroads += 1; 
      }
      
      if (landedOn === spacesArray[25]){
        players.activePlayer.railroads += 1; 
      }
      
      if (landedOn === spacesArray[35]){
        players.activePlayer.railroads += 1; 
      }
      
     

    if (players.activePlayer === players.player1){
      console.log("working")
      players.switchPlayer()
    }
     
      players.nameHighlight()
      displays.resetDisplay() 
      const modal = document.getElementsByClassName("modal")[0]
       modal.style.display = "none"

          
       const oneplayercash = document.getElementsByClassName("cash1")[0]


const twoplayercash = document.getElementsByClassName("cash2")[0]

       
       twoplayercash.textContent = " Cash: $" + players.CPUPlayer.cash 
       oneplayercash.textContent = " Cash: $ " + players.player1.cash 
        

  })
    
   


let cpuIsPlaying = true; 


  ///////////////////////////////////


auctionSettings.initNo()

const okbutton = document.querySelector (".okay")

okbutton.addEventListener('click', function() {
    const oneplayercash = document.getElementsByClassName("cash1")[0]
   const twoplayercash = document.getElementsByClassName("cash2")[0]
   twoplayercash.textContent = " Cash: $" + players.CPUPlayer.cash 
   oneplayercash.textContent = " Cash: $" + players.player1.cash 
   const buttonYes = document.querySelector(".button-yes")
   const buttonNo = document.querySelector(".button-no")
  
    let landedOn = spacesArray[players.activePlayer.updatedlocation]
 
      displays.showModal()
      
  


   
        })