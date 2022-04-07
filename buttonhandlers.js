
import * as players from "./PlayerFactory.js"
import { spacesArray } from "./spaceObjects.js"
import { determineSmallCard } from "./main.js"
import { resetDisplay, showModal } from "../displays.js"
import { initializeBidding } from "./auctionSettings.js"

export const yesButtonSettings = () => {
    
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
         
          
          resetDisplay()
          
          const modal = document.getElementsByClassName("modal")[0]
           modal.style.display = "none"
    
              
           const oneplayercash = document.getElementsByClassName("cash1")[0]
    
    
    const twoplayercash = document.getElementsByClassName("cash2")[0]
    
           
           twoplayercash.textContent = " Cash: $" + players.CPUPlayer.cash 
           oneplayercash.textContent = " Cash: $ " + players.player1.cash 
            
             return this
      })
      
    }
    
    export const okayButtonSettings = () => {
    
    const okbutton = document.querySelector (".okay")

    okbutton.addEventListener('click', function() {
      const oneplayercash = document.getElementsByClassName("cash1")[0]
     const twoplayercash = document.getElementsByClassName("cash2")[0]
     twoplayercash.textContent = " Cash: $" + players.CPUPlayer.cash 
     oneplayercash.textContent = " Cash: $" + players.player1.cash 
    
      let landedOn = spacesArray[players.activePlayer.updatedlocation]
   
       showModal()
        
          })

        }

        export const rollButtonSettings = () => {
  
          const rollButton =  document.querySelector('.btn-roll')
          
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
        
        
          }

          export const buttonNoSettings = () => {

            const buttonNo = document.getElementsByClassName("button-no")[0]
            
            
            buttonNo.addEventListener('click', function() {
              const propertyCards = document.getElementsByClassName("propertycards")
              for (let i = 0; i < spacesArray.length; i++) {
                propertyCards[players.activePlayer.updatedlocation].style.display = " block "
                
                 }
             
              document.getElementsByClassName("modal")[0].style.display = "none"
              
              initializeBidding()
              
            })
            
            }
            