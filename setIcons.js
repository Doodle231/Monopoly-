import * as players from "./PlayerFactory.js"
import { spaceNames, spacenamesUnordered} from "./PlayerFactory.js"

const boardPiece = document.getElementsByClassName("booticonboard")[0]
const boardPiece2 = document.getElementsByClassName("cariconboard")[0]
const boardPiece3 = document.getElementsByClassName("dogiconboard")[0]
const boardPiece4 = document.getElementsByClassName("haticonboard")[0]



export const grabIconChoice = () => {
   
    let introButtons = document.getElementsByClassName("intro-iconbutton")
    
    
  for (let i = 0; i< introButtons.length; i++){
    

       introButtons[i].addEventListener('click', function(e) {
          
          
           if (e.target.id === "boot"){
            players.player1.icon = boardPiece
        
          }
  
          if (e.target.id === "car"){
            players.player1.icon = boardPiece2
          
          }
  
          if (e.target.id === "dog"){
            players.player1.icon = boardPiece3
          
          }
  
          if (e.target.id === "hat"){
            players.player1.icon = boardPiece4
           
          }
         
       

          
            


        })
    
    }
  

}


export const appendActivePlayer = () => {
  
  
    

    if (players.player1.icon[0] === boardPiece){
    spaceNames[players.player1.updatedlocation].append(boardPiece)
    spaceNames[players.CPUPlayer.updatedlocation].append(boardPiece2)
    spaceNames[players.CPUPlayer2.updatedlocation].append(boardPiece3)
    spaceNames[players.CPUPlayer3.updatedlocation].append(boardPiece4)
  }

  if (players.player1.icon[0] === boardPiece2){
    spaceNames[players.player1.updatedlocation].append(boardPiece2)
    spaceNames[players.CPUPlayer.updatedlocation].append(boardPiece)
    spaceNames[players.CPUPlayer2.updatedlocation].append(boardPiece3)
    spaceNames[players.CPUPlayer3.updatedlocation].append(boardPiece4)

  }

  if (players.player1.icon[0] === boardPiece3){
    spaceNames[players.player1.updatedlocation].append(boardPiece3)
    spaceNames[players.CPUPlayer.updatedlocation].append(boardPiece)
    spaceNames[players.CPUPlayer2.updatedlocation].append(boardPiece2)
    spaceNames[players.CPUPlayer3.updatedlocation].append(boardPiece4)
  }

  if (players.player1.icon[0] === boardPiece4){
    spaceNames[players.player1.updatedlocation].append(boardPiece4)
    spaceNames[players.CPUPlayer.updatedlocation].append(boardPiece)
    spaceNames[players.CPUPlayer2.updatedlocation].append(boardPiece2)
    spaceNames[players.CPUPlayer3.updatedlocation].append(boardPiece3)
  }
}


const appendIconToPlayer = () => {
// add more logic later
  let player1name = document.getElementsByClassName("player1")[0]
  let CPUPlayername2 = document.getElementsByClassName("player2")[0]
  let CPUPlayername3 = document.getElementsByClassName("player3")[0]
   let CPUPlayername4 = document.getElementsByClassName("player4")[0]

   let player1icon = document.createElement("div")
   player1icon.id = "player1iconsmall"
   
 

}
