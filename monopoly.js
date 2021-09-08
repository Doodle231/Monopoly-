 let PlayerRoll, activePlayer, dice;
 
let DiceRolled = [];  


let playerLocation = [];
//console.log(playerLocation)
let space = document.getElementsByClassName("space");
let prices = document.getElementsByClassName("price")
let names = document.getElementsByClassName("name")



      

    

let spacenamesUnordered= Array.from(names);
    const index = [9,8,7,6,5,4,3,2,1,0,19,18,17,16,15,14,13,12,11,
        10,29,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,39]
    const spaceNames = index.map(i => spacenamesUnordered[i])
    

//class boardspaces {
   // constructor (name, price, owner, houses, location){
    //this.name = name
   // this.price = price 
    //this.owner = owner
   // this.houses = houses 
    //this.location = location 




TotalRoll = 0
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
  

//document.querySelector('#spaceCount-' + activePlayer).innerHTML = 
//spaceNames[TotalRoll].textContent


let remainder = TotalRoll % spaceNames.length
if (TotalRoll > 39 ) {
    
    console.log("the remainder is "+ remainder)}
console.log("player has rolled a " + TotalRoll)

}); 









