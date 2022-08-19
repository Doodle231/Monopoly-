import * as players from "./PlayerFactory.js"
   
   


   let introButtons = document.getElementsByClassName("smallintroicon")
    
     export const setPlayerName = () => {
   
      
        for (let i = 0; i< introButtons.length; i++){
      
  
         introButtons[i].addEventListener('click', function(e) {
         
            
  
            let player1nameText = document.getElementsByClassName("player1")[0]
           
            
            const nameInput = document.getElementById("nameinputbox").value

            players.player1.name = nameInput

             player1nameText.textContent = nameInput
            
         })

        }
     }


  
        

    
     

    

    
     

    