
 



// these will be reset within the player object and pushed again as needed//

//let playerLocation = [0,0]
let DiceRolled = [];  
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

  activePlayer = 0; 

  const Players = (name, cash, property, items) => {
  

  return {
    name:name, 
    cash:cash, 
    property:property, 
    items: items, 
    
  moveplayer(){
     
      DiceRolled = 0; 
      let playerObject = this 
      let dice = Math.floor(Math.random() * 6) +1; 
      let diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png';
      DiceRolled += dice;

      let playerLocation = [0]



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
        
          let landedOn = SpacesArray[TotalRoll]
      
        usermessage[0].textContent = " This property is currently owned by  " + landedOn.owner + 
        "  Would you like to purchase this property for  " + landedOn.price
      
        let playerMoney = document.getElementsByClassName("cash")[0];
        playerMoney.textContent =  " Your cash balance is " + this.cash
      
        let playerProperty = document.getElementsByClassName("property")[0]; 
        playerProperty.textContent =  this.property 

      
      document.getElementsByClassName("modal")[0].style.display = "block"
       
    ///////////////////////
      


        document.querySelector(".button-yes").addEventListener('click', function(){


        playerObject.cash = playerObject.cash - landedOn.price
   
       
        playerMoney.textContent = " player 1 cash: " + playerObject.cash
        playerObject.property = []
        playerObject.property.push(landedOn.name)
          
        landedOn.owner = playerObject.name
         
      
      document.getElementsByClassName("modal")[0].style.display = "none"
      
       
      
      }); 
    }
   }
  }  /////
        
        
      
   
  


const player1 = Players ("Joe", 1500, 0, 0 )  
const player2 = Players ("Frank", 1500, 0, 0 )  
  //const player1 = new Player( 1500, "No property is currently owned")
  //const player2 = new Player ( 1500, "No property is currently owned")

  
  
document.querySelector('.btn-roll').addEventListener('click', function() {

player2.moveplayer()





})





// closes entire dice roll function

