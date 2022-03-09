import * as players from "./PlayerFactory.js"
import { spacesArray } from "./spaceObjects.js"
import {clearBidDisplay} from "./displays.js"
const auctionPopUp = document.getElementsByClassName("auctionpopup")[0]



 const compareBids = () => {

  let player1Bid = parseInt( document.getElementById('Player1bid').value)
  let player2Bid = parseInt( document.getElementById('Player2bid').value)
  let cpubidamount = parseInt(document.getElementsByClassName("cpubidamount")[0].value)

  let highestBidNumber = parseInt(document.getElementsByClassName("currenthighbidnum")[0])
  const highestBidDisplay = document.getElementsByClassName("currenthighbid")[0]



  cpubidamount = 0 
    if (player1Bid < highestBidNumber){
    return
  }
 
  if (cpubidamount > player1Bid || cpubidamount > highestBidNumber){
    return
  }

  if (cpubidamount < highestBidNumber){
    return
  }

  let propertyPrice= spacesArray[players.activePlayer.updatedlocation].price
 
  let maxBId = propertyPrice 

  let oldBid  = cpubidamount
 
  let bidIncrement = Math.floor(Math.random() * 10) +1 
  cpubidamount = player1Bid + bidIncrement
  


  if ( cpubidamount > maxBId){
    cpubidamount = 0 
    document.getElementsByClassName("cpubidamount")[0].innerHTML = cpubidamount
    
    let landedOn = spacesArray[players.activePlayer.updatedlocation]
    
    players.player1.propertyowned.push(landedOn)
    landedOn.owner = players.player1
    players.player1.cash -= player1Bid
  
    const oneplayercash = document.getElementsByClassName("cash1")[0]
    //oneplayercash.innerHTML = " Cash: $ " + players.player1.cash
    
    auctionPopUp.style.display = "none"
    //switchPlayer() 
    players.nameHighlight() 
    clearBidDisplay() 
     
    
  }
  
 const delayBid = () => {
 
  if (player1Bid > cpubidamount){
    highestBidNumber = player1Bid
    highestBidDisplay.innerHTML = "The current high bid is : $  " + player1Bid
  } else {
    highestBidNumber= cpubidamount
    highestBidDisplay.innerHTML = "The current high bid is : $  " + cpubidamount
  }

  
  document.getElementsByClassName("cpubidamount")[0].innerHTML = cpubidamount

}


 if (player1Bid > oldBid){
  highestBidNumber = player1Bid
  highestBidDisplay.innerHTML = "The current high bid is : $  " + player1Bid
} else {
  highestBidNumber= oldBid
  
}

setTimeout(delayBid,1500)




}

const player1ConfirmBid = document.getElementsByClassName("player1confirmbid")[0]

   player1ConfirmBid.addEventListener('click', function(){
   
    compareBids() 
    
 

   })

   const stopBiddingPlyr1 = document.getElementsByClassName("stopbidding1")[0]

   stopBiddingPlyr1.addEventListener('click', function(){

   auctionPopUp.style.display ="none "
  players.switchPlayer()
   players.nameHighlight()


  })
  const stopBiddingPlyr2 = document.getElementsByClassName("stopbidding2")[0]
  stopBiddingPlyr2.addEventListener('click', function(){

    auctionPopUp.style.display ="none "
    players.switchPlayer() 
    players.nameHighlight() 
 
 
   })


player1ConfirmBid.addEventListener('click', function(){
  
 
   
    })
  
    const player2ConfirmBid = document.getElementsByClassName("player2confirmbid")[0]
  
   player2ConfirmBid.addEventListener('click', function(){
   
  
    })

    const buttonNo = document.querySelector(".button-no")
      
 
 export const initNo = () => {
 
    buttonNo.addEventListener('click', function(){
  compareBids() 
 
      let landedOn = spacesArray[players.activePlayer.updatedlocation]

 const auctionContent = document.getElementsByClassName("auctioncontent")[0]

 
 const playerActionsLog =  document.getElementsByClassName("actionstaken")[0]
 
 playerActionsLog.textContent = players.activePlayer.name + "  has landed on  "
      + landedOn.name + " . " + players.activePlayer.name + " has declined to purchase "


  if (players.activePlayer === players.CPUPlayer){
    switchPlayer() 
   nameHighlight() 
    
  }

  const auctionSettings = () => {
     
   if (landedOn.price  < 1){
    
    players.switchPlayer() 
    players.nameHighlight() 
     return
   }
   const propertyCards = document.getElementsByClassName("propertycards")
  if (landedOn.owner === "The bank" && landedOn.price > 0 ){
    auctionPopUp.style.display = " block "
  for (let i = 0; i < propertyCards.length; i++) {
    
    auctionContent.appendChild(propertyCards[i])
    propertyCards[players.activePlayer.updatedlocation].style.display = "block"

    
   
    
     }
       
    } else {
      auctionPopUp.style.display = "none"
    }
  
    
   


  }
    auctionSettings() 
})

 }