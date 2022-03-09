
import { spacesArray } from "./spaceObjects.js"
import * as players from "./PlayerFactory.js "
import { CPUPlayer, nameHighlight } from "./PlayerFactory.js"
const modal = document.getElementsByClassName("modal")[0]
const okbutton = document.querySelector (".okay")
const propertyCards = document.getElementsByClassName("propertycards")
const highestBidDisplay = document.getElementsByClassName("currenthighbid")[0]
const player1ConfirmBid = document.getElementsByClassName("player1confirmbid")[0]
const player2ConfirmBid = document.getElementsByClassName("player2confirmbid")[0]
const stopBiddingPlyr1 = document.getElementsByClassName("stopbidding1")[0]
const stopBiddingPlyr2 = document.getElementsByClassName("stopbidding2")[0]
const cpuBidDisplay = document.getElementsByClassName("cpubid")[0]
const buttonYes = document.querySelector(".button-yes")
const buttonNo = document.querySelector(".button-no")
let cpuIsPlaying = true; 



export const resetDisplay = () => {   
    for (let i = 0; i < propertyCards.length; i++){
    propertyCards[i].style.display = " none "
    }
  }
  
  





  export function showModal (){ 
    modal.style.display = "block"
     const propertyCards = document.getElementsByClassName("propertycards")
   for (let i = 0; i < spacesArray.length; i++) {
     propertyCards[players.activePlayer.updatedlocation].style.display = " block "
      }
     }

     const auctionPopUp = document.getElementsByClassName("auctionpopup")[0]

     auctionPopUp.style.display = " none "

     okbutton.style.display = "none "
modal.style.display = "none"


export const CloseModal = () => {  
  okbutton.addEventListener('click', function(){
    //character.style.display = "none "
    modal.style.display = "none"
    //character.style.display = "none "
    okbutton.style.display = " none "

 
    // to reset to default yes and no buttons
    buttonYes.style.display = " block"
    buttonNo.style.display = " block"
    
    if (players.activePlayer === players.player1){
    players.switchPlayer() 
    nameHighlight()
    }

    
  
  })
}



export const clearBidDisplay = () => {
  
  document.getElementById('Player1bid').style.display = "none"
  document.getElementsByClassName("cpubidamount")[0].style.display = "none"
  highestBidDisplay.style.display = "none"
  stopBiddingPlyr1.style.display = "none"
  stopBiddingPlyr2.style.display = "none"
  player1ConfirmBid.style.display = "none"
  player2ConfirmBid.style.display = "none"

  cpuBidDisplay.style.display = "none"
 
}

const setCpuDiplay = () => {
  if (cpuIsPlaying = true){
    stopBiddingPlyr2.style.display = "none "
    player2ConfirmBid.style.display = "none"
    document.getElementById('Player2bid').style.display = "none"
    cpuBidDisplay.innerText = "Current CPU Bid"
    }

}
  


