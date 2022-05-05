
import { mediterennan, spacesArray } from "./spaceObjects.js"
import * as players from "./PlayerFactory.js"
import { determineSmallCard } from "./main.js"
import {resetDisplay} from "./displays.js"
export const buttonYesSettings = () => {


    const buttonYes = document.querySelector(".button-yes")
    
        buttonYes.addEventListener('click', function(){
          
    
          let landedOn = spacesArray[players.activePlayer.updatedlocation]
          
          if (landedOn.price > players.activePlayer.cash){
      
            modalContent.textContent = "Sorry, but you don't have enough " +
            "cash to buy this property. It will need to go to auction..." 
            
            return
          }
    
          let winner = players.activePlayer

          let element = document.getElementById(players.activePlayer.updatedlocation)
 

          if (landedOn.spaceType === "unique"){
            return
          }
       
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

         console.log(player1smallCardDisplay)

    
    
           players.activePlayer.cash -= landedOn.price
           landedOn.owner = players.activePlayer
          
          // const noduplicates = [...new Set(inactivePlayer.propertyowned)]
           players.activePlayer.propertyowned.push(landedOn)
          
         



           console.log(players.activePlayer.propertyowned)
  
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
    
    export const buildHouseorHotel = ()  => {

    let buildButton = document.getElementsByClassName("iconbutton")[2]

    buildButton.addEventListener('click', function(){

   console.log("clicked")

    })

  }