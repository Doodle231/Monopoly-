import * as players from "./PlayerFactory.js"
import { spacesArray } from "./spaceObjects.js"
import { usermessage } from "./PlayerFactory.js"
import { resetDisplay } from "./displays.js "
import { CloseModal, showModal } from "./displays.js"
import { generateCommunityCards } from "./generateCommunityCards.js"
import {clearCommunityCards} from "./communityCardsSettings.js"
import { generateChanceCards } from "./generateChanceCards.js"

export const character = document.createElement("img")
character.classList = "guy"

character.src = "/assets/character.png"

const modalContent = document.getElementsByClassName("modal-content")[0]
const oneplayercash = document.getElementsByClassName("cash1")[0]
const boardPiece = document.getElementsByClassName("boot")
const boardPiece2 = document.getElementsByClassName("car")
const twoplayercash = document.getElementsByClassName("cash2")[0]
const names = document.getElementsByClassName("name")
const okbutton = document.querySelector (".okay")
const buttonYes = document.querySelector(".button-yes")
const buttonNo = document.querySelector(".button-no")
const modal = document.getElementsByClassName("modal")[0]



const appendActivePlayer=() =>{
      
  if(players.activePlayer === players.player1){
    spaceNames[players.player1.updatedlocation].append(boardPiece[0])
     
  }else {
  
      spaceNames[players.CPUPlayer.updatedlocation].append(boardPiece2[0])
    }
  }


export const communityCardSetting = () =>{
generateCommunityCards()

  let landedOn = spacesArray[players.activePlayer.updatedlocation]

   const communityCards = document.getElementsByClassName("communitycards")
   if (landedOn.name !== "Community Chest"){
     clearCommunityCards() 
   }
   
   if (landedOn.name === "Community Chest"){
    
   for (let i = 0; i < communityCards.length; i++){
   
      resetDisplay()
      
    }

     usermessage[0].textContent = "You have landed on Community Chest. Here is your card... "
    let randomChance = Math.floor(Math.random() * 9) +1 
     communityCards[randomChance].style.display = "block"
    okbutton.style.display = "block"
    buttonNo.style.display = "none"
    buttonYes.style.display = "none"
    

    if (randomChance === 0){
      players.activePlayer.cash += 100
      }
    
    if (randomChance === 1){
     players.activePlayer.cash += 100
    }

    if (randomChance === 2){
     players.activePlayer.cash -= 150
    }
   
    if (randomChance == 3) {
      players.activePlayer.cash += 200
 

    }

    if (randomChance === 4){
      players.activePlayer.cash += 100
    }

    if (randomChance === 5){
      players.activePlayer.cash += 100
    }

    if (randomChance === 6){
      players.activePlayer.cash -= 15
    }


     if (randomChance === 7){
     players.activePlayer.cash += 200 
    
    }

     if (randomChance === 8){
       players.activePlayer.cash += 100 
     }

     if (randomChance === 9){
      players.activePlayer.cash += 50 
    }
    
    const threeplayercash = document.getElementsByClassName("cash3")[0]
    const fourplayercash = document.getElementsByClassName("cash4")[0]

    twoplayercash.textContent = " Cash: $" + players.CPUPlayer.cash 
  oneplayercash.textContent = " Cash: $ " + players.player1.cash 
  threeplayercash.textContent = "Cash: $ " + players.CPUPlayer2.cash
            fourplayercash.textContent = "Cash: $ "+ players.CPUPlayer3.cash
  }
  CloseModal()
}


export function jail () {
        
    let landedOn = spacesArray[players.activePlayer.updatedlocation]
    
    if (landedOn.name === "Jail" ){
    okbutton.style.display = " block"
    buttonYes.style.display = "none "
    buttonNo.style.display = "none "
    usermessage[0].textContent = "You have landed on the jail space. You have been taken directly to jail"
    resetDisplay() 
    

  if (landedOn === jail && players.activePlayer === players.player1 ){
  players. player1.location.splice(0, players.player1.location.length)
  players.player1.location.push(10)  
  spaceNames[players.player1.location].append(boardPiece[0])
  }
  

  if (landedOn === jail && players.activePlayer === CPUPlayer){
  players.CPUPlayer.location.splice(0, players.CPUPlayer.location.length)
 players.CPUPlayer.location.push(10)  
 spaceNames[players.CPUPlayer.location].append(boardPiece2[0])
  }
}
}

export function incomeTaxSetting (){

  let landedOn = spacesArray[players.activePlayer.updatedlocation]
 if (landedOn.name === "Income Tax") {
 console.log("income tax")
  players.activePlayer.cash -= 50 
    usermessage[0].textContent = " You have landed on Income Tax. $50 has been taken from  your account"
    resetDisplay() 
    okbutton.style.display = "block"
    buttonNo.style.display = "none"
    buttonYes.style.display = "none"
    
    //twoplayercash.textContent = " Cash: $" + players.CPUPlayer.cash 
    //oneplayercash.textContent = " Cash: $ " + players.player1.cash 
    CloseModal() 
    
    
  }
}

export function visiting(){
  let landedOn = spacesArray[players.activePlayer.updatedlocation]
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



    export const displayChanceCards = () => {
  
  generateChanceCards()
  let landedOn = spacesArray[players.activePlayer.updatedlocation]
  let randomChance = /*Math.floor(Math.random() * 9) +1 */ 3
   const ChanceCards = document.getElementsByClassName("chancecards")
   for (let i = 0; i < ChanceCards.length; i++){
    ChanceCards[i].style.display = "none"
  }
  
  
   
   if (landedOn.name === "Chance"){
   for (let i = 0; i < ChanceCards.length; i++){
    resetDisplay() 
    ChanceCards[randomChance].style.display = " block"
    
  } 
  
     usermessage[0].textContent = "You have landed on Chance. Here is your card... "
  
     
    
    if (randomChance === 0){
      players.activePlayer.cash += 20 
      }
    
    if (randomChance === 1){
     players.activePlayer.cash += 200
    }

    if (randomChance === 2){
     players.activePlayer.location.splice(0, players.activePlayer.location.length)
      players.activePlayer.location.push(10)  
      players.activePlayer.updatedlocation = 10 
      appendActivePlayer()
    }
   
    if (randomChance == 3) {
      players.activePlayer.location.splice(0, players.activePlayer.location.length)
      players.activePlayer.location.push(39)  
     players.activePlayer.updatedlocation = 39
     appendActivePlayer() 
     landedOn = spacesArray[39]
     console.log(landedOn)
     
    

  }

    if (randomChance === 4){
      players.activePlayer.cash -= 20 
    }

    if (randomChance === 5){
      players.activePlayer.cash += 100
    }

    if (randomChance === 6){
      players.activePlayer.cash -= 15
    }


 if (randomChance === 7){
     
      players.activePlayer.location.splice(0, players.activePlayer.location.length)
      players.activePlayer.location.push(11)  
     players.activePlayer.updatedlocation = 11
     appendActivePlayer() 
     
    
    }

     if (randomChance === 8){
       players.activePlayer.cash += 100 
     }

     if (randomChance === 9){
      players.activePlayer.cash += 50 
    }


     

  
            
          
          









      
      

   //twoplayercash.textContent = " Cash: $" + players.CPUPlayer.cash 
   //oneplayercash.textContent = " Cash: $" + players.player1.cash 

    

     }
   
     
    }  