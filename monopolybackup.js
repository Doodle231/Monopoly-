
const playerTurn = document.getElementsByClassName("playerturn")[0]
const usermessage = document.getElementsByClassName("usermessage")
const prices = document.getElementsByClassName("price")
const names = document.getElementsByClassName("name")
const boardPiece = document.getElementsByClassName("boot")
const boardPiece2 = document.getElementsByClassName("car")
const modal = document.getElementsByClassName("modal")[0]
const player1StatusMessage = document.getElementsByClassName("playerName1")[0]
const player2StatusMessage = document.getElementsByClassName("playerName2")[0]
const ChanceCards = document.getElementsByClassName("chancecards")
const buttonYes = document.querySelector(".button-yes")
const buttonNo = document.querySelector(".button-no")
const okbutton = document.querySelector (".okay")
const propertyCards = document.getElementsByClassName("propertycards")
const propertyTitle = document.getElementsByClassName("propertytitle")
const playerMoney = document.getElementsByClassName("cash")[0]
const modalContent = document.getElementsByClassName("modal-content")[0]
const buyHousesButton = document.getElementsByClassName("buyhouse")[0].style.display = "none"

okbutton.style.display = "none "
modal.style.display = "none"



const character = document.createElement("img")
character.classList = "guy"

character.src = "character.png"
const ClearChanceCards = () => {
 
  for (let i = 0; i < ChanceCards.length; i++){
    ChanceCards[i].style.display = "none"
  }
}

const CloseModal = () => {  
  okbutton.addEventListener('click', function(){
    character.style.display = "none "
    modal.style.display = "none"
    character.style.display = "none "
    okbutton.style.display = " none "

    // to reset to default yes and no buttons
    buttonYes.style.display = " block"
    buttonNo.style.display = " block"
  })
}

const resetDisplay = () => {   
  for (let i = 0; i < propertyCards.length; i++){
  propertyCards[i].style.display = " none "
  }
}

player1StatusMessage.innerHTML =  " Player1 "
player2StatusMessage.innerHTML =  " Player2"




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
  const readingRailRoad = SpaceObjects(200, "Reading Railroad", 25, 200, 25,50,100,200, 0)
  const orientalAvenue = SpaceObjects(100, " Oriental Avenue ", 6, 12, 30,90, 270,400,550,50 )
  const chance = SpaceObjects(0, "Chance",0,0,0,0,0,0,0)
  const vermont = SpaceObjects(100, " Vermont Avenue ", 6, 12, 30, 90, 270, 400, 550,50)
  const connecticut = SpaceObjects(120, " Conneticut Avenue ",8, 16,40,100,300,450,600,50)
  const justVisiting = SpaceObjects(0, "Just Visiting",0,0,0,0,0,0,0)
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


  const generatePropertyCards = ()=>{

    for (let i = 0; i < SpacesArray.length; i++) {
    
      const propertyCard = document.createElement("div")
      const rents = document.createElement("div")
      const oneHouse = document.createElement("div")
      const twoHouse =  document.createElement("div")
      const threeHouse = document.createElement("div")
      const fourHouse =  document.createElement("div")
      const hotelRent = document.createElement("div")
      const propertyTitle = document.createElement("div")
      
      rents.classList = "rents"
      propertyCard.classList = "propertycards"
      oneHouse.classList = "onehouse"
      twoHouse.classList = "twohouses "
      threeHouse.classList = "threehouses"
      fourHouse.classList = "fourhouses"
      hotelRent.classList = "hotelrent"
    
      propertyTitle.classList = "propertytitle"
  
     const rentprices = SpacesArray[i].rent
     const titles = SpacesArray[i].name
     const oneHousePrice = SpacesArray[i].house1rent
     const twoHousePrice = SpacesArray[i].house2rent
     const threeHousePrice = SpacesArray[i].house3rent
     const fourHousePrice = SpacesArray[i].house4rent
     const hotelRentPrice = SpacesArray[i].hotelrent
     
     rents.innerText = " Rent $" + rentprices
     propertyTitle.innerText = titles 
     oneHouse.innerText = " Rent with 1 house $" + oneHousePrice
     twoHouse.innerText = " Rent with 2 houses $" + twoHousePrice
     threeHouse.innerText = " Rent with 3 houses $" + threeHousePrice
     fourHouse.innerText = " Rent with 4 houses $" + fourHousePrice
     hotelRent.innerText = "Rent with hotel $" + hotelRentPrice
  
    const modalContent = document.getElementsByClassName("modal-content")[0]
  
     propertyCard.appendChild(propertyTitle)
     propertyCard.appendChild(rents)
    rents.appendChild(oneHouse)
    rents.appendChild(twoHouse)    
    rents.appendChild(threeHouse)
    rents.appendChild(fourHouse)
    rents.appendChild(hotelRent)
    
    modalContent.appendChild(propertyCard)
    propertyCard.style.display = " none "
    
    }
  }

  generatePropertyCards()

 
  const displayCard= ()=> {

    propertyTitle[39].classList = "darkbluecard"
    propertyTitle[37].classList = "darkbluecard"
  
  propertyTitle[35]. classList = "railroad"
   propertyTitle[34].classList = "greencard"
   propertyTitle[32].classList = "greencard"
   propertyTitle[31].classList = "greencard"
  
   propertyTitle[29].classList = "yellowcard"
   propertyTitle[27].classList = "yellowcard"
   propertyTitle[26].classList = "yellowcard"
   propertyTitle[25]. classList = "railroad"
   propertyTitle[24].classList = "redcard"
   propertyTitle[23].classList = "redcard"
   propertyTitle[21].classList = "redcard"
   
   propertyTitle[19].classList = "orangecard"
   propertyTitle[18].classList = "orangecard"
   propertyTitle[16].classList = "orangecard"
   propertyTitle[15]. classList = "railroad"
  
   propertyTitle[14].classList = "pinkcard"
   propertyTitle[13].classList = "pinkcard"
   propertyTitle[11].classList = "pinkcard"
  
  
   propertyTitle[9].classList = "lightbluecard"
   propertyTitle[7].classList = "chancecardsmain"
   propertyTitle[8].classList = "lightbluecard"
  
   propertyTitle[6].classList = "lightbluecard"
   propertyTitle[5]. classList = "railroad"
   propertyTitle[3].classList = "browncard"
  
   propertyTitle[1].classList = "browncard"
  
  }
  
  displayCard() 


 function visiting(){
  let landedOn = SpacesArray[TotalRoll]  
  if ( landedOn.name === "Just Visiting"){

    okbutton.style.display = " block"
   modalContent.appendChild(character)
     character.style.display = " block "
    usermessage[0].textContent = "You have landed on the visiting space. Relax, you are not in jail... Yet "
    buttonYes.style.display = "none "
    buttonNo.style.display = "none "
    resetDisplay() 
   CloseModal()
     }
    }
    
   
    
    function checkOwner (){

      let landedOn = SpacesArray[TotalRoll]
        if (landedOn.owner != "The bank"){
         usermessage[0].textContent = " You have landed on " + landedOn.name +
         ". It is currently owned by  " + landedOn.owner + "." + landedOn.rent +
         "has been been taken out of your account"
        
           } else {
         
            usermessage[0].textContent = "You have landed on " + landedOn.name + "." +
            "This property is vacant! " + 
            " Do you want to buy it for "
            + landedOn.price + "$ ?"
           player1Cash.textContent = " Cash: $ " + player1.cash 
           player2Cash.textContent = " Cash: $" + player2.cash 
        }
        
       function incomeTaxLanding (){ 
        let landedOn = SpacesArray[TotalRoll]
         if (landedOn.name === "Chance"){
           
         }

      
      
      
      }
       
       function displayJail () {
        let landedOn = SpacesArray[TotalRoll]
        okbutton.style.display = " block"
        buttonYes.style.display = "none "
        buttonNo.style.display = "none "
        usermessage[0].textContent = "You have landed on the jail space. You have been taken directly to jail"
        if (landedOn.name === "Jail"){
         resetDisplay()
         disJail()
      } 
   
      if (landedOn.name === "Jail" && activePlayer === player1 ){
      player1.location.splice(0, player1.location.length)
      player1.location.push(10)  
      spaceNames[player1.location].append(boardPiece[0])
      }
      
   
      if (landedOn.name === "Jail" && activePlayer === player2){
      player2.location.splice(0, player2.location.length)
     player2.location.push(10)  
     spaceNames[player2.location].append(boardPiece2[0])
      }
    }

      function purchasedProperty (){

        let landedOn = SpacesArray[TotalRoll]  
        buttonYes.addEventListener('click', function(){
       activePlayer.cash = activePlayer.cash - landedOn.price
       player1Cash.textContent = " Cash: $ " + player1.cash 
       player2Cash.textContent = " Cash: $" + player2.cash 
           
         }  
        )}
       




const railroadcards = document.getElementsByClassName("railroad")
railroadcards[0].innerText = " hello there "

for (let i = 0; i < railroadcards.length; i++){
  let trainImage = document.createElement("img")
trainImage.src = "rr.gif"
  railroadcards[i].appendChild(trainImage)
 
  
  }


  const Players = (name, cash, ) => {
   
  return {
    name:name, 
    cash:cash, 
    railroads: 0,
    otherutility:0 ,
    hascolorset:false, 
    location: [], 
    propertyowned: [],
    updatedlocation:[],

    
    

    moveplayer(){
      
      DiceRolled = 0; 
      let playerObject = this; 
      let dice = Math.floor(Math.random() * 6) +1 
      let diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png';
      DiceRolled += dice;
      
     this.location.push(DiceRolled)
   
     
    TotalRoll= this.location.reduce ((previousvalue, currentValue) => { 
        return previousvalue + currentValue })
     
       let remainder = TotalRoll % spaceNames.length
      if (TotalRoll > 39){ 
          TotalRoll = remainder}
         
          if (activePlayer === player1){
            spaceNames[TotalRoll].append(boardPiece[0])
          } else {
          
            spaceNames[TotalRoll].append(boardPiece2[0])
          
          }
      
           this.updatedlocation = TotalRoll
       
           return this 
          
        },


     Buy(){
      
     checkOwner() 

         return this
  
            
      },

         
      Sell(){
        
        okbutton.addEventListener('click', function(){

          document.getElementsByClassName("modal")[0].style.display = "none"
 
         
          okbutton.style.display = " none "

          buttonYes.style.display = " block"
          buttonNo.style.display = " block"

    
        })
        

         return this 
     
     
     
      },



      trade() {

     


            
      
         
        return this
      },
    
     }

    }
  



const player1 = Players ("Player1", 1500, 0, 0, )  
const player2 = Players ("Player2", 1500, 0, 0, )  



console.log(player1, player2)








const player1Cash = document.getElementsByClassName("cash1")[0]

player1Cash.textContent = " Cash: $ " + player1.cash 

const player2Cash = document.getElementsByClassName("cash2")[0]
player2Cash.textContent = " Cash: $" + player2.cash 







let activePlayer = player2




  
document.querySelector('.btn-roll').addEventListener('click', function() {

const switchPlayer = () => {
  if (activePlayer === player1){
    activePlayer = player2
  
  } else if 
  (activePlayer === player2){
    activePlayer = player1
  }

  if (activePlayer === player1){

    inactivePlayer = player2 } 
    else if 
      (activePlayer === player2){
        inactivePlayer = player1
      }
 
    }

       
    switchPlayer() 


      if (activePlayer === player1){
        TotalRoll = player1.updatedlocation
      }
    
      if (activePlayer === player2 ){
        TotalRoll =player2.updatedlocation
      }



    



  const chanceHighlight = () => {
   
    let player1name = document.getElementsByClassName("playerName1")[0]
    let player2name = document.getElementsByClassName("playerName2")[0]
    if (activePlayer === player1){
      player1name.style.backgroundColor = "rgb(249, 231, 159 )"
     
    } else {
       player1name.style.backgroundColor = ""
     }
     if (activePlayer === player2){
      player2name.style.backgroundColor = "rgb(249, 231, 159 )"
     
    } else {
       player2name.style.backgroundColor = ""
     }


  }

  chanceHighlight() 

  
  ClearChanceCards() 
  if (activePlayer === player1){
    player1.moveplayer().Buy().Sell().trade()

  
  } else {
    player2.moveplayer().Buy().Sell().trade()
  }






  const showModal = () =>{ 
     modal.style.display = "block"
      const propertyCards = document.getElementsByClassName("propertycards")
    for (let i = 0; i < SpacesArray.length; i++) {
      propertyCards[TotalRoll].style.display = " block "
       }
    }
 
    visiting()
    


   
   showModal() 
   


  purchasedProperty() 
  
  document.querySelector(".button-no").addEventListener('click', function(){
        
       
    resetDisplay()
    document.getElementsByClassName("modal")[0].style.display = "none"


     })

 })



const generateChanceCards = () => {

  for (let i = 0; i<10 ; i++){
    
    const chanceCards = document.createElement("div")
    chanceCards.classList = "chancecards"
    const modalContent = document.getElementsByClassName("modal-content")[0]
    modalContent.appendChild(chanceCards)
   
  }   

    const chanceCards = document.getElementsByClassName("chancecards")
    chanceCards[0].innerText = " You have won 7th place in a beauty contest. Take $20.   "
      chanceCards[1].innerText = " Thank you for playing this game. Here is $200.  "
      chanceCards[2].innerText = " Go directly to jail.  "
      chanceCards[3].innerText = " Advance to Boardwalk. "
      chanceCards[4].innerText = " You have just received a speeding ticket. Pay $20. "
      chanceCards[5].innerText = " Go back 3 spaces.  "
      chanceCards[6].innerText = " Pay poor tax of $15 "
      chanceCards[7].innerText = " Advance to St. Charles Place.   "
      chanceCards[8].innerText = " There was a bank error in your favor. Collect $100  "
      chanceCards[9].innerText = " There was a bank error in your favor. Collect $100  "
  
    
}


generateChanceCards()
  
  
/*DisplayChanceCards = () => {

  let landedOn = SpacesArray[TotalRoll]

   const ChanceCards = document.getElementsByClassName("chancecards")
   for (let i = 0; i < ChanceCards.length; i++){
    if (landedOn.name === "Chance"){
         resetDisplay()
         ChanceCards[1].style.display = "block"
        
       }
     }

     if (landedOn.name !="Chance"){
       ClearChanceCards() 
     } else {

     }
  }
   
  DisplayChanceCards()
    */ 

