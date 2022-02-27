import {SpaceObjects, spacesArray} from "./spaceObjects.js"
import * as players from "./PlayerFactory.js"
import * as displays from "./displays.js"
import * as auctionSettings from "./auctionSettings.js"
import { CloseModal } from "./displays.js"
const playerTurn = document.getElementsByClassName("playerturn")[0]

const prices = document.getElementsByClassName("price")


const player1StatusMessage = document.getElementsByClassName("playerName1")[0]
const CPUPlayerStatusMessage = document.getElementsByClassName("playerName2")[0]
const ChanceCards = document.getElementsByClassName("chancecards")





const playerMoney = document.getElementsByClassName("cash")[0]
const modalContent = document.getElementsByClassName("modal-content")[0]
const buyHousesButton = document.getElementsByClassName("buyhouse")[0].style.display = "none"

const playerActionsLog =  document.getElementsByClassName("actionstaken")[0]








const ClearChanceCards = () => {
 
  for (let i = 0; i < ChanceCards.length; i++){
    ChanceCards[i].style.display = "none"
  }
}

const clearCommunityCards = () => {

  for (let i = 0; i < communityCards.length; i++){
    communityCards[i].style.display = "none"
  }
}







//  for updating the space names in the UI


 import {generatePropertyCards} from "./generatePropertyCards.js"

  generatePropertyCards()

 
  import {setPropertyColors} from "./setPropertyColors.js"
  setPropertyColors()

 function visiting(){
  let landedOn = spacesArray[TotalRoll]  
  if ( landedOn.name === "Just Visiting"){

    okbutton.style.display = " block"
   modalContent.appendChild(character)
     character.style.display = " block "
    usermessage[0].textContent = "You have landed on the visiting space. Relax, you are not in jail... Yet "
    buttonYes.style.display = "none "
    buttonNo.style.display = "none "
    resetDisplay() 
   
  
     }
    }
  
       function displayJail () {
        
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

    function incomeTaxSetting (){

      let landedOn = spacesArray[players.activePlayer.updatedlocation]
     if (landedOn === incometax) {
       
      players.activePlayer.cash -= 50 
        usermessage[0].textContent = " You have landed on Income Tax. $50 has been taken from  your account"
        resetDisplay() 
       okbutton.style.display = "block "
       buttonYes.style.display = "none "
       buttonNo.style.display = "none"
      
    twoplayercash.textContent = " Cash: $" + CPUPlayer.cash 
    oneplayercash.textContent = " Cash: $" + player1.cash 
        console.log(landedOn)
        CloseModal() 
      }
    }




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
  


players.nameHighlight() 
//nameHighlight()



//const railroads = [readingRailRoad, pennRR, band0, shortLine]


       
player1StatusMessage.innerHTML =  players.player1.name 
CPUPlayerStatusMessage.innerHTML =  players.CPUPlayer.name 


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


function generateChanceCards() {



  for (let i = 0; i<10 ; i++){
    
    const chanceCards = document.createElement("div")
    chanceCards.classList = "chancecards"
    const modalContent = document.getElementsByClassName("modal-content")[0]
    modalContent.appendChild(chanceCards)
    chanceCards.style.display = "none"
  }   

    const chanceCards = document.getElementsByClassName("chancecards")
    chanceCards[0].innerText = " You have won 7th place in a beauty contest. Take $20.   "
      chanceCards[1].innerText = " Thank you for playing this game. Here is $200.  "
      chanceCards[2].innerText = " Go directly to jail.  "
      chanceCards[3].innerText = " Advance to Boardwalk. "
      chanceCards[4].innerText = " You have just received a speeding ticket. Pay $20. "
      chanceCards[5].innerText = " You have just received an inheritence of $100  "
      chanceCards[6].innerText = " Pay poor tax of $15 "
      chanceCards[7].innerText = " Advance to St. Charles Place.   "
      chanceCards[8].innerText = " There was a bank error in your favor. Collect $100  "
      chanceCards[9].innerText = " You won $ 50 from a pie eating competition. Collect $50 "
    
}
  
  


const buttonYes = document.querySelector(".button-yes")

    buttonYes.addEventListener('click', function(){
      let landedOn = spacesArray[players.activePlayer.updatedlocation]
     

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
      
      playerActionsLog.textContent =  players.activePlayer.name + "  has landed on  "
      + landedOn.name + " . " + landedOn.name + " has been purchased"

      players.switchPlayer() 
     
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
