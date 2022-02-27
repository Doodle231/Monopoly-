const names = document.getElementsByClassName("name")
const boardPiece = document.getElementsByClassName("boot")
const boardPiece2 = document.getElementsByClassName("car")
export const usermessage = document.getElementsByClassName("usermessage")
const okbutton = document.querySelector (".okay")
const buttonYes = document.querySelector(".button-yes")
const buttonNo = document.querySelector(".button-no")
export const rollButton =  document.querySelector('.btn-roll')
const cpuIsPlaying = false
const modal = document.getElementsByClassName("modal")[0]
const oneplayercash = document.getElementsByClassName("cash1")[0]

oneplayercash.textContent = " Cash: $1500 "  

const twoplayercash = document.getElementsByClassName("cash2")[0]

twoplayercash.textContent = "Cash: $ 1500"



import {spacesArray} from "./spaceObjects.js"
 import {showModal} from "./displays.js"
import {SpaceObjects} from "./spaceObjects.js"
import { displayChanceCards } from "./displays.js"
import { clearCommunityCards, displayCommunityCards } from "./communityCardsSettings.js"
import { incomeTaxSetting } from "./UniqueSpaces.js"

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


setTimeout(delayedDiceRollPress, 1000)



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
      
        let dice = /*Math.floor(Math.random() * 6) +1 */ 4
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
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
                spaceNames[player1.updatedlocation].append(boardPiece[0])
                 
              }else {
              
                  spaceNames[CPUPlayer.updatedlocation].append(boardPiece2[0])
                }
              }
             
              appendActivePlayer() 
               showModal() 
  
             return this 
            
          },
  
  
        
        checkOwner(){
            let landedOn = spacesArray[activePlayer.updatedlocation]
            
            
            if (landedOn.name === "Community Chest"){
          
              displayCommunityCards() 
              if (activePlayer === CPUPlayer){
                modal.style.display = "none"
                switchPlayer()
                clearCommunityCards() 
              }
              return
            }
            if (landedOn.owner !== "The bank"){
               usermessage[0].textContent = " You have landed on " + landedOn.name +
               ". It is currently owned by  " + landedOn.owner + ". $" + landedOn.rent +
               "  has been been taken out of your account"
               activePlayer.cash -= landedOn.rent 
               inactivePlayer.cash += landedOn.rent 
               buttonNo.style.display = "none"
               buttonYes.style.display ="none"
              okbutton.style.display = "block"
              
              if (activePlayer = CPUPlayer){
                
              const modal = document.getElementsByClassName("modal")[0]
              modal.style.display = "none"
              switchPlayer() 
                
              }
                
                 }
                 
                 function vacantDisplay(){
                  usermessage[0].textContent = "You have landed on " + landedOn.name + "." +
                  "This property is vacant! " + 
                  " Do you want to buy it for "
                  + landedOn.price + "$ ?"
  
                  okbutton.style.display = "none"
                  buttonYes.style.display = "block"
                  buttonNo.style.display = "block "
                 }
                
                  console.log(spacesArray)
                


                 
       
                if (landedOn === SpaceObjects.chance){
                  displayChanceCards()
                  
                }
       
                if ( landedOn === SpaceObjects.jail){
                  displayJail() 
                 
                }
  
                if (landedOn.name === "Income Tax"){
                  incomeTaxSetting() 
                  const modal = document.getElementsByClassName("modal")[0]
                  modal.style.display = "none"
                  switchPlayer() 
                  return 
                }
                
                if (landedOn.owner === "The bank"){
                  vacantDisplay() 
                }
                
                
  
            twoplayercash.textContent = " Cash: $" + CPUPlayer.cash 
           oneplayercash.textContent = " Cash: $ " + player1.cash 
          
          return this 
  
        },

          
  
    
      }
    }
  

    export const player1 = Players ("Player1", 1500, 0, 0, )  
    export const player2= Players ("Player2", 1500, 0, 0, )  

    export const CPUPlayer= Object.create(player2)
   
    export let activePlayer = player1
    export let inactivePlayer = CPUPlayer


    let player1name = document.getElementsByClassName("playerName1")[0]
    let CPUPlayername = document.getElementsByClassName("playerName2")[0]
   

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
     
      if (activePlayer === player1){
       activePlayer = CPUPlayer
      
      } 
    
      
      
      else if
      (activePlayer === CPUPlayer){
        activePlayer = player1
      }
    
      if (activePlayer === player1){
    
       inactivePlayer ===CPUPlayer } 
        else if 
          (activePlayer === CPUPlayer){
            inactivePlayer = player1
          }
    
          if (activePlayer === CPUPlayer){
            computerClickEvent()
           
          }
      
         
        }
    
        