
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

const chanceCards = document.querySelector("chancecards"); 



player1StatusMessage.innerHTML =  " Player1 information "
player2StatusMessage.innerHTML =  " Player2 information"

let player1dicerolled = document.getElementsByClassName("playerRolled1")[0]
playerTurn.innerHTML = " Player1's turn"


//  for updating the space names in the UI
let spacenamesUnordered= Array.from(names);
    const index = [9,8,7,6,5,4,3,2,1,0,19,18,17,16,15,14,13,12,11,
        10,29,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,39]
    const spaceNames = index.map(i => spacenamesUnordered[i])







const SpaceObjects = (price, name, rent , colorsetrent, house1rent, house2rent, 
  house3rent, house4rent, hotelrent, eachhousecost) => {
    
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
      eachhousecost:eachhousecost, 
      
    
    }

  };

  const go = SpaceObjects(200,"go", 0, 0, 0, 0, 0, 0, 0, 0)
  const mediterennan = SpaceObjects(50, "mediternnean", 2, 4, 10, 30, 90, 160, 250,50)
  const communitychest = SpaceObjects(0,"Community Chest ", 0,0,0,0,0,0,0)
  const balticavenue = SpaceObjects(50, " Baltic Avenue " , 4, 8, 20, 60, 180, 320, 450,50)
  const incometax = SpaceObjects(-200,"Income Tax",0,0,0,0,0,0,0)
  const readingRailRoad = SpaceObjects(200, "Reading Railroad ", 25, 200, 25,50,100,200, 0)
  const orientalAvenue = SpaceObjects(100, " Oriental Avenue ", 6, 12, 30,90, 270,400,550,50 )
  const chance = SpaceObjects(0, " Chance ",0,0,0,0,0,0,0)
  const vermont = SpaceObjects(100, " Vermont Avenue ", 6, 12, 30, 90, 270, 400, 550,50)
  const connecticut = SpaceObjects(120, " Conneticut Avenue ",8, 16,40,100,300,450,600,50)
  const justVisiting = SpaceObjects(0, " Just Visiting",0,0,0,0,0,0,0)
  const stcharlesPlace = SpaceObjects(140, "St. Charles Place " , 10, 20, 50,150, 450, 625, 750,100 )
  const electricCompany = SpaceObjects(150, " Electric Company")
  const statesavenue = SpaceObjects(140, " States Avenue ", 10, 20, 50, 150, 450, 625, 750,100)
  const virginia = SpaceObjects(160, " Virgina Avenue ", 12, 24, 60, 180, 500, 700, 900,100)
  const pennRR = SpaceObjects(200, " Penn Railroad", 25, 200, 25,50,100,200, 0)
  const stJamesPlace = SpaceObjects(180, "St. James Place ", 14, 28,70,200, 550,750,950,100)
  const tenessee = SpaceObjects(180, " Tenessee Avenue", 14, 28, 70, 200,550,750, 950,100)
  const newYork = SpaceObjects(200, " New York Avenue", 16, 32, 80, 220, 600, 800, 1000,100)
  const freeParking = SpaceObjects(0, " Free Parking",0,0,0,0,0,0,0,)
  const kentucky = SpaceObjects(220, " Kentucky Avenue ", 18, 36, 90,250, 700, 875, 1050,150 )
  const indiana = SpaceObjects(220, " Indiana Avenue ", 18, 36, 90,250, 700, 875, 1050,150 )
  const illinois = SpaceObjects (220, " Illinois Avenue",300, 20, 400, 100, 300, 750, 925, 1100,150)
  const band0 = SpaceObjects(200, "B & O Railroad",25, 200, 25,50,100,200, 0)
  const atlantic = SpaceObjects(200," Atlantic Avenue " ,22, 44, 110,330, 800, 975, 1150,150 )
  const ventur = SpaceObjects(200, " Ventur Avenue " ,22, 44, 110,330, 800, 975, 1150,150)
  const waterworks = SpaceObjects(120, " Water Works ")
  const marvinGardens = SpaceObjects(240, " Marvin Gardens" ,24, 48, 120, 360, 850, 1025, 1200,150)
  const jail = SpaceObjects(0, "Jail",0,0,0,0,0,0,0)
  const pacific = SpaceObjects(300, " Pacific Avenue " , 26, 52, 130, 390, 900, 1100, 1275,200)
  const northCarolina = SpaceObjects(300, " North Carolina", 26, 52, 130, 390, 900, 1100, 1275,200)
  const pennsylvania = SpaceObjects(320, "Pennsylvania ", 28, 56, 150, 450, 1000, 1200, 1400,200)
  const shortLine = SpaceObjects(200, " Short Line RailRoad",25, 200, 25,50,100,200, 0)
  const parkPlace = SpaceObjects(350, " Park Place", 35, 70, 175, 500, 1100, 1300, 1500,200)
  const luxuryTax = SpaceObjects(-100," Luxury Tax",0,0,0,0,0,0,0 )
  const boardWalk = SpaceObjects(400, " Board Walk", 50, 100, 200, 600, 1400, 1700, 2000,200)
 
 
  let SpacesArray = [go, mediterennan, communitychest, balticavenue, incometax, readingRailRoad, 
  orientalAvenue, chance, vermont, connecticut, justVisiting, stcharlesPlace, electricCompany, statesavenue, virginia, 
  pennRR, stJamesPlace, communitychest, tenessee, newYork, freeParking, kentucky, chance, indiana, illinois, 
  band0, atlantic, ventur, waterworks, marvinGardens  ,jail, pacific, northCarolina,communitychest,  pennsylvania, shortLine, chance, parkPlace, 
  luxuryTax, boardWalk]



  const Players = (name, cash,  items, ) => {

  return {
    name:name, 
    cash:cash, 
    items: items, 
   
  moveplayer(){
    
      DiceRolled = 0; 
      let playerObject = this 
      let dice = Math.floor(Math.random() * 6) +1 
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
        
          

          this.cash += landedOn.rent 
          usermessage[0].textContent = " You have landed on " + landedOn.name + 
        ". It is currently owned by  " + landedOn.owner + " . "
           + " The cash amount of " + landedOn.rent + " has been taken from your account " 
           
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
      
        let brownColorSet = false; 
    if ( this.properties.includes(balticavenue) && 
       this.properties.includes (mediterennan)){
         brownColorSet = true;
        
      
    }
    
     
    let lightBlueSet = false; 
    if ( this.properties.includes(orientalAvenue) && 
       this.properties.includes (vermont)&& 
       this.properties.includes (connecticut)){
         lightBlueSet = true;
      
    }

  
    let pinkSet = false; 
    if ( this.properties.includes(stcharlesPlace) && 
       this.properties.includes (virginia)&& 
       this.properties.includes (statesavenue)){
        pinkSet = true;
      
    }

  
    let orangeSet = false; 
    if ( this.properties.includes(stJamesPlace) && 
       this.properties.includes (tenessee)&& 
       this.properties.includes (newYork)){
        orangeSet = true;
      
    }
  
    let redSet = false; 
    if ( this.properties.includes(indiana) && 
       this.properties.includes (illinois)&& 
       this.properties.includes (kentucky)){
        redSet = true;
      
    }

    let yellowSet = false; 
    if ( this.properties.includes(atlantic) && 
       this.properties.includes (ventur)&& 
       this.properties.includes (marvinGardens)){
         yellowSet = true;
      
    }

    let greenSet = false; 
    if ( this.properties.includes(pacific) && 
       this.properties.includes (northCarolina)&& 
       this.properties.includes (pennsylvania)){
        greenSet = true;
      
    }

     let darkBlueSet = false; 
    if ( this.properties.includes(parkPlace) && 
       this.properties.includes (boardWalk)){
         darkBlueSet = true
         
    }

    let colorSets = [brownColorSet, lightBlueSet, pinkSet, orangeSet, redSet, 
     yellowSet, greenSet, darkBlueSet]
    
    let canBuyHouse = false; 

     for (let i = 0; i < colorSets.length; i++) {
      if (colorSets[i] === true ) {
          canBuyHouse = true; 
        
      }   
     }

      
   
    //let playerProperty = document.getElementsByClassName("property")[0]; 
    //playerProperty.textContent = "Property Owned: " + this.properties


    buttonYes.addEventListener('click', function(){

          
          
         
        playerObject.cash = playerObject.cash - landedOn.price
   
       
        playerMoney.textContent = playerObject.name + "'s cash: " + playerObject.cash
        
          
        if (activePlayer === 0){
         if (player1.properties.indexOf(landedOn) === -1 ) playerObject.properties.push(landedOn) 

         
          
        } else {
          if (player2.properties.indexOf(landedOn) === -1 )playerObject.properties.push(landedOn) 

          

        }
        landedOn.owner = playerObject.name
        
        
      
        document.getElementsByClassName("modal")[0].style.display = "none"
            
      }); 
    
    
      document.querySelector(".button-no").addEventListener('click', function(){
    
        document.getElementsByClassName("modal")[0].style.display = "none"
        

      })
  
      }  
    }
  }
  
let buildableProperty = []

const player1 = Players ("Joe", 1500, 0, 0, )  
const player2 = Players ("Frank", 1500, 0, 0, )  

player1["location"] = [0]
player2["location"] = [0]


player1["properties"] = [boardWalk, parkPlace]
player2["properties"] =[]

player1["colorsets"] = []
player2["colorsets"] = []




activePlayer = 1; 
  
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

document.querySelector(".buyhouse").addEventListener('click', function(){
 

 
  



  const generatecards = ()=>{

    for (let i = 0; i < SpacesArray.length; i++) {
    
      const propertyCard = document.createElement("div")
      const rents = document.createElement("div")
      const oneHouse = document.createElement("div")
      const twoHouse =  document.createElement("div")
      const threeHouse = document.createElement("div")
      const fourHouse =  document.createElement("div")
      
      const propertyTitle = document.createElement("div")
      
      rents.classList = "rents"
      propertyCard.classList = "propertycards"
      oneHouse.classList = "onehouse"
      twoHouse.classList = "twohouses "
      threeHouse.classList = "threehouses"
      fourHouse.classList = "fourhouses"
      
    
      propertyTitle.classList = "propertytitle"

     const rentprices = SpacesArray[i].rent
     const titles = SpacesArray[i].name
     const oneHousePrice = SpacesArray[i].house1rent
     const twoHousePrice = SpacesArray[i].house2rent
     const threeHousePrice = SpacesArray[i].house3rent
     const fourHousePrice = SpacesArray[i].house4rent
     
     rents.innerText = rentprices
     propertyTitle.innerText = titles
     oneHouse.innerText = oneHousePrice
     twoHouse.innerText = twoHousePrice
     threeHouse.innerText = threeHousePrice
    fourHouse.innerText = fourHousePrice
     

     propertyCard.appendChild(propertyTitle)
     propertyCard.appendChild(rents)
     //propertyCard.appendChild(oneHouse)
    
    rents.appendChild(oneHouse)
    rents.appendChild(twoHouse)    
    rents.appendChild(threeHouse)
    rents.appendChild(fourHouse)
    
    
    
    
     console.log(propertyCard)
    
  
  
  
  
  }
    
  }





generatecards()




document.getElementsByClassName("modal")[0].style.display = " block"

 document.querySelector(".button-yes").style.display = "none"
 document.querySelector(".button-no").style.display = "none"


 document.getElementsByClassName("chancecards")[0].style.display = " none"
 
 document.querySelector(".usermessage").textContent = 
 " Please select the property that you want to build on. The price will be x dollars per house. "
 




})





