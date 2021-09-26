
 

 
let DiceRolled = [];  

// these values are totaled and reset witin the dice roll function
let playerLocation = [0];
let player2Location = [0];




let usermessage = document.getElementsByClassName("usermessage")

let prices = document.getElementsByClassName("price")
let names = document.getElementsByClassName("name")
let boardPiece = document.getElementsByClassName("boot")

let modal = document.getElementsByClassName("modal")[0].style.display = "none"






//  for updating the space names in the UI
let spacenamesUnordered= Array.from(names);
    const index = [9,8,7,6,5,4,3,2,1,0,19,18,17,16,15,14,13,12,11,
        10,29,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,39]
    const spaceNames = index.map(i => spacenamesUnordered[i])





const SpaceObjects = (price, id, name) => {
    
    return { 
      price: price, 
      houses: 0,
      hotels: 0, 
      owner: "The bank",
      id:id,
      name:name, 
    
    }

  };

  const go = SpaceObjects(200,0, "go")
  const mediterennan = SpaceObjects(50,1, "mediternnean")
  const communitychest = SpaceObjects(0,2,"communitychest")
  const balticavenue = SpaceObjects(50,3, " balticavenue")
  const incometax = SpaceObjects(-200,4, "incometax")
  const readingRailRoad = SpaceObjects(200,5, "readingrailroad")
  const OrientalAvenue = SpaceObjects(100,6, " Oriental Avenue ")
    

  let SpacesArray = [go, mediterennan, communitychest, balticavenue, incometax, readingRailRoad, OrientalAvenue]


    class player {
        constructor (name, cash, property,  ){
    this.name = name 
    this.cash = cash 
    this.property = property 
    this.location = playerLocation
    
     }
    }

    TotalRoll = 0
    PlayerRoll = 0; 
    let activePlayer = 0
    

  
    const player1 = new player("Player1", 1500, "No property is currently owned")
    const player2 = new player ("Player2", 1500, "No property is currently owned")
  
    let playerMoney = document.getElementsByClassName("cash")[0];
    playerMoney.textContent = " player 1 cash: " + player1.cash
  
    let playerProperty = document.getElementsByClassName("property")[0]; 
    playerProperty.textContent =  player1.property 

   

    
   






document.querySelector('.btn-roll').addEventListener('click', function() {
DiceRolled = 0; 


let dice = Math.floor(Math.random() * 6) +1; 
let diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'block';
diceDOM.src = 'dice-' + dice + '.png';
DiceRolled += dice;



let player1Action = function(){

document.querySelector('#start-' + activePlayer).innerHTML = DiceRolled;
playerLocation.push(DiceRolled); 


let TotalRoll = playerLocation.reduce(
    (accumulator, currentValue) => accumulator + currentValue); 

    let remainder = TotalRoll % spaceNames.length
if (TotalRoll > 39){ 
    TotalRoll = remainder}

    document.querySelector('#spaceCount-' + activePlayer).innerHTML = 
    spaceNames[TotalRoll].textContent 
    
    spaceNames[TotalRoll].append(boardPiece[0])
   
   
    document.getElementsByClassName("modal")[0].style.display = "block";
    
    
  
    let landedOn = SpacesArray[TotalRoll]

  usermessage[0].textContent = " This property is currently owned by  " + landedOn.owner + 
  "  Would you like to purchase this property for  " + landedOn.price
  

  
  document.getElementsByClassName("modal")[0].style.display = "none"
 
  playerMoney.textContent = " player 1 cash: " + player1.cash
 player1.property = landedOn.name 
 
 
  
 document.getElementsByClassName("modal")[0].style.display = "none"




document.querySelector(".button-yes").addEventListener('click', function(){

  

  player1.cash = player1.cash -landedOn.price 
  
   
  
 
  playerMoney.textContent = " player 1 cash: " + player1.cash
 player1.property = landedOn.name 
 

         }); 
}


   player1Action()


// closes entire dice roll function
  })