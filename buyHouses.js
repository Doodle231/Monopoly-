
import { spacesArray } from "./spaceObjects.js"
import * as players from "./PlayerFactory.js"
import { updateAllCash } from "./displayhelpers/updateallcash.js"

export const buildHandler = () => {

    let HousesandHotels = document.getElementsByClassName("hotel")

    let HouseandHotelUnordered= Array.from(HousesandHotels);
        const index = [9,8,7,6,5,4,3,2,1,0,19,18,17,16,15,14,13,12,11,
          10,29,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,39]
         const orderedHousesandHotels = index.map(i => HouseandHotelUnordered[i])
    
         for (let i = 0; i <orderedHousesandHotels.length; i++){
         
    
         }
    

    
    let availableDropdownProperty = document.getElementById("availablebuild")
 
      
    for (let i = 0; i <spacesArray.length; i++){
      
      let option = document.createElement("option")
      let textContent = document.createTextNode(spacesArray[i].name)
    
      option.appendChild(textContent)
    
       availableDropdownProperty.appendChild(option)
      availableDropdownProperty[i].style.display = "none"
     
       
      
    }

    if (availableDropdownProperty.value === "go"){
      availableDropdownProperty.value = ""
    }
    

    let buildButton = document.getElementsByClassName("iconbutton")[1]
    let buildScreen = document.querySelector(".buildscreen")
    buildScreen.style.display = "none"
    let closeBuildScreen = document.querySelector(".closebuildscreen")


buildButton.addEventListener('click', function(){


    

  buildScreen.style.display = "grid"


  let numberofHouses = document.getElementById("buildnumber")
  
  let totalBuyPrice = document.querySelector(".buytotaltext")
  
  let buyhouseSelectButton = document.querySelector(".selectbuy")
  
  
  buyhouseSelectButton.addEventListener('click', function(){
    
    let houseCost  = 0

   
   
   let indexOfSelected = availableDropdownProperty.selectedIndex
   let userChoice = availableDropdownProperty.options[availableDropdownProperty.selectedIndex].value 

   


    if (userChoice === spacesArray[1].name || userChoice === spacesArray[3].name ){
  
      houseCost = spacesArray[1].eachhousecost
    
  }


  if (userChoice === spacesArray[6].name || userChoice === spacesArray[8].name || userChoice ===  spacesArray[9].name  ){
    
    houseCost = spacesArray[1].eachhousecost
  
}

if (userChoice === spacesArray[11].name ||  userChoice === spacesArray[13].name ||userChoice ===   spacesArray[14].name ){
  houseCost = spacesArray[11].eachhousecost

} 



if (userChoice === spacesArray[16].name ||userChoice === spacesArray[18].name ||userChoice === spacesArray[19].name ){
  houseCost = spacesArray[16].eachhousecost
 
} 


if (userChoice === spacesArray[21].name || userChoice === spacesArray[23].name || userChoice ===  spacesArray[24].name ){
  houseCost = spacesArray[21].eachhousecost

} 


if (userChoice === spacesArray[26].name ||  userChoice ===  spacesArray[27].name || userChoice ===  spacesArray[29].name ){
  houseCost = spacesArray[26].eachhousecost

} 


if (userChoice === spacesArray[31].name ||userChoice === spacesArray[32].name ||userChoice ===  spacesArray[34].name ){
  houseCost = spacesArray[31].eachhousecost

} 

if (userChoice == spacesArray[37].name || userChoice == spacesArray[39].name  ){
  houseCost = spacesArray[37].eachhousecost
 
} 


  
 let chosenHouseNumber = parseInt(numberofHouses.value)


let totalPurchasePrice = houseCost * chosenHouseNumber

  for (let i = 0; i < spacesArray.length; i++){


    totalBuyPrice.textContent = "The cost to buy " + chosenHouseNumber + " houses on "
    + userChoice + " is $" + totalPurchasePrice
    
    

  }
  

  let buyButton = document.querySelector(".buyhouse")


buyButton.addEventListener('click', function(){

 

if (players.player1.cash < totalPurchasePrice ){
  totalBuyPrice.textContent = "You don't have enough cash to buy this property"

  return
}

spacesArray[indexOfSelected].houses += chosenHouseNumber


if (chosenHouseNumber == 1){

  orderedHousesandHotels[indexOfSelected].children[0].style.display = "block"
  spacesArray[indexOfSelected].rent = spacesArray[indexOfSelected].house1rent
  spacesArray[indexOfSelected].houses +=1
  players.player1.housesOwned +=1
}


if (chosenHouseNumber == 2){
  
  orderedHousesandHotels[indexOfSelected].children[0].style.display = "block"
  orderedHousesandHotels[indexOfSelected].children[1].style.display = "block"
  spacesArray[indexOfSelected].rent = spacesArray[indexOfSelected].house2rent
  spacesArray[indexOfSelected].houses +=2
  players.player1.housesOwned +=2
}

  
if (chosenHouseNumber == 3){
  orderedHousesandHotels[indexOfSelected].children[0].style.display = "block"
  orderedHousesandHotels[indexOfSelected].children[1].style.display = "block"
  orderedHousesandHotels[indexOfSelected].children[2].style.display = "block"
  spacesArray[indexOfSelected].rent = spacesArray[indexOfSelected].house3rent
  spacesArray[indexOfSelected].houses +=3
  players.player1.housesOwned +=3
  }

if (chosenHouseNumber == 4){
    orderedHousesandHotels[indexOfSelected].children[0].style.display = "block"
    orderedHousesandHotels[indexOfSelected].children[1].style.display = "block"
    orderedHousesandHotels[indexOfSelected].children[2].style.display = "block"
    orderedHousesandHotels[indexOfSelected].children[3].style.display = "block"
    spacesArray[indexOfSelected].rent = spacesArray[indexOfSelected].house4rent
    spacesArray[indexOfSelected].houses +=4
    players.player1.housesOwned +=4
}
    


let buyText = document.querySelector(".purcasedtext")

buyText.textContent = chosenHouseNumber + " houses have been purchased on  " + spacesArray[indexOfSelected].name 

players.player1.cash -= totalPurchasePrice
 

updateAllCash()
})
    

  })
  


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





})


}

let closeBuildScreenBtn = document.getElementById("closebuildscreenbtn")

let buildScreen = document.querySelector(".buildscreen")

closeBuildScreenBtn.addEventListener('click', function(){

buildScreen.style.display = "none"
})
