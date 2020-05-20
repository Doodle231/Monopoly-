 let PlayerRoll, activePlayer, dice;
 
let DiceRolled = [];  


let playerLocation = [];


console.log(playerLocation)




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
    
   
document.querySelector('#spaceCount-' + activePlayer).innerHTML =TotalRoll;






}); 










space = document.querySelectorAll('.space'); 








const spacesCollection = document.querySelectorAll('.space');
let spacesArr = Array.from(spacesCollection);

spacesArr.forEach(function () {

})






