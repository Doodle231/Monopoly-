import {mediterennan, spacesArray} from "./spaceObjects.js"
import * as players from "./PlayerFactory.js"
import * as displays from "./displays.js"
import { initializeBidding } from "./auctionSettings.js"
import {startGame} from "./initializegame/startgame.js"
import {buildHouseorHotel, buttonYesSettings} from "./buttonhandlers.js"

startGame()

let availableDropdownProperty = document.getElementById("availablebuild")


for (let i = 0; i <spacesArray.length; i++){
  
  let option = document.createElement("option")
  let textContent = document.createTextNode(spacesArray[i].name)

  option.appendChild(textContent)

   availableDropdownProperty.appendChild(option)
  availableDropdownProperty[i].style.display = "none"

  
   
}



let buildButton = document.getElementsByClassName("iconbutton")[2]
let buildScreen = document.querySelector(".buildscreen")
buildScreen.style.display = "none"
let closeBuildScreen = document.querySelector(".closebuildscreen")
const buildHandler = () => {


buildButton.addEventListener('click', function(){

  buildScreen.style.display = "grid"

   
  let numberofHouses = document.getElementById("housenumber")

  let totalBuyPrice = document.querySelector(".buytotaltext")
  
  let buyhouseSelectButton = document.querySelector(".selectbuy")
  
  
  buyhouseSelectButton.addEventListener('click', function(){
    
    let houseCost  = null 

    console.log(availableDropdownProperty)
   
   

   let userChoice = availableDropdownProperty.options[availableDropdownProperty.selectedIndex].value 



/* all of this bottom rom has the same house cost value. No need to put specific 
values in place */ 

    if (userChoice === spacesArray[1].name || userChoice === spacesArray[3].name ){
  
      houseCost = spacesArray[1].eachhousecost
      console.log(houseCost)
  }


  if (userChoice === spacesArray[6].name || userChoice === spacesArray[8].name || userChoice ===  spacesArray[9].name  ){
    
    houseCost = spacesArray[1].eachhousecost
    console.log(houseCost)
}

if (userChoice === spacesArray[11].name ||  userChoice === spacesArray[13].name ||userChoice ===   spacesArray[14].name ){
  houseCost = spacesArray[11].eachhousecost
  console.log(houseCost)
} 



if (userChoice === spacesArray[16].name ||userChoice ===   spacesArray[18].name ||userChoice ===  spacesArray[19].name ){
  houseCost = spacesArray[16].eachhousecost
  console.log(houseCost)
} 


if (userChoice === spacesArray[21].name || userChoice === spacesArray[23].name || userChoice ===  spacesArray[24].name ){
  houseCost = spacesArray[21].eachhousecost
  console.log(houseCost)
} 


if (userChoice === spacesArray[26].name ||  userChoice ===  spacesArray[27].name || userChoice ===  spacesArray[29].name ){
  houseCost = spacesArray[26].eachhousecost
  console.log(houseCost)
} 


if (userChoice === spacesArray[31].name ||userChoice === spacesArray[32].name ||userChoice ===  spacesArray[34].name ){
  houseCost = spacesArray[31].eachhousecost
  console.log(houseCost)
} 

if (userChoice == spacesArray[37].name || userChoice == spacesArray[39].name  ){
  houseCost = spacesArray[37].eachhousecost
  console.log(houseCost)
} 

console.log(" current value is " + houseCost)
  
  parseInt(numberofHouses.value)
  
  
  for (let i = 0; i < spacesArray.length; i++){
  
  

    totalBuyPrice.textContent = spacesArray[1].eachhousecost * 
    numberofHouses.value

  
  }
  

  
    

  })
  
  players.activePlayer.cardSets.brownSet = true; 
  players.activePlayer.cardSets.lightBlueSet = true; 
  players.activePlayer.cardSets.pinkSet = true; 
  players.activePlayer.cardSets.orangeSet = true; 
  players.activePlayer.cardSets.redSet = true; 
  players.activePlayer.cardSets.yellowSet = true; 
  players.activePlayer.cardSets.greenSet = true; 
  players.activePlayer.cardSets.darkBlueSet = true; 

if (players.activePlayer.cardSets.brownSet == true){
  availableDropdownProperty[1].style.display = "block"
  availableDropdownProperty[3].style.display = "block"
}

if (players.activePlayer.cardSets.lightBlueSet == true){
  availableDropdownProperty[6].style.display = "block"
  availableDropdownProperty[8].style.display = "block"
  availableDropdownProperty[9].style.display = "block"
}

if (players.activePlayer.cardSets.pinkSet == true){
  availableDropdownProperty[11].style.display = "block"
  availableDropdownProperty[13].style.display = "block"
  availableDropdownProperty[14].style.display = "block"
}

if (players.activePlayer.cardSets.orangeSet == true){

  availableDropdownProperty[16].style.display = "block"
  availableDropdownProperty[18].style.display = "block"
  availableDropdownProperty[19].style.display = "block"
  
}

if (players.activePlayer.cardSets.redSet == true){
  availableDropdownProperty[21].style.display = "block"
  availableDropdownProperty[23].style.display = "block"
  availableDropdownProperty[24].style.display = "block"
}


if (players.activePlayer.cardSets.yellowSet == true){
  availableDropdownProperty[26].style.display = "block"
  availableDropdownProperty[27].style.display = "block"
  availableDropdownProperty[29].style.display = "block"
}

if (players.activePlayer.cardSets.greenSet == true){
  availableDropdownProperty[31].style.display = "block"
  availableDropdownProperty[32].style.display = "block"
  availableDropdownProperty[34].style.display = "block"
}

if (players.activePlayer.cardSets.darkBlueSet == true){
  availableDropdownProperty[37].style.display = "block"
  availableDropdownProperty[39].style.display = "block"
  
}









closeBuildScreen.addEventListener('click', function(){

buildScreen.style.display = "none"
})





})



}

buildHandler()

const smallPieces = document.getElementsByClassName("availablesubcontainer")[0]












///////////////



export const determineSmallCard = (elementId, auctionWinner) => {
      
  let smallCards = document.getElementsByClassName("availablesubcontainer")

  let player1smallCardDisplay = document.getElementsByClassName("cardcontainer")[0]
  let player2smallCardDisplay = document.getElementsByClassName("cardcontainer")[1]
  let player3smallCardDisplay = document.getElementsByClassName("cardcontainer")[2]
  let player4smallCardDisplay = document.getElementsByClassName("cardcontainer")[3]


  let landedOn = spacesArray[players.activePlayer.updatedlocation]

   let element = document.getElementById(elementId)
 

   if (landedOn.spaceType === "unique"){
     return
   }

   
  

   if (auctionWinner === players.player1){
    player1smallCardDisplay.appendChild(element)
  }

   if (auctionWinner === players.CPUPlayer){
     player2smallCardDisplay.appendChild(element)
   }
   
   if (auctionWinner === players.CPUPlayer2){
    player3smallCardDisplay.appendChild(element)
  }

  if (auctionWinner === players.CPUPlayer3){
    player4smallCardDisplay.appendChild(element)
  }
  

  

}








const modalContent = document.getElementsByClassName("modal-content")[0]



const playerActionsLog =  document.getElementsByClassName("actionstaken")[0]

const buttonNo = document.getElementsByClassName("button-no")[0]


buttonNo.addEventListener('click', function() {
  const propertyCards = document.getElementsByClassName("propertycards")
  for (let i = 0; i < spacesArray.length; i++) {
    propertyCards[players.activePlayer.updatedlocation].style.display = " block "
    
     }
 
  document.getElementsByClassName("modal")[0].style.display = "none"
  
  initializeBidding()
  
})


  import {setPropertyColors} from "./propertyCards/setPropertyColors.js"



  setPropertyColors()


const rollButton =  document.querySelector('.btn-roll')


  //////////////////////////////////////////////////////////////////
  players.rollButton.addEventListener('click', function() {

    
  if (players.activePlayer === players.player1){
    players.player1.moveplayer().checkOwner().checkforcolorset()
    return
  }

  if (players.activePlayer === players.CPUPlayer){
      players.CPUPlayer.moveplayer().checkOwner().checkforcolorset()
      return
  }
  
  if (players.activePlayer === players.CPUPlayer2){
  players.CPUPlayer2.moveplayer().checkOwner().checkforcolorset()
  return
  }
    
  if (players.activePlayer === players.CPUPlayer3){
  players.CPUPlayer3.moveplayer().checkOwner().checkforcolorset()
  return
  }


  


 })


buttonYesSettings()

const okbutton = document.querySelector (".okay")

okbutton.addEventListener('click', function() {
    const oneplayercash = document.getElementsByClassName("cash1")[0]
   const twoplayercash = document.getElementsByClassName("cash2")[0]
   twoplayercash.textContent = " Cash: $" + players.CPUPlayer.cash 
   oneplayercash.textContent = " Cash: $" + players.player1.cash 
  
    let landedOn = spacesArray[players.activePlayer.updatedlocation]
 
      displays.showModal()
      
  


   
        })