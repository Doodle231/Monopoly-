const names = document.getElementsByClassName("name")
const boardPiece = document.getElementsByClassName("booticonboard")[0]
const boardPiece2 = document.getElementsByClassName("cariconboard")[0]
const boardPiece3 = document.getElementsByClassName("dogiconboard")[0]
const boardPiece4 = document.getElementsByClassName("haticonboard")[0]


export const usermessage = document.getElementsByClassName("usermessage")
const okbutton = document.querySelector (".okay")
const buttonYes = document.querySelector(".button-yes")
const buttonNo = document.querySelector(".button-no")
export const rollButton =  document.querySelector('.btn-roll')
const cpuIsPlaying = false
const modal = document.getElementsByClassName("modal")[0]
const oneplayercash = document.getElementsByClassName("cash1")[0]
const threeplayercash = document.getElementsByClassName("cash3")[0]
const fourplayercash = document.getElementsByClassName("cash4")[0]
oneplayercash.textContent = " Cash: $1500 "  

const twoplayercash = document.getElementsByClassName("cash2")[0]

twoplayercash.textContent = "Cash: $ 1500"


import { character, visiting } from "./UniqueSpaces.js"
import {spacesArray} from "./spaceObjects.js"
 import {CloseModal, showModal} from "./displays.js"
import {SpaceObjects} from "./spaceObjects.js"
import { displayChanceCards } from "./UniqueSpaces.js"
import { communityCardSetting, incomeTaxSetting } from "./UniqueSpaces.js"
import { determineSmallCard } from "./monopoly.js"

const computerClickOk = () => {
  okbutton.click()
}

const computerClickNo= () => {

buttonNo.click() 

}

const computerClickYes= () => {
buttonYes.click() 
}



const delayedDiceRollPress = () => {
  rollButton.click() 
  
}


const computerClickEvent = () => {

console.log("ran")
setTimeout(delayedDiceRollPress,1000)
  




}


const changePlayer = () => {
            
  let boardPlayers = [player1, CPUPlayer, CPUPlayer2, CPUPlayer3]
  
  

  if (activePlayer === player1){
    activePlayer === CPUPlayer
  }
   
  if (activePlayer === CPUPlayer){
    activePlayer === CPUPlayer2
  }

  if (activePlayer === CPUPlayer2){
    activePlayer === CPUPlayer3
  }
   
  if (activePlayer === CPUPlayer3){
    activePlayer === player1
  }
  

}




let spacenamesUnordered= Array.from(names);
    const index = [9,8,7,6,5,4,3,2,1,0,19,18,17,16,15,14,13,12,11,
        10,29,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,39]
    const spaceNames = index.map(i => spacenamesUnordered[i])


export const Players = (name, cash, ) => {
   
    return {
      name:name, 
      cash:cash, 
      railroads:0,
      otherutility:0 ,
      hascolorset:false, 
      location: [], 
      propertyowned: [],
      updatedlocation:0,
      
      moveplayer(){
  
        let DiceRolled = 0; 
      
        let dice = Math.floor(Math.random() * 6) +1 
  
     console.log(activePlayer.name)
     
        DiceRolled += dice;
        
       this.location.push(DiceRolled)
     
     
      let TotalRoll= this.location.reduce ((previousvalue, currentValue) => { 
          return previousvalue + currentValue })
       
         let remainder = TotalRoll % spaceNames.length
        if (TotalRoll > 39){ 
            TotalRoll = remainder}
           
          
        
             this.updatedlocation = TotalRoll
             let landedOn = spacesArray[this.updatedlocation]
          
             const appendActivePlayer=() =>{
             
              if(activePlayer === player1){
                spaceNames[player1.updatedlocation].append(boardPiece)
                 
              }
              
              
              if(activePlayer === CPUPlayer){
                spaceNames[CPUPlayer.updatedlocation].append(boardPiece2)
                 
              }

              if(activePlayer === CPUPlayer2){
                spaceNames[CPUPlayer2.updatedlocation].append(boardPiece3)
                 
              }

              if (activePlayer === CPUPlayer3) {
                spaceNames[CPUPlayer3.updatedlocation].append(boardPiece4)
              }
            }
    
              
             
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
          
              twoplayercash.textContent = " Cash: $" + CPUPlayer.cash 
              threeplayercash.textContent = " Cash: $" + CPUPlayer2.cash 
              fourplayercash.textContent = " Cash: $" + CPUPlayer3.cash 
             
              // landedOn.owner = CPUPlayer.name 
                activePlayer.propertyowned.push(landedOn.name)
              
                determineSmallCard(activePlayer.updatedlocation)
            }
   
            if (landedOn.owner !== activePlayer.name){
             
              CPUPlayer.cash -= landedOn.rent
            }
     
            twoplayercash.textContent = " Cash: $" + CPUPlayer.cash 
            oneplayercash.textContent = " Cash: $ " + player1.cash 
            threeplayercash.textContent = "Cash: $ " + CPUPlayer2.cash
            fourplayercash.textContent = "Cash: $ "+ CPUPlayer3.cash
          
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
               

              usermessage[0].textContent = " You have landed on " + landedOn.name +
              ". It is currently owned by  " + landedOn.owner.name + ". $" + landedOn.rent +
              "  has been been taken out of your account"
              activePlayer.cash -= landedOn.rent 
         
              landedOn.owner.cash += landedOn.rent 
              
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
          
          
            
        
          
           if (activePlayer !== player1){
            console.log("switch player")
            switchPlayer() 
             nameHighlight
           
             
           }

       
       
          
           return this 
  
        },

          
        
    
      }
    }
  

    export const player1 = Players ("Player1", 1500, 0, 0, )  
    export const CPUPlayer = Players ("Cpu Player 1 ", 1500, 0, 0, ) 
    export const CPUPlayer2 =   Players ("Cpu Player 2 ", 1500, 0, 0, )
    export const CPUPlayer3 = Players ("Cpu Player 2 ", 1500, 0, 0, )
    
    /*
    export const player2= Players ("Bob", 1500, 0, 0, )  


    export const CPUPlayer= Object.create(player2)
    export const CPUPlayer2 = Object.create(player2)
    export const CPUPlayer3 = Object.create(player2)
   
    CPUPlayer2.name = "Emily"
    CPUPlayer3.name = "Frank"
*/

    export let activePlayer = player1

    


    let player1name = document.getElementsByClassName("player1")[0]
    let CPUPlayername = document.getElementsByClassName("player2")[0]
   

    export const nameHighlight = () => {
   
    
      if (activePlayer === player1){
        player1name.style.backgroundColor = "rgb(249, 231, 159 )"
       
    
    
      } else {
         player1name.style.backgroundColor = ""
       }
       if (activePlayer === CPUPlayer){
        CPUPlayername.style.backgroundColor = "rgb(249, 231, 159 )"
       
      } else {
         CPUPlayername.style.backgroundColor = ""
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
        
      }
 


         
    
      }

    