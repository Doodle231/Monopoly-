



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
    