import * as players from "./PlayerFactory.js"
import { spaceNames, spacenamesUnordered} from "./PlayerFactory.js"



export const grabIconChoice = () => {
   
    let introButtons = document.getElementsByClassName("intro-iconbutton")
    
    
  for (let i = 0; i< introButtons.length; i++){
    
       introButtons[i].addEventListener('click', function(e) {
          
          console.log("clicked")
        
           if (e.target.id === "boot"){
            players.player1.icon ="boot"
            
          }
  
          if (e.target.id === "car"){
            players.player1.icon = "car"
          
          }
  
          if (e.target.id === "dog"){
            players.player1.icon = "dog"
          
          }
  
          if (e.target.id === "hat"){
            players.player1.icon = "hat"
           
          }
         

          console.log(players.player1.icon)
   
            


        })
    
    }
  

}




export const appendActivePlayer = () => {
    console.log(players.player1.icon)
    const boardPiece = document.getElementsByClassName("booticonboard")[0]
    const boardPiece2 = document.getElementsByClassName("cariconboard")[0]
    const boardPiece3 = document.getElementsByClassName("dogiconboard")[0]
    const boardPiece4 = document.getElementsByClassName("haticonboard")[0]

    if (players.player1.icon === "boot"){
    spaceNames[players.player1.updatedlocation].append(boardPiece)
    spaceNames[players.CPUPlayer.updatedlocation].append(boardPiece2)
    spaceNames[players.CPUPlayer2.updatedlocation].append(boardPiece3)
    spaceNames[players.CPUPlayer3.updatedlocation].append(boardPiece4)
  }

  if (players.player1.icon === "car"){
    spaceNames[players.player1.updatedlocation].append(boardPiece2)
    spaceNames[players.CPUPlayer.updatedlocation].append(boardPiece)
    spaceNames[players.CPUPlayer2.updatedlocation].append(boardPiece3)
    spaceNames[players.CPUPlayer3.updatedlocation].append(boardPiece4)

  }

  if (players.player1.icon === "dog"){
    console.log("doggie")
    spaceNames[players.player1.updatedlocation].append(boardPiece3)
    spaceNames[players.CPUPlayer.updatedlocation].append(boardPiece)
    spaceNames[players.CPUPlayer2.updatedlocation].append(boardPiece2)
    spaceNames[players.CPUPlayer3.updatedlocation].append(boardPiece4)
  }

  if (players.player1.icon === "hat"){
    spaceNames[players.player1.updatedlocation].append(boardPiece4)
    spaceNames[players.CPUPlayer.updatedlocation].append(boardPiece)
    spaceNames[players.CPUPlayer2.updatedlocation].append(boardPiece2)
    spaceNames[players.CPUPlayer3.updatedlocation].append(boardPiece3)
  }
}