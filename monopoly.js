 let PlayerRoll, activePlayer, dice;
 
let DiceRolled = [];  


let playerLocation = [];
let space = document.getElementsByClassName("space");
let prices = document.getElementsByClassName("price")
//let names = document.getElementsByClassName("name")


function printboardspaces(){
    var length = document.getElementsByClassName("name").length;

    for(var i = 0; i < length; i++){
         console.log(document.getElementsByClassName("name")[i].innerHTML);
    }
}

printboardspaces()

PlayerRoll = 0; 
activePlayer = 0; 

document.querySelector('.btn-roll').addEventListener('click', function() {
DiceRolled = 0; 


let dice = Math.floor(Math.random() * 6) +1; 
let diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'block';
diceDOM.src = 'dice-' + dice + '.png';

DiceRolled += dice;
document.querySelector('#start-' + activePlayer).innerHTML = DiceRolled;
playerLocation.push(DiceRolled); 

let TotalRoll = playerLocation.reduce(
    (accumulator, currentValue) => accumulator + currentValue); 
  

    
document.querySelector('#spaceCount-' + activePlayer).innerHTML = TotalRoll





}); 











space = document.querySelectorAll('.space'); 


const spacesCollection = document.querySelectorAll('.space');
let spacesArr = Array.from(spacesCollection);

spacesArr.forEach(function () {

    
   
    


})




