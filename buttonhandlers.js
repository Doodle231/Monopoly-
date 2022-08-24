
import * as players from "./PlayerFactory.js"
import { spacesArray } from "./spaceObjects.js"
import { resetDisplay, showModal } from "./displays.js"
import { initializeBidding } from "./auctionSettings.js"
import { displayInventoryCard } from "./propertyCards/generatePropertyCards.js"

export const appendSmallCardtoDisplay = () => {
  let winner = players.activePlayer

  let element = document.getElementById(players.activePlayer.updatedlocation)
  let player1History =  document.querySelector(".player1history")


  player1History.textContent = players.player1.name + " has purchased " + spacesArray[players.player1.updatedlocation].name

  

  let player1smallCardDisplay = document.getElementsByClassName("cardcontainer")[0]
  let player2smallCardDisplay = document.getElementsByClassName("cardcontainer")[1]
  let player3smallCardDisplay = document.getElementsByClassName("cardcontainer")[2]
  let player4smallCardDisplay = document.getElementsByClassName("cardcontainer")[3]



 
  if (winner === players.player1){
   player1smallCardDisplay.appendChild(element)
 }

  if (winner === players.CPUPlayer){
    player2smallCardDisplay.appendChild(element)
  }
  
  if (winner === players.CPUPlayer2){
   player3smallCardDisplay.appendChild(element)
 }

 if (winner === players.CPUPlayer3){
   player4smallCardDisplay.appendChild(element)
 }

}




export const yesButtonSettings = () => {
    
  const buttonYes = document.querySelector(".button-yes")
    
        buttonYes.addEventListener('click', function(){
          
    
          let landedOn = spacesArray[players.activePlayer.updatedlocation]
          
          if (landedOn.price > players.activePlayer.cash){
      
            const modalContent = document.getElementsByClassName("modal-content")[0]
            modalContent.textContent = "Sorry, but you don't have enough " +
            "cash to buy this property. It will need to go to auction..." 
            
            return
          }

          if (landedOn.spaceType === "unique"){
            return
          }

        
        const runColorCheck = () => {
            let location = players.activePlayer.updatedlocation
             

          if (location === 1 || location === 3 ){
            players.activePlayer.cardCounts.brownCards += 1 
          }
          
          if (location === 6 || location === 8 || location === 9 ){
            players.activePlayer.cardCounts.lightBlueCards += 1 
          }

          if (location === 11 || location === 13 || location === 14 ){
            players.activePlayer.cardCounts.pinkCards += 1 
          }

          if (location === 16 || location === 18 || location === 19 ){
            players.activePlayer.cardCounts.orangeCards += 1 
          }
          if (location === 21 || location === 23 || location === 24 ){
            players.activePlayer.cardCounts.redCards += 1 
          }

          if (location === 26 || location === 27|| location === 29 ){
            players.activePlayer.cardCounts.yellowCards += 1 
          }

          if (location === 31 || location === 32 || location === 34 ){
            players.activePlayer.cardCounts.greenCards += 1 
          }

          if (location === 37|| location === 39  ){
            players.activePlayer.cardCounts.blueCards += 1 
          }

          if (players.activePlayer.cardCounts.lightBlueCards === 3){
            players.activePlayer.cardSets.lightBlueSet = true;
           }
           

           if (players.activePlayer.cardCounts.brownCards === 2){
            players.activePlayer.cardSets.brownSet = true;
           }
           
           if (players.activePlayer.cardCounts.pinkCards === 3){
            players.activePlayer.cardSets.pinkSet = true;
           }

           if (players.activePlayer.cardCounts.orangeCards === 3){
            players.activePlayer.cardSets.orangeSet = true;
           }
           if (players.activePlayer.cardCounts.redCards === 3){
            players.activePlayer.cardSets.redSet = true;
           }


           if (players.activePlayer.cardCounts.greenCards === 3){
            players.activePlayer.cardSets.greenSet = true;
           }
           if (players.activePlayer.cardCounts.blueCards === 2){
            players.activePlayer.cardSets.darkBlueSet = true;
           }



        }
 
        runColorCheck()




        appendSmallCardtoDisplay()
    
       if (players.activePlayer.updatedlocation === 12 || 
        players.activePlayer.updatedlocation === 28 ){
         players.activePlayer.utilities += 1 
       }
           players.activePlayer.cash -= landedOn.price
           landedOn.owner = players.activePlayer
       
           players.activePlayer.propertyowned.push(landedOn)
           displayInventoryCard(players.activePlayer.updatedlocation)
         
           // railroad
        if (players.activePlayer.updatedlocation === 5){
          players.activePlayer.railroads += 1 
        }

        if (players.activePlayer.updatedlocation === 15){
          players.activePlayer.railroads += 1
        }

   
        if (players.activePlayer.updatedlocation === 25){
          players.activePlayer.railroads += 1 
        }

        if (players.activePlayer.updatedlocation === 35){
          players.activePlayer.railroads += 1
        }
      




  
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
            
