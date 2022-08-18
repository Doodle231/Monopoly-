import * as players from "./PlayerFactory.js"
import { spacesArray } from "./spaceObjects.js"
import { determineSmallCard } from "./main.js"
import { switchPlayer } from "./PlayerFactory.js"
import { generateAuctionPropertyCards, generatePropertyCards ,displayInventoryCard} from "./propertyCards/generatePropertyCards.js"
export const initializeBidding = () => {

  const auctionPopUp = document.getElementsByClassName("auctionpopup")[0]
  auctionPopUp.style.display = "block"

 
const propertyCards = document.getElementsByClassName("auctionpropertycards")



  propertyCards[players.activePlayer.updatedlocation].style.display = " block "



  const player1ConfirmBid = document.querySelector(".player1confirmbid")
  const highestBidDisplay = document.getElementsByClassName("currenthighbid")[0]

 
  let winner = null
  player1ConfirmBid.addEventListener('click', function(){

  winner = null

    let player1Bid = parseInt( document.getElementById('Player1bid').value)
    
let player1BidDisplay = document.getElementsByClassName("player1highestbid")[0]
let player2BidDisplay = document.getElementsByClassName("player2highestbid")[0]
let player3BidDisplay = document.getElementsByClassName("player3highestbid")[0]
let player4BidDisplay = document.getElementsByClassName("player4highestbid")[0]

    let player2Bid = 0
    let  player3Bid = 0 
    let player4Bid = 0 
  

// bid behavior setup 
    let bidIncrement = Math.floor(Math.random() * 10) +1 
    let randomUnderbid = Math.floor(Math.random() * 20) +1 
    let conservativeTotalBid = spacesArray[1].price - randomUnderbid
    let aggressiveTotalBid = spacesArray[1].price + bidIncrement
    let passiveTotalBid = spacesArray[1].price / 2 
  
     player2Bid = aggressiveTotalBid
     player3Bid = conservativeTotalBid
     player4Bid = passiveTotalBid
    
      
     
      let highestBidNumber = 0
     
     
     
     // compare bids and display them in highest bid heading. First pass will set highest bid and second pass will decide winner
     if (player1Bid > highestBidNumber ){
      highestBidNumber = player1Bid
      highestBidDisplay.innerHTML = highestBidNumber
      
     }
      
     if (player2Bid > highestBidNumber){
      highestBidNumber = player2Bid
      highestBidDisplay.innerHTML = highestBidNumber
  
     }

     if (player3Bid > highestBidNumber){
       highestBidNumber = player3Bid
      highestBidDisplay.innerHTML = highestBidNumber
    
     }

     if (player4Bid > highestBidNumber){
      highestBidNumber = player4Bid
      highestBidDisplay.innerHTML = highestBidNumber
 
     }
  
           // second run through to decide the winner now that the highest bid number is set
          
         


           if (player1Bid === highestBidNumber ){
             winner = players.player1
             displayInventoryCard(players.activePlayer.updatedlocation)
           }
            
           if (player2Bid === highestBidNumber){
             winner = players.CPUPlayer
            
           }
      
           if (player3Bid === highestBidNumber){
            winner = players.CPUPlayer2
          
           }
      
           if (player4Bid === highestBidNumber){
            winner = players.CPUPlayer3
       
           }
    
           winner.cash -= highestBidNumber
           winner.propertyowned.push(spacesArray[players.activePlayer.updatedlocation])
           spacesArray[players.activePlayer.updatedlocation].owner = winner
          
           if (players.activePlayer.updatedlocation === 12 || 
            players.activePlayer.updatedlocation === 28){
             players.activePlayer.utilities += 1 
           }

           if(players.activePlayer.utilities === 1){
            spacesArray[players.activePlayer.updatedlocation].rent = players.activePlayer.dice * 4
           
          }
    
          if (players.activePlayer.utilities === 2){
            spacesArray[players.activePlayer.updatedlocation].rent = players.activePlayer.dice * 8
          }

        generatePropertyCards()
        generateAuctionPropertyCards()
        
           determineSmallCard(players.activePlayer.updatedlocation, winner)
      
           player1BidDisplay.innerHTML = "Player 1 bid: $" + player1Bid
     player2BidDisplay.innerHTML = "Player 2 bid: $" + player2Bid
     player3BidDisplay.innerHTML = "Player 3 bid: $" + player3Bid  
     player4BidDisplay.innerHTML = "Player 4 bid: $" + player4Bid

     const closeAuction = () => {
      {
      auctionPopUp.style.display = "none"
      switchPlayer()
       player2Bid = 0
      player3Bid = 0 
     player4Bid = 0
     player1Bid= 0
  
    }
  
   }

   
      const displayWinner = () => {

      setTimeout(closeAuction, 1000)
      
    }
  

       const delayBids = () => {
        
       setTimeout(displayWinner, 1000)
     
       

      }
   delayBids()

 



   const twoplayercash = document.getElementsByClassName("cash2")[0]   
   const oneplayercash = document.getElementsByClassName("cash1")[0]
   const threeplayercash = document.getElementsByClassName("cash3")[0]
   const fourplayercash = document.getElementsByClassName("cash4")[0]

   twoplayercash.textContent = " Cash: $" + players.CPUPlayer.cash 
   oneplayercash.textContent = " Cash: $ " + players.player1.cash 
   threeplayercash.textContent = "Cash: $ " + players.CPUPlayer2.cash
   fourplayercash.textContent = "Cash: $ "+ players.CPUPlayer3.cash
   


 })
}
