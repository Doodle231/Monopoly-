import { spacesArray } from "./spaceObjects.js"
import * as players from "./PlayerFactory.js"
import { generateCommunityCards } from "./generateCommunityCards.js"
import {resetDisplay} from "./displays.js"
import {CloseModal} from "./displays.js"


generateCommunityCards()
const communityCards = document.getElementsByClassName("communitycards")

export const clearCommunityCards = () => {

  for (let i = 0; i < communityCards.length; i++){
    communityCards[i].style.display = "none"
  }
}

export const displayCommunityCards = () => {
    
    let landedOn = spacesArray[players.activePlayer.updatedlocation]
  
    console.log(landedOn.name)
     if (landedOn.name != "Community Chest"){
     
      clearCommunityCards() 
     }
     
     if (landedOn.name = "Community Chest"){
      
     for (let i = 0; i < communityCards.length; i++){
     
        resetDisplay()
        
      }
  
       players.usermessage[0].textContent = "You have landed on Community Chest. Here is your card... "
      let randomChance = Math.floor(Math.random() * 9) +1 
      const okbutton = document.querySelector (".okay")
      communityCards[randomChance].style.display = "block"
      const buttonYes = document.querySelector(".button-yes")
       const buttonNo = document.querySelector(".button-no")
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
  


      const oneplayercash = document.getElementsByClassName("cash1")[0]

     const twoplayercash = document.getElementsByClassName("cash2")[0]



  
      twoplayercash.textContent = " Cash: $" + players.CPUPlayer.cash 
      oneplayercash.textContent = " Cash: $" + players.player1.cash 
       
     
      CloseModal() 
  
      }
      
      
    }
  