const names = document.getElementsByClassName("name")
export const spaces = document.getElementsByClassName("space")

const cpuHistory = document.getElementsByClassName("historycontent")[0]
export const usermessage = document.getElementsByClassName("usermessage")
const okbutton = document.querySelector (".okay")
const buttonYes = document.querySelector(".button-yes")
const buttonNo = document.querySelector(".button-no")
export const rollButton =  document.querySelector('.btn-roll')

const modal = document.getElementsByClassName("modal")[0]

import { updateAllCash } from "./displayhelpers/updateallcash.js"
import { character, visiting } from "./uniquecards/UniqueSpaces.js"
import {mediterennan, SpaceObjects, spacesArray} from "./spaceObjects.js"
 import {CloseModal, showModal} from "./displays.js"
import { displayChanceCards, communityCardSetting, incomeTaxSetting } from "./uniquecards/UniqueSpaces.js"
import { determineSmallCard } from "./main.js"
import { appendActivePlayer, grabIconChoice } from "./setIcons.js"


const delayedDiceRollPress = () => {
  rollButton.click() 
  
}


const computerClickEvent = () => {

  nameHighlight()
setTimeout(delayedDiceRollPress,2000)


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
      otherutility:0 ,
      location: [], 
      propertyowned: [],
      updatedlocation:0,
      icon:null, 
      
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
     
      

        let DiceRolled = 0; 
      
        let dice = /*Math.floor(Math.random() * 6) +1 */1
  
        
       console.log(player1)
     
        DiceRolled += dice;
        
       this.location.push(DiceRolled)
     
     
      let TotalRoll= this.location.reduce ((previousvalue, currentValue) => { 
          return previousvalue + currentValue })
       
         let remainder = TotalRoll % spaceNames.length
        if (TotalRoll > 39){ 
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
          


               showModal() 
  
          
          
             return this 
            
          },
  
  
        
        checkOwner(){
            
       
          let landedOn = spacesArray[activePlayer.updatedlocation]
            //setup default displays 
          

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
          

           
          

            // cpu actions
            if (activePlayer !== player1 ){
              if (landedOn.owner ==="The bank" && landedOn.spaceType !== "unique"){
              activePlayer.cash -= landedOn.price
              
           cpuHistory.textContent = activePlayer.name + "Has purchased" + landedOn.name

              // landedOn.owner = CPUPlayer.name 
                activePlayer.propertyowned.push(landedOn.name)
              
                determineSmallCard(activePlayer.updatedlocation)
            }
   
            if (landedOn.owner !== activePlayer.name){
          
              activePlayer.cash -= landedOn.rent
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
         
            // check for unique properties 
            if (landedOn.spaceType === "unique"){
              
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
                cpuHistory.textContent = activePlayer.name + "has landed on " + landedOn.name + "." +
                landedOn.rent + "has been deducted"
            
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
           updateAllCash()
          
            
        
          
           if (activePlayer !== player1){
        
            switchPlayer() 
             nameHighlight
           
             
           }

       
       
          
           return this 
  
        },

          
        checkforcolorset(){

  
               

          for (let i = 0; i< this.propertyowned.length; i++){
          
              console.log(this.propertyowned[i].name)

            if ( this.propertyowned[i].name.includes("mediternnean")) {
            this.cardCounts.brownCards += 1 
          } 
           if (this.propertyowned[i].name.includes ("Baltic Avenue")){
            this.cardCounts.brownCards += 1 
            
           }
          
        
          if (this.cardCounts.brownCards  === 2){
            this.cardSets.brownSet = true
          }
      
        

        
          if ( this.propertyowned[i].name.includes("Oriental Avenue")) {
            this.cardCounts.lightBlueCards +=1
          }
           if ( this.propertyowned[i].name.includes ("Vermont Avenue")){
            this.cardCounts.lightBlueCards +=1
           }

           if (this.propertyowned[i].name.includes ( "Conneticut Avenue")){
            this.cardCounts.lightBlueCards +=1
          
          }
          
          if (this.cardCounts.lightBlueCards === 3){
           this.cardSets.lightBlueSet = true;
          }
          


          
          if ( this.propertyowned[i].name.includes("St. Charles Place")) {
          this.cardCounts.pinkCards += 1 
          } 
           
          if (this.propertyowned[i].name.includes ("States Avenue")){
            this.cardCounts.pinkCards += 1 
          }
           
          if (this.propertyowned[i].name.includes ("Virgina Avenue")){
            this.cardCounts.pinkCards += 1 
          
          }
          
          if (this.cardCounts.pinkCards === 3){
            this.cardSets.pinkSet = true; 
          }
          
        
          
          if ( this.propertyowned[i].name.includes("St. James Place")){
            this.cardCounts.orangeCards += 1 
          }
          
          
          if(this.propertyowned[i].name.includes ("Tenessee Avenue")){
            this.cardCounts.orangeCards += 1 
          }

          if ( this.propertyowned[i].name.includes ("New York Avenue")){
            this.cardCounts.orangeCards += 1 
          }
        
          if (this.cardCounts.orangeCards === 3){
            this.cardSets.orangeSet = true; 
          }

          ////
          
        
          if ( this.propertyowned[i].name.includes("Kentucky Avenue")){
            this.cardCounts.redCards += 1 
          }
          
          
          if(this.propertyowned[i].name.includes ("Indiana Avenue")){
            this.cardCounts.redCards += 1 
          }

          if ( this.propertyowned[i].name.includes ("Illinois Avenue")){
            this.cardCounts.redCards += 1 
          }
        
          if (this.cardCounts.redCards === 3){
            this.cardSets.redSet = true; 
          }
          
          //
          
          if ( this.propertyowned[i].name.includes("Atlantic Avenue")){
            this.cardCounts.yellowCards += 1 
          }
          
          
          if(this.propertyowned[i].name.includes ("Ventur Avenue")){
            this.cardCounts.yellowCards += 1 
          }

          if ( this.propertyowned[i].name.includes ("Marvin Gardens" )){
            this.cardCounts.yellowCards += 1 
          }
        
          if (this.cardCounts.yellowCards === 3){
            this.cardSets.yellowSet = true; 
          }
          
        ///////

        if ( this.propertyowned[i].name.includes(" Pacific Avenue " )){
          this.cardCounts.greenCards += 1 
        }
        
        
        if(this.propertyowned[i].name.includes (" North Carolina")){
          this.cardCounts.greenCards += 1 
        }

        if ( this.propertyowned[i].name.includes ("Pennsylvania " )){
          this.cardCounts.greenCards += 1 
        }
      
        if (this.cardCounts.greenCards === 3){
          this.cardSets.greenSet = true; 
        }
        
        /////
        if(this.propertyowned[i].name.includes (" Park Place")){
          this.cardCounts.blueCards += 1 
        }

        if ( this.propertyowned[i].name.includes (" Board Walk" )){
          this.cardCounts.blueCards += 1 
        }
      
        if (this.cardCounts.greenCards === 2){
          this.cardSets.darkBlueSet = true; 
        }


        Object.values(this.cardset).forEach(val => console.log(val));





      }


        
         
          
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
        player1name.style.backgroundColor = "rgb(249, 231, 159 )"
       } else {
         player1name.style.backgroundColor = ""
       }
       
       if (activePlayer === CPUPlayer){
        CPUPlayername2.style.backgroundColor = "rgb(249, 231, 159 )"
      } else {
         CPUPlayername2.style.backgroundColor = ""
       }
    
       if (activePlayer === CPUPlayer2){
        CPUPlayername3.style.backgroundColor = "rgb(249, 231, 159 )"
       } else {
         CPUPlayername3.style.backgroundColor = ""
       }
       
       if (activePlayer === CPUPlayer3){
       CPUPlayername4.style.backgroundColor = "rgb(249, 231, 159 )"
      } else {
         CPUPlayername4.style.backgroundColor = ""
       }


    
    }

    export const switchPlayer = () => {
     
    
     //let activePlayersLoop = [player1, CPUPlayer, CPUPlayer2, CPUPlayer3]
 

    
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

    