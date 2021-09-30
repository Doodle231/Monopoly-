
let DiceRolled = [];  
let playerTurn = document.getElementsByClassName("playerturn")[0]
let usermessage = document.getElementsByClassName("usermessage")
let prices = document.getElementsByClassName("price")
let names = document.getElementsByClassName("name")
let boardPiece = document.getElementsByClassName("boot")
let boardPiece2 = document.getElementsByClassName("car")
let modal = document.getElementsByClassName("modal")[0].style.display = "none"
let player1StatusMessage = document.getElementsByClassName("playerName1")[0]
let player2StatusMessage = document.getElementsByClassName("playerName2")[0]

let buttonYes = document.querySelector(".button-yes")





player1StatusMessage.innerHTML =  " Player1 information "
player2StatusMessage.innerHTML =  " Player2 information"

let player1dicerolled = document.getElementsByClassName("playerRolled1")[0]
playerTurn.innerHTML = " Player1's turn"


//  for updating the space names in the UI
let spacenamesUnordered= Array.from(names);
    const index = [9,8,7,6,5,4,3,2,1,0,19,18,17,16,15,14,13,12,11,
        10,29,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,39]
    const spaceNames = index.map(i => spacenamesUnordered[i])






// the house values here only handle the prices. Posession of the houses are stored on the player object 
const SpaceObjects = (price, name, rent , colorsetrent, house1rent, house2rent, 
  house3rent, house4rent, hotelrent) => {
    
    return { 
      price: price, 
      houses: 0,
      hotels: 0, 
      owner: "The bank",
      name:name, 
      rent: rent,
      colorsetrent:colorsetrent, 
      house1rent:house1rent, 
      house2rent:house2rent, 
      house3rent:house3rent, 
      house4rent:house4rent, 
      hotelrent:hotelrent, 
      
    
    }

  };

  const go = SpaceObjects(200,"go")
  const mediterennan = SpaceObjects(50, "mediternnean", 2, 4, 10, 30, 90, 160, 250)
  const communitychest = SpaceObjects(0,"Community Chest ", 0,0,0,0,0,0,0)
  const balticavenue = SpaceObjects(50, " Baltic Avenue " , 4, 8, 20, 60, 180, 320, 450)
  const incometax = SpaceObjects(-200,"Income Tax",0,0,0,0,0,0,0)
  const readingRailRoad = SpaceObjects(200, "Reading Railroad ", 25, 200, 25,50,100,200, 0)
  const orientalAvenue = SpaceObjects(100, " Oriental Avenue ", 6, 12, 30,90, 270,400,550 )
  const chance = SpaceObjects(0, " Chance ",0,0,0,0,0,0,0)
  const vermont = SpaceObjects(100, " Vermont Avenue ", 6, 12, 30, 90, 270, 400, 550)
  const vonnecticut = SpaceObjects(120, " Conneticut Avenue ",8, 16,40,100,300,450,600)
  const justVisiting = SpaceObjects(0, " Just Visiting",0,0,0,0,0,0,0)
  const stcharlesPlace = SpaceObjects(140, "St. Charles Place " , 10, 20, 50,150, 450, 625, 750 )
  const electricCompany = SpaceObjects(150, " Electric Company")
  const statesavenue = SpaceObjects(140, " States Avenue ", 10, 20, 50, 150, 450, 625, 750)
  const virginia = SpaceObjects(160, " Virgina Avenue ", 12, 24, 60, 180, 500, 700, 900)
  const pennRR = SpaceObjects(200, " Penn Railroad", 25, 200, 25,50,100,200, 0)
  const stJamesPlace = SpaceObjects(180, "St. James Place ", 14, 28,70,200, 550,750,950)
  const tenessee = SpaceObjects(180, " Tenessee Avenue", 14, 28, 70, 200,550,750, 950)
  const newYork = SpaceObjects(200, " New York Avenue", 16, 32, 80, 220, 600, 800, 1000)
  const freeParking = SpaceObjects(0, " Free Parking",0,0,0,0,0,0,0,)
  const kentucky = SpaceObjects(220, " Kentucky Avenue ", 18, 36, 90,250, 700, 875, 1050 )
  const indiana = SpaceObjects(220, " Indiana Avenue ", 18, 36, 90,250, 700, 875, 1050 )
  const illinois = SpaceObjects (220, " Illinois Avenue",300, 20, 400, 100, 300, 750, 925, 1100)
  const band0 = SpaceObjects(200, "B & O Railroad",25, 200, 25,50,100,200, 0)
  const atlantic = SpaceObjects(200," Atlantic Avenue " ,22, 44, 110,330, 800, 975, 1150 )
  const ventur = SpaceObjects(200, " Ventur Avenue " ,22, 44, 110,330, 800, 975, 1150)
  const waterworks = SpaceObjects(120, " Water Works ")
  const marvinGardens = SpaceObjects(240, " Marvin Gardens" ,24, 48, 120, 360, 850, 1025, 1200)
  const jail = SpaceObjects(0, "Jail",0,0,0,0,0,0,0)
  const pacific = SpaceObjects(300, " Pacific Avenue " , 26, 52, 130, 390, 900, 1100, 1275)
  const northCarolina = SpaceObjects(300, " North Carolina", 26, 52, 130, 390, 900, 1100, 1275)
  const pennsylvania = SpaceObjects(320, "Pennsylvania ", 28, 56, 150, 450, 1000, 1200, 1400)
  const shortLine = SpaceObjects(200, " Short Line RailRoad",25, 200, 25,50,100,200, 0)
  const parkPlace = SpaceObjects(350, " Park Place", 35, 70, 175, 500, 1100, 1300, 1500)
  const luxuryTax = SpaceObjects(-100," Luxury Tax",0,0,0,0,0,0,0 )
  const boardWalk = SpaceObjects(400, " Board Walk", 50, 100, 200, 600, 1400, 1700, 2000)
 
 
  let SpacesArray = [go, mediterennan, communitychest, balticavenue, incometax, readingRailRoad, 
  orientalAvenue, chance, vermont, vonnecticut, justVisiting, stcharlesPlace, electricCompany, statesavenue, virginia, 
  pennRR, stJamesPlace, communitychest, tenessee, newYork, freeParking, kentucky, chance, indiana, illinois, 
  band0, atlantic, ventur, waterworks, marvinGardens  ,jail, pacific, northCarolina,communitychest,  pennsylvania, shortLine, chance, parkPlace, 
  luxuryTax, boardWalk]


console.log(SpacesArray)

  const Players = (name, cash, property, items, ) => {

  return {
    name:name, 
    cash:cash, 
    property:property, 
    items: items, 
   
  moveplayer(){
    
      DiceRolled = 0; 
      let playerObject = this 
      let dice = Math.floor(Math.random() * 6) +1 * 2 
      let diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png';
      DiceRolled += dice;
    
  
    
       
      
     
      if (activePlayer === 0){
        
        player1.location.push(DiceRolled)
      } else if (activePlayer === 1 ){
        player2.location.push(DiceRolled)



      }
   
     if (activePlayer === 0){
       TotalRoll= player1.location.reduce (
        (previousvalue, currentValue) => previousvalue +
          currentValue )
        } else if (activePlayer === 1 ){
      TotalRoll= player2.location.reduce (
        (previousvalue, currentValue) => previousvalue +
          currentValue )
     }
  
          let remainder = TotalRoll % spaceNames.length
      if (TotalRoll > 39){ 
          TotalRoll = remainder}
      
          this.name.innerHTML = 
          spaceNames[TotalRoll].textContent 

          if (activePlayer === 0){
            spaceNames[TotalRoll].append(boardPiece[0])
          } else {
          
            spaceNames[TotalRoll].append(boardPiece2[0])
          
          }
        
        
          let landedOn = SpacesArray[TotalRoll]
      
          playerTurn.innerHTML = this.name + "s turn"
        
          usermessage[0].textContent = " You have landed on " + landedOn.name +
         ". It is currently owned by  " + landedOn.owner + 
        ".    Buy it for  " + landedOn.price + "? "
      
        if (landedOn.owner != "The bank"){

        
          
          usermessage[0].textContent = " Sorry, but you have landed on " + landedOn.name + 
        ". It is currently owned by  " + landedOn.owner + 
        "'s property. The rent is " + landedOn.price + "? "
        

      
      }
 
        


        let playerMoney = document.getElementsByClassName("cash")[0];
        playerMoney.textContent =  " Your cash balance is " + this.cash
       
    
           
      document.getElementsByClassName("modal")[0].style.display = "block"
      
      chanceCardmessage = document.getElementsByClassName("chancecards")[0]
      chanceCardmessage.style.display = " none"

      
      if (landedOn.name === chance.name){
      chanceCardmessage.style.display = "block"
      chanceCardmessage.innerHTML = " Go directly to jail. Do not pass go and do not collect $200" 
      TotalRoll = 10; 
      if (activePlayer === 0){
        spaceNames[TotalRoll].append(boardPiece[0])
        player1.location.splice(0, player1.location.length)
        player1.location.push(10)
        
      } else {
      
        spaceNames[TotalRoll].append(boardPiece2[0])
        player2.location.splice(0, player2.location.length)
        player1.location.push(10)
        
      }
      
    

    }
      
   
      
  
    buttonYes.addEventListener('click', function(){

          
          
         
        playerObject.cash = playerObject.cash - landedOn.price
   
       
        playerMoney.textContent = playerObject.name + "'s cash: " + playerObject.cash
        playerObject.property = {}
        playerObject.property = landedOn.name 
          
        landedOn.owner = playerObject.name
        
        let playerProperty = document.getElementsByClassName("property")[0]; 
        playerProperty.textContent = "Property Owned: " + playerObject.property
      
       
      
      
        
      
        document.getElementsByClassName("modal")[0].style.display = "none"
            
      }); 
    
    
      document.querySelector(".button-no").addEventListener('click', function(){
    
        document.getElementsByClassName("modal")[0].style.display = "none"
        

      })
  
      }  
    }
  }
  
const player1 = Players ("Joe", 1500, 0, 0, )  
const player2 = Players ("Frank", 1500, 0, 0, )  

player1["location"] = [0]
player2["location"] = [0]

activePlayer = 0; 
  
document.querySelector('.btn-roll').addEventListener('click', function() {
 
  
  if (activePlayer === 0){
    activePlayer = 1
  } else if 
  (activePlayer = 1){
    activePlayer = 0
  }


  if (activePlayer === 0){
    player1.moveplayer()
  } else {
    player2.moveplayer() 
  }

  
})






// closes entire dice roll function

