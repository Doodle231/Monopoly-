import {SpaceObjects, spacesArray} from "./spaceObjects.js"
import * as players from "./PlayerFactory.js"
import * as displays from "./displays.js"
import * as auctionSettings from "./auctionSettings.js"
import { CloseModal } from "./displays.js"
import {generateUIproperty}from "./uipropertycards.js"

generateUIproperty() 
const playerTurn = document.getElementsByClassName("playerturn")[0]

const prices = document.getElementsByClassName("price")

let smallCard = document.getElementsByClassName("smallCard1")


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


       



  //////////////////////////////////////////////////////////////////
  players.rollButton.addEventListener('click', function() {
    
    
  
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

  
  } else {
    players.CPUPlayer.moveplayer().checkOwner()
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
        console.log("not enough cash")
        
        modalContent.textContent = "Sorry, but you don't have enough " +
        "cash to buy this property. It will need to go to auction..." 
        
        
        
        return
      }

       players.activePlayer.cash -= landedOn.price
       landedOn.owner = players.activePlayer.name 
      
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
      
     

      players.switchPlayer() 
     
      players.nameHighlight()
      displays.resetDisplay() 
      const modal = document.getElementsByClassName("modal")[0]
       modal.style.display = "none"

          
       const oneplayercash = document.getElementsByClassName("cash1")[0]


const twoplayercash = document.getElementsByClassName("cash2")[0]

       
       //twoplayercash.textContent = " Cash: $" + players.CPUPlayer.cash 
        //  oneplayercash.textContent = " Cash: $ " + players.player1.cash 
        

  })
    
   


let cpuIsPlaying = true; 


  ///////////////////////////////////


auctionSettings.initNo()
