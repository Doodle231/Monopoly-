

import { updateAllCash } from "./displayhelpers/updateallcash.js"
import { character, FreeParking, visiting } from "./uniquecards/UniqueSpaces.js"
import { SpaceObjects, spacesArray, } from "./spaceObjects.js"
 import {CloseModal, showModal} from "./displays.js"
import { displayChanceCards, communityCardSetting, incomeTaxSetting } from "./uniquecards/UniqueSpaces.js"

import { appendActivePlayer, grabIconChoice } from "./setIcons.js"
import { ElectricCompanySettings, railRoadSettings, goSettings } from "./uniquecards/UniqueSpaces.js"
import { jail } from "./uniquecards/UniqueSpaces.js"
import { setRailRoadPrices } from "./uniquecards/UniqueSpaces.js"
import { appendSmallCardtoDisplay } from "./buttonhandlers.js"
import { luxuryTax } from "./uniquecards/UniqueSpaces.js"
import { waterWorksSettings } from "./uniquecards/UniqueSpaces.js"
const names = document.getElementsByClassName("name")
export const spaces = document.getElementsByClassName("space")



export const usermessage = document.getElementsByClassName("usermessage")
const okbutton = document.querySelector (".okay")
const buttonYes = document.querySelector(".button-yes")
const buttonNo = document.querySelector(".button-no")
export const rollButton =  document.querySelector('.btn-roll')

const modal = document.getElementsByClassName("modal")[0]







const delayedDiceRollPress = () => {

  rollButton.click() 
  
}


const computerClickEvent = () => {

  nameHighlight()
setTimeout(delayedDiceRollPress,500)


}

export let spacenamesUnordered= Array.from(names);
    const index = [9,8,7,6,5,4,3,2,1,0,19,18,17,16,15,14,13,12,11,
        10,29,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,39]
    export const spaceNames = index.map(i => spacenamesUnordered[i])


export const Players = (name, cash, ) => {
   
    return {
      name:name, 
      cash:cash, 
      railroads:0,
      utilities:0, 
      location: [], 
      propertyowned: [],
      updatedlocation:0,
      icon:null, 
      dice:0,
      turnsTaken:0, 
      hotelsOwned:0, 
      housesOwned:0, 
      
      cardCounts:{
      brownCards:0, 
      lightBlueCards:0, 
      pinkCards:0, 
      orangeCards:0, 
      redCards:0, 
      yellowCards:0, 
      greenCards:0, 
      blueCards:0, 
      },

      cardSets: {
       brownSet:false, 
       lightBlueSet:false, 
       pinkSet:false, 
       orangeSet:false, 
       redSet:false, 
       yellowSet:false, 
       greenSet:false, 
       darkBlueSet:false, 
      },


      
      moveplayer(){
       
        player1.cardSets.brownSet = true; 
       
     
        const propertyCards = document.getElementsByClassName("propertycards")
        const auctionCards = document.getElementsByClassName("auctionpropertycards")
        for (let i = 0; i < propertyCards.length; i++) {
          propertyCards[i].style.display = "none"
          auctionCards[i].style.display ="none"
          
           }


           


           
       
        let DiceRolled = 0; 
      
        this.dice =  /*Math.floor(Math.random() * 12) + */ 1 
  

       
        this.turnsTaken += 1 

   
        DiceRolled += this.dice;
        
       this.location.push(DiceRolled)
     
     
      let TotalRoll= this.location.reduce ((previousvalue, currentValue) => { 
          return previousvalue + currentValue })
       
         let remainder = TotalRoll % spaceNames.length
        
         if (TotalRoll > 39){ 
         
        this.cash += 200
            TotalRoll = remainder}
           
          

            

        
             this.updatedlocation = TotalRoll
             let landedOn = spacesArray[this.updatedlocation]
          

             let spacenamesUnordered= Array.from(spaces);
             
             const highlightLandedSpace = () => {
             const index = [9,8,7,6,5,4,3,2,1,0,19,18,17,16,15,14,13,12,11,
                 10,29,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,39]
             
             const spaceNamesDisplays = index.map(i => spacenamesUnordered[i])
             
             
             if (activePlayer === player1){
            
             for (let i = 0; i < spaceNamesDisplays.length; i++) {
             spaceNamesDisplays[i].style.backgroundColor = ""
             
            }

             let player1Location =  spaceNamesDisplays[player1.updatedlocation]
              
             player1Location.style.backgroundColor = "rgb(247, 244, 202 )"
            
            
            }
            
          }
            
            highlightLandedSpace()

            appendActivePlayer()
            ElectricCompanySettings()
            waterWorksSettings()
    
            if (this.updatedlocation === 5 ){
          
              railRoadSettings(0,5)
            }
            
            if (this.updatedlocation === 10 ){
        
              railRoadSettings(1,10)
            }

            if (this.updatedlocation === 15 ){
           
              railRoadSettings(2,15)
            }
            if (this.updatedlocation === 25 ){
         
              railRoadSettings(3,25)
            }
          
                        

          


    
               showModal() 
  
          
          
             return this 
            
          },
  
  
        
        checkOwner(){
            
      


          let landedOn = spacesArray[activePlayer.updatedlocation]
            //setup default displays 
          
            setRailRoadPrices()
           

         
            let cpuPlayerHistory = null
            if (activePlayer === player1){
              let player1History = document.querySelector(".player1history")
              
  
            }
          
            if (activePlayer === CPUPlayer){
             cpuPlayerHistory = document.querySelector(".cpuplayerhistory")
              
            }
          
            if (activePlayer === CPUPlayer2){
             cpuPlayerHistory = document.querySelector(".cpuplayer2history")
              
            }
          
            if (activePlayer === CPUPlayer3){
             cpuPlayerHistory = document.querySelector(".cpuplayer3history")
             
            }
          
          


            if (activePlayer !== player1){
              modal.style.display = "none"
            }

          
            if (activePlayer === player1){
              modal.style.display = "block"
            }

            if (landedOn.spaceType === "unique" || landedOn.owner !== activePlayer) {
              okbutton.style.display = "block"
              buttonNo.style.display = "none"
              buttonYes.style.display = "none"  
            }
          

           if (landedOn.owner === "The bank" && landedOn.owner !== "unique"){
           okbutton.style.display = "none"
           buttonNo.style.display = ''
           buttonYes.style.display = ''
           }
          
           if (landedOn.spaceType === "unique" && activePlayer != player1){
             cpuPlayerHistory.textContent = activePlayer.name + "has landed on " + landedOn.name
           }
           
          

            // cpu buy actions
            if (activePlayer !== player1 ){
           
             
              if (landedOn.owner ==="The bank" && landedOn.spaceType !== "unique"){
                
                if (activePlayer.cash < landedOn.price ){
                  return
                }
           
                activePlayer.cash -= landedOn.price
              
                cpuPlayerHistory.textContent = activePlayer.name + "has purchased " + landedOn.name
          
                landedOn.owner = activePlayer
                activePlayer.propertyowned.push(landedOn.name)
              
                appendSmallCardtoDisplay()
            
            
                  if (activePlayer.updatedlocation === 12 || activePlayer.updatedlocation === 28){
                    this.utilities += 1 
                  }
            
              }
   


          }

            // vacant check 
            if (landedOn.owner === "The bank" && landedOn.spaceType !== "unique"){
              usermessage[0].textContent = " You have landed on  " + landedOn.name + "." +
              "This property is vacant!  Would you like to purchase it for $ " + landedOn.price + 
              "?"
              character.style.display = "none"
            }

            visiting()
            luxuryTax()
           

            if (landedOn.name === "go"){
             goSettings()
            }

           // other player check
            if (landedOn.owner !== activePlayer && landedOn.spaceType !== "unique" ){
            
              if ( landedOn.owner !== "The bank"){
                activePlayer.cash -= landedOn.rent 
                 
              landedOn.owner.cash += landedOn.rent 

        
             
             if (activePlayer === player1) {
               usermessage[0].textContent = " You have landed on " + landedOn.name +
              ". It is currently owned by  " + landedOn.owner.name + ". $" + landedOn.rent +
              "  has been been taken out of your account"
              } else {
               cpuPlayerHistory.textContent = activePlayer.name + " has landed on " + landedOn.name + ". $ " +
                landedOn.rent + " has been deducted"
            
              }
              
            

             CloseModal() 
             character.style.display = "none"
              buttonNo.style.display = "none"
              buttonYes.style.display ="none"
             okbutton.style.display = "block"
              }
            }
            
           communityCardSetting()
           incomeTaxSetting()
           displayChanceCards() 
          FreeParking()
           updateAllCash()
           jail()
            
        
          
           if (activePlayer !== player1){
        
            switchPlayer() 
             nameHighlight
           
             
           }

       
           this.checkforcolorset()
          
           return this 
  
        },

          
        checkforcolorset(){

  
  
            return this 
         },



        }

    
      }
    
  
    export const player1 = Players ("Player1", 1500, 0, 0, )  
    export const CPUPlayer = Players ("Cpu Player 1 ", 1500, 0, 0, ) 
    export const CPUPlayer2 =   Players ("Cpu Player 2 ", 1500, 0, 0, )
    export const CPUPlayer3 = Players ("Cpu Player 3 ", 1500, 0, 0, )
    
    

    export let activePlayer = player1

    


    let player1name = document.getElementsByClassName("player1")[0]
    let CPUPlayername2 = document.getElementsByClassName("player2")[0]
    let CPUPlayername3 = document.getElementsByClassName("player3")[0]
     let CPUPlayername4 = document.getElementsByClassName("player4")[0]

    export const nameHighlight = () => {
   
    
      if (activePlayer === player1){
        player1name.style.backgroundColor = ""
       } else {
         player1name.style.backgroundColor = ""
       }
       
       if (activePlayer === CPUPlayer){
        CPUPlayername2.style.backgroundColor = ""
      } else {
         CPUPlayername2.style.backgroundColor = ""
       }
    
       if (activePlayer === CPUPlayer2){
        CPUPlayername3.style.backgroundColor = ""
       } else {
         CPUPlayername3.style.backgroundColor = ""
       }
       
       if (activePlayer === CPUPlayer3){
       CPUPlayername4.style.backgroundColor = ""
      } else {
         CPUPlayername4.style.backgroundColor = ""
       }


    
    }

    export const switchPlayer = () => {
     
    
     if (activePlayer === player1){
        activePlayer = CPUPlayer
         computerClickEvent()
        return
       
      }
      
      if (activePlayer === CPUPlayer){
       
  
        activePlayer = CPUPlayer2
        computerClickEvent()
        return
      }
   
      if (activePlayer === CPUPlayer2){
      
        activePlayer = CPUPlayer3
        computerClickEvent()
        return
      }

      if (activePlayer === CPUPlayer3){
      
        activePlayer = player1
        nameHighlight()
      }
 

    
         
    
      }

    