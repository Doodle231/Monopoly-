import * as players from "../PlayerFactory.js"
import { electricCompany, spacesArray } from "../spaceObjects.js"
import { usermessage } from "../PlayerFactory.js"
import { resetDisplay } from "../displays.js"
import { CloseModal, showModal } from "../displays.js"
import { generateChanceCards } from "./generateChanceCards.js"
import { appendActivePlayer } from "../setIcons.js"
import { updateAllCash } from "../displayhelpers/updateallcash.js"
import { okayButtonSettings } from "../buttonhandlers.js"
import { spaceNames } from "../PlayerFactory.js"

export const character = document.createElement("img")



character.classList = "guy"

character.src = "/assets/character.png"



const modalContent = document.getElementsByClassName("modal-content")[0]
const oneplayercash = document.getElementsByClassName("cash1")[0]
const boardPiece = document.getElementsByClassName("boot")
const boardPiece2 = document.getElementsByClassName("car")
const twoplayercash = document.getElementsByClassName("cash2")[0]
const names = document.getElementsByClassName("name")
const okbutton = document.querySelector (".okay")
const buttonYes = document.querySelector(".button-yes")
const buttonNo = document.querySelector(".button-no")
const modal = document.getElementsByClassName("modal")[0]


export const communityCardSetting = () =>{

  const clearCommunityCards = () => {

    for (let i = 0; i < communityCards.length; i++){
      communityCards[i].style.display = "none"
    }
  }

  let landedOn = spacesArray[players.activePlayer.updatedlocation]

   const communityCards = document.getElementsByClassName("communitycards")
   if (landedOn.name !== "Community Chest"){
     clearCommunityCards() 
   }
   
   if (landedOn.name === "Community Chest"){
    
   for (let i = 0; i < communityCards.length; i++){
   
      resetDisplay()
      
    }

     usermessage[0].textContent = "You have landed on Community Chest. Here is your card... "
    let randomChance = Math.floor(Math.random() * 9) +1 
     communityCards[randomChance].style.display = "block"
    okbutton.style.display = "block"
    buttonNo.style.display = "none"
    buttonYes.style.display = "none"
    

    if (randomChance === 0){
      players.activePlayer.cash += 100
      }
    
    if (randomChance === 1){
     players.activePlayer.cash += 100
    }

    if (randomChance === 2){
     players.activePlayer.cash -= 150
    }
   
    if (randomChance == 3) {
      players.activePlayer.cash += 200
 

    }

    if (randomChance === 4){
      players.activePlayer.cash += 100
    }

    if (randomChance === 5){
      players.activePlayer.cash += 100
    }

    if (randomChance === 6){
      players.activePlayer.cash -= 15
    }


     if (randomChance === 7){
     players.activePlayer.cash += 200 
    
    }

     if (randomChance === 8){
       players.activePlayer.cash += 100 
     }

     if (randomChance === 9){
      players.activePlayer.cash += 50 
    }
    
    const threeplayercash = document.getElementsByClassName("cash3")[0]
    const fourplayercash = document.getElementsByClassName("cash4")[0]

    twoplayercash.textContent = " Cash: $" + players.CPUPlayer.cash 
  oneplayercash.textContent = " Cash: $ " + players.player1.cash 
  threeplayercash.textContent = "Cash: $ " + players.CPUPlayer2.cash
            fourplayercash.textContent = "Cash: $ "+ players.CPUPlayer3.cash
  }
  CloseModal()
  updateAllCash()
}


export function jail () {
        
    let landedOn = spacesArray[players.activePlayer.updatedlocation]
    
    if (players.activePlayer.updatedlocation === 30){
    okbutton.style.display = " block"
    buttonYes.style.display = "none "
    buttonNo.style.display = "none "
    usermessage[0].textContent = "You have landed on the jail space. You have been taken directly to jail"
    resetDisplay() 
    

  if (players.activePlayer.updatedlocation === 30  ){
  players.activePlayer.location.splice(0, players.activePlayer.location.length)
  players.activePlayer.location.push(10)  
  players.activePlayer.updatedlocation = 10 
  appendActivePlayer()
  
  }
  





}

}

export function incomeTaxSetting (){

  let landedOn = spacesArray[players.activePlayer.updatedlocation]
 if (landedOn.name === "Income Tax") {

  players.activePlayer.cash -= 50 
    usermessage[0].textContent = " You have landed on Income Tax. $50 has been taken from  your account"
    resetDisplay() 
    okbutton.style.display = "block"
    buttonNo.style.display = "none"
    buttonYes.style.display = "none"
    
    //twoplayercash.textContent = " Cash: $" + players.CPUPlayer.cash 
    //oneplayercash.textContent = " Cash: $ " + players.player1.cash 
    CloseModal() 
    
    
  }
}

export function visiting(){
  let landedOn = spacesArray[players.activePlayer.updatedlocation]
  if ( landedOn.name === "Just Visiting"){


    okbutton.style.display = " block"
    usermessage[0].textContent = "You have landed on the visiting space. Relax, you are not in jail... Yet "
    buttonYes.style.display = "none "
    buttonNo.style.display = "none "
    okayButtonSettings()
    resetDisplay() 
 
    
  
     }
    
}



    export const displayChanceCards = () => {
  
generateChanceCards()
  let landedOn = spacesArray[players.activePlayer.updatedlocation]
  let randomChance = Math.floor(Math.random() * 9) +1 
   const ChanceCards = document.getElementsByClassName("chancecards")
   for (let i = 0; i < ChanceCards.length; i++){
    ChanceCards[i].style.display = "none"
  }
  
  
   
   if (landedOn.name === "Chance"){
   console.log("firing")
   
    for (let i = 0; i < ChanceCards.length; i++){
    resetDisplay() 
    ChanceCards[randomChance].style.display = " block"
    
  } 
  
     usermessage[0].textContent = "You have landed on Chance. Here is your card... "
  
     
    
    if (randomChance === 0){
      players.activePlayer.cash += 20 
      }
    
    if (randomChance === 1){
     players.activePlayer.cash += 200
    }

    if (randomChance === 2){
     players.activePlayer.location.splice(0, players.activePlayer.location.length)
      players.activePlayer.location.push(10)  
      players.activePlayer.updatedlocation = 10 
      appendActivePlayer()
    }
   
    if (randomChance == 3) {
      players.activePlayer.location.splice(0, players.activePlayer.location.length)
      players.activePlayer.location.push(39)  
     players.activePlayer.updatedlocation = 39
     appendActivePlayer() 
     landedOn = spacesArray[39]

     
    

  }

    if (randomChance === 4){
      players.activePlayer.cash -= 20 
    }

    if (randomChance === 5){
      players.activePlayer.cash += 100
    }

    if (randomChance === 6){
      players.activePlayer.cash -= 15
    }


 if (randomChance === 7){
     
      players.activePlayer.location.splice(0, players.activePlayer.location.length)
      players.activePlayer.location.push(11)  
     players.activePlayer.updatedlocation = 11
     appendActivePlayer() 
     
    
    }

     if (randomChance === 8){
       players.activePlayer.cash += 100 
     }

     if (randomChance === 9){
      players.activePlayer.cash += 50 
    }

    

     }
   
     
    }  


    export const ElectricCompanySettings = () => {
      
      if (players.activePlayer.updatedlocation === 12){
       
      let rentsCardDisplay = document.getElementsByClassName("rents")[12]
      rentsCardDisplay.style.display ="none"
      
      let ElectricCard = document.querySelector(".electriccompany")
      
      let img = document.createElement("img")
      img.src = "./assets/light-bulb.png"
      let description = document.createElement("div")
      description.classList = "electricdescription"

     description.textContent = "Rent price is 4x the value of dice rolled " +
     "if one utility is owned and 8x the value of the dice rolled if two " +
     "utilities are owned "
      
     let landed = spacesArray[players.activePlayer.updatedlocation]
     
      img.classList = "bulb"
      ElectricCard.appendChild(description)
      ElectricCard.appendChild(img)

   


      if (landed.owner == players.activePlayer){
        return
      }

      

      if(landed.owner.utilities === 1){
        landed.rent = players.activePlayer.dice * 4
       
      }

      if (landed.owner.utilities === 2){
        landed.rent = players.activePlayer.dice * 8
      }

       
    }

  }
         
      
  export const waterWorksSettings = () => {
      
    if (players.activePlayer.updatedlocation === 28){
     
    let rentsCardDisplay = document.getElementsByClassName("rents")[28]
    rentsCardDisplay.style.display ="none"
    
    let waterCard = document.querySelector(".waterworks")
    
    let img = document.createElement("img")
    img.src = "./assets/faucet.png"
    let description = document.createElement("div")
    description.classList = "waterdescription"

   description.textContent = "Rent price is 4x the value of dice rolled " +
   "if one utility is owned and 8x the value of the dice rolled if two " +
   "utilities are owned "
    
   let landed = spacesArray[players.activePlayer.updatedlocation]
   
    img.classList = "faucet"
    waterCard.appendChild(description)
    waterCard.appendChild(img)

 


    if (landed.owner == players.activePlayer){
      return
    }

    

    if(landed.owner.utilities === 1){
      landed.rent = players.activePlayer.dice * 4
     
    }

    if (landed.owner.utilities === 2){
      landed.rent = players.activePlayer.dice * 8
    }

     
  }

}







   export const railRoadSettings = (railRoadIndex, spaceNumber) => {
       
      const RailRoadCards = document.getElementsByClassName("railroad")[railRoadIndex]
      RailRoadCards.textContent = ""
      let rentsCardDisplay = document.getElementsByClassName("rents")[spaceNumber]
      rentsCardDisplay.style.display ="none"

      let railroadDescription = document.createElement("div")
      railroadDescription.classList = "railroaddescription"

      let img = document.createElement("img")
      img.classList = "railroadmodalcard"
      img.src = "./assets/rr.gif"

      railroadDescription.textContent = " Rent with 1 railroad $25 " + 
      " Rent with 2 railroads $50 "+
      "Rent with 3 railroads $100 " + 
      "Rent with 4 railroads $200 "

      RailRoadCards.appendChild(railroadDescription)
      RailRoadCards.appendChild(img)
      

    

    }
    
   export  const goSettings = () => {
      modal.style.display = "none"
      updateAllCash()
      players.nameHighlight()
      
    }

   export  const FreeParking = () => {
      if (players.activePlayer.updatedlocation === 20){
        okbutton.style.display = " block"
        buttonYes.style.display = "none "
        buttonNo.style.display = "none "
        usermessage[0].textContent = "You have landed on Free Parking. Relax and take it easy for a while. "
        resetDisplay() 
      
      }
    }

    export const luxuryTax = () => {
      if (players.activePlayer.updatedlocation === 38){
        okbutton.style.display = " block"
        buttonYes.style.display = "none "
        buttonNo.style.display = "none "
        usermessage[0].textContent = "You have landed on Luxury Tax. You have been charged $100 "
        players.activePlayer.cash -= 100
        resetDisplay() 
      }
    }


export const setRailRoadPrices = () => {
  
  
  
  let landedOn = spacesArray[players.activePlayer.updatedlocation]
  let railRoadsArray = [ 
    spacesArray[5],
    spacesArray[15],
    spacesArray[25],
    spacesArray[35]
  ]

  

  for (let i = 0; i < railRoadsArray.length; i++){

    if(landedOn.owner.railroads === 1){
      railRoadsArray[i].rent = 25
        }
      

    if(landedOn.owner.railroads === 2){
  railRoadsArray[i].rent = 50
    }
  
    if(landedOn.owner.railroads === 3){
      railRoadsArray[i].rent = 100
    }
        
    if(landedOn.owner.railroads === 4){
        railRoadsArray[i].rent = 200
    }

  }








}