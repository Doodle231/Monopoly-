
const playerTurn = document.getElementsByClassName("playerturn")[0]
const usermessage = document.getElementsByClassName("usermessage")
const prices = document.getElementsByClassName("price")
const names = document.getElementsByClassName("name")
const boardPiece = document.getElementsByClassName("boot")
const boardPiece2 = document.getElementsByClassName("car")
const modal = document.getElementsByClassName("modal")[0]
const player1StatusMessage = document.getElementsByClassName("playerName1")[0]
const CPUPlayerStatusMessage = document.getElementsByClassName("playerName2")[0]
const ChanceCards = document.getElementsByClassName("chancecards")
const buttonYes = document.querySelector(".button-yes")
const buttonNo = document.querySelector(".button-no")
const okbutton = document.querySelector (".okay")
const propertyCards = document.getElementsByClassName("propertycards")
const propertyTitle = document.getElementsByClassName("propertytitle")
const playerMoney = document.getElementsByClassName("cash")[0]
const modalContent = document.getElementsByClassName("modal-content")[0]
const buyHousesButton = document.getElementsByClassName("buyhouse")[0].style.display = "none"
const rollButton =  document.querySelector('.btn-roll')
const playerActionsLog =  document.getElementsByClassName("actionstaken")[0]
const communityCards = document.getElementsByClassName("communitycards")


okbutton.style.display = "none "
modal.style.display = "none"



const oneplayercash = document.getElementsByClassName("cash1")[0]

oneplayercash.textContent = " Cash: $1500 "  

const twoplayercash = document.getElementsByClassName("cash2")[0]

twoplayercash.textContent = "Cash: $ 1500"




const character = document.createElement("img")
character.classList = "guy"

character.src = "character.png"
const ClearChanceCards = () => {
 
  for (let i = 0; i < ChanceCards.length; i++){
    ChanceCards[i].style.display = "none"
  }
}

const clearCommunityCards = () => {

  for (let i = 0; i < communityCards.length; i++){
    communityCards[i].style.display = "none"
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
    .style.display = " block"
  })
}

const resetDisplay = () => {   
  for (let i = 0; i < propertyCards.length; i++){
  propertyCards[i].style.display = " none "
  }
}



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




          
   
    }
  




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
 
 


  let spacesArray = [go, mediterennan, communitychest, balticavenue, incometax, readingRailRoad, 
  orientalAvenue, chance, vermont, connecticut, justVisiting, stcharlesPlace, electricCompany, statesavenue, virginia, 
  pennRR, stJamesPlace, communitychest, tenessee, newYork, freeParking, kentucky, chance, indiana, illinois, 
  band0, atlantic, ventur, waterworks, marvinGardens  ,jail, pacific, northCarolina,communitychest,  pennsylvania, shortLine, chance, parkPlace, 
  luxuryTax, boardWalk]

  

  const generatePropertyCards = ()=>{

    for (let i = 0; i < spacesArray.length; i++) {
    
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
  
     const rentprices = spacesArray[i].rent
     const titles = spacesArray[i].name
     const oneHousePrice = spacesArray[i].house1rent
     const twoHousePrice = spacesArray[i].house2rent
     const threeHousePrice = spacesArray[i].house3rent
     const fourHousePrice = spacesArray[i].house4rent
     const hotelRentPrice = spacesArray[i].hotelrent
     
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
  let landedOn = spacesArray[TotalRoll]  
  if ( landedOn.name === "Just Visiting"){

    okbutton.style.display = " block"
   modalContent.appendChild(character)
     character.style.display = " block "
    usermessage[0].textContent = "You have landed on the visiting space. Relax, you are not in jail... Yet "
    buttonYes.style.display = "none "
    buttonNo.style.display = "none "
    resetDisplay() 
   CloseModal()

   okbutton.addEventListener('click', function(){
    character.style.display = "none "
    modal.style.display = "none"
    character.style.display = "none "
    okbutton.style.display = " none "
    
    // to reset to default yes and no buttons
    buttonYes.style.display = " block"
    buttonNo.style.display = " block"


     switchPlayer()
     computerClickEvent() 
     nameHighlight() 

    })
   

     }
    }
  
       function displayJail () {
        
        let landedOn = spacesArray[activePlayer.updatedlocation]
        
        if (landedOn === jail ){
        okbutton.style.display = " block"
        buttonYes.style.display = "none "
        buttonNo.style.display = "none "
        usermessage[0].textContent = "You have landed on the jail space. You have been taken directly to jail"
        resetDisplay() 
        okbutton.addEventListener('click', function(){
          modal.style.display = "none"
          okbutton.style.display = " none "
          buttonYes.style.display = " block"
          buttonNo.style.display = " block"
          switchPlayer() 
        
          nameHighlight()
         
        })
   
      if (landedOn === jail && activePlayer === player1 ){
      player1.location.splice(0, player1.location.length)
      player1.location.push(10)  
      spaceNames[player1.location].append(boardPiece[0])
      }
      
   
      if (landedOn === jail && activePlayer === CPUPlayer){
      CPUPlayer.location.splice(0, CPUPlayer.location.length)
     CPUPlayer.location.push(10)  
     spaceNames[CPUPlayer.location].append(boardPiece2[0])
      }
    }
  }

    function incomeTax (){

      let landedOn = spacesArray[activePlayer.updatedlocation]
     if (landedOn === incometax) {
        activePlayer.cash -= 50 
        usermessage[0].textContent = " You have landed on Income Tax. $50 has been taken from  your account"
     
        resetDisplay() 
         
       okbutton.style.display = "block "
       buttonYes.style.display = "none "
       buttonNo.style.display = "none"

       
    twoplayercash.textContent = " Cash: $" + CPUPlayer.cash 
    oneplayercash.textContent = " Cash: $" + player1.cash 

         okbutton.addEventListener('click', function(){
          modal.style.display = "none"
          okbutton.style.display = " none "
          buttonYes.style.display = " block"
          buttonNo.style.display = " block"
     
       
         switchPlayer()
       computerClickEvent() 
       nameHighlight() 
        })

      }



    }




const onehouse = document.getElementsByClassName("onehouse")




const railroadcards = document.getElementsByClassName("railroad")


for (let i = 0; i < railroadcards.length; i++){
  let trainImage = document.createElement("img")
  onehouse[5].innerText = " Rent with 1 train" + " $" + readingRailRoad.house1rent

  trainImage.src = "rr.gif"
  railroadcards[i].appendChild(trainImage)

  
  }


  const Players = (name, cash, ) => {
   
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
      
      DiceRolled = 0; 
    
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
        
           return this 
          
        },


      checkOwner(){

          let landedOn = spacesArray[TotalRoll]
            if (landedOn.owner != "The bank" ){
             usermessage[0].textContent = " You have landed on " + landedOn.name +
             ". It is currently owned by  " + landedOn.owner + ". $" + landedOn.rent +
             "  has been been taken out of your account"
    
             activePlayer.cash -= landedOn.rent 
             inactivePlayer.cash += landedOn.rent 
      
             buttonNo.style.display = "none"
             buttonYes.style.display ="none"
            okbutton.style.display = "block"
              
               }
               
               
               else {
             
                usermessage[0].textContent = "You have landed on " + landedOn.name + "." +
                "This property is vacant! " + 
                " Do you want to buy it for "
                + landedOn.price + "$ ?"

                okbutton.style.display = "none"
                buttonYes.style.display = "block"
                buttonNo.style.display = "block "
            }
          
            
         twoplayercash.textContent = " Cash: $" + CPUPlayer.cash 
         oneplayercash.textContent = " Cash: $ " + player1.cash 
        
        return this 

      },


     Buy(){
      
           
  
    

        return this
  
            
      },

         
      Sell(){
        
        
      





         return this 
     
     
     
      },



      trade() {

     


            
      
         
        return this
      },
    


    checkForColorSet(){

      
        let brownColorSet = false; 
      if ( this.propertyowned.includes(balticavenue) && 
       this.propertyowned.includes (mediterennan)){
         brownColorSet = true;
        
      
      }
      
      
      let lightBlueSet = false; 
      if ( this.propertyowned.includes(orientalAvenue) && 
       this.propertyowned.includes (vermont)&& 
       this.propertyowned.includes (connecticut)){
         lightBlueSet = true;
      
      }
      
      
      let pinkSet = false; 
      if ( this.propertyowned.includes(stcharlesPlace) && 
       this.propertyowned.includes (virginia)&& 
       this.propertyowned.includes (statesavenue)){
        pinkSet = true;
      
      }
      
      
      let orangeSet = false; 
      if ( this.propertyowned.includes(stJamesPlace) && 
       this.propertyowned.includes (tenessee)&& 
       this.propertyowned.includes (newYork)){
        orangeSet = true;
      
      }
      
      let redSet = false; 
      if ( this.propertyowned.includes(indiana) && 
       this.propertyowned.includes (illinois)&& 
       this.propertyowned.includes (kentucky)){
        redSet = true;
      
      }
      
      let yellowSet = false; 
      if ( this.propertyowned.includes(atlantic) && 
       this.propertyowned.includes (ventur)&& 
       this.propertyowned.includes (marvinGardens)){
         yellowSet = true;
      
      }
      
      let greenSet = false; 
      if ( this.propertyowned.includes(pacific) && 
       this.propertyowned.includes (northCarolina)&& 
       this.propertyowned.includes (pennsylvania)){
        greenSet = true;
      
      }
      
      let darkBlueSet = false; 
      if ( this.propertyowned.includes(parkPlace) && 
       this.propertyowned.includes (boardWalk)){
         darkBlueSet = true
         
      }
      
      let colorSets = [brownColorSet, lightBlueSet, pinkSet, orangeSet, redSet, 
      yellowSet, greenSet, darkBlueSet]
      
      let canBuyHouse = false; 
      
      for (let i = 0; i < colorSets.length; i++) {
      if (colorSets[i] === true ) {
          canBuyHouse = true; 
         console.log("can buy house")
          }   
      }
      
      
        return this 
     },

  
    }
  }



const player1 = Players ("Player1", 1500, 0, 0, )  
const player2= Players ("Player2", 1500, 0, 0, )  



const CPUPlayer= Object.create(player2)
CPUPlayer.name = "CPU Player"

//console.log(CPUPlayer)




let activePlayer = player1
let inactivePlayer = CPUPlayer



const delayedDiceRollPress = () => {
  rollButton.click() 
  
}


const computerClickEvent = () => {


if (activePlayer === CPUPlayer) {


setTimeout(delayedDiceRollPress, 1000)
}

}



    

        
    
    


    
    
      
      
   
 let player1name = document.getElementsByClassName("playerName1")[0]
 let CPUPlayername = document.getElementsByClassName("playerName2")[0]


const nameHighlight = () => {
   

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



nameHighlight()






  

const switchPlayer = () => {
  if (activePlayer === player1){
    activePlayer = CPUPlayer
  
  } 

  
  
  else if
  (activePlayer === CPUPlayer){
    activePlayer = player1
  }

  if (activePlayer === player1){

    inactivePlayer =CPUPlayer } 
    else if 
      (activePlayer === CPUPlayer){
        inactivePlayer = player1
      }
 
}



       
player1StatusMessage.innerHTML =  player1.name 
CPUPlayerStatusMessage.innerHTML =  CPUPlayer.name 


  //////////////////////////////////////////////////////////////////
rollButton.addEventListener('click', function() {

 
  
 






  const railroads = [readingRailRoad, pennRR, band0, shortLine]

  for (let i = 0; i < railroads.length; i++){

    if(inactivePlayer.railroads === 2){
  railroads[i].rent = 50
    }
  
    if(inactivePlayer.railroads === 3){
      railroads[i].rent = 100
    }
        
    if(inactivePlayer.railroads === 4){
          railroads[i].rent = 200
    }

  }


 

CPUPlayer.buyHigherEndProperty = function () { 
   


    
  if (CPUPlayer.updatedlocation  >= 26  ) {
    setTimeout(computerClickYes, 500)
  }
  
  if (CPUPlayer.updatedlocation < 26){
    setTimeout(computerClickNo, 500)
  }
  

  }
   


 

  clearCommunityCards() 
  ClearChanceCards() 
  if (activePlayer === player1){
    player1.moveplayer().checkOwner().Buy().Sell().trade().checkForColorSet()

  
  } else {
    CPUPlayer.moveplayer().checkOwner().Buy().Sell().trade().checkForColorSet().buyHigherEndProperty()
  }


  //switchPlayer() 

  
 nameHighlight() 
 



 


 






 
  const showModal = () =>{ 
     modal.style.display = "block"
      const propertyCards = document.getElementsByClassName("propertycards")
    for (let i = 0; i < spacesArray.length; i++) {
      propertyCards[TotalRoll].style.display = " block "
       }
    
   
      }
 
    
       

   
   showModal() 
   DisplayChanceCards()
   
   visiting()
   displayJail()     
   incomeTax() 
  
   displayCommunityCards() 


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
      chanceCards[5].innerText = " You have just received an inheritence of $100  "
      chanceCards[6].innerText = " Pay poor tax of $15 "
      chanceCards[7].innerText = " Advance to St. Charles Place.   "
      chanceCards[8].innerText = " There was a bank error in your favor. Collect $100  "
      chanceCards[9].innerText = " You won $ 50 from a pie eating competition. Collect $50 "
    
}

generateChanceCards()
  
  
DisplayChanceCards = () => {
 
  let landedOn = spacesArray[activePlayer.updatedlocation]

   const ChanceCards = document.getElementsByClassName("chancecards")
   if (landedOn.name === "Chance"){
   for (let i = 0; i < ChanceCards.length; i++){
    
      resetDisplay()
     
    }

     usermessage[0].textContent = "You have landed on Chance. Here is your card... "
    let randomChance = 3//Math.floor(Math.random() * 9) +1 
     ChanceCards[randomChance].style.display = "block"
    okbutton.style.display = "block"
    buttonNo.style.display = "none"
    buttonYes.style.display = "none"
     
    
    if (randomChance === 0){
      activePlayer.cash += 20 
      }
    
    if (randomChance === 1){
     activePlayer.cash += 200
    }

    if (randomChance === 2){
     activePlayer.location.splice(0, activePlayer.location.length)
      activePlayer.location.push(10)  
      activePlayer.updatedlocation = 10 
      appendActivePlayer()
    }
   
    if (randomChance == 3) {
      activePlayer.location.splice(0, activePlayer.location.length)
      activePlayer.location.push(39)  
     activePlayer.updatedlocation = 39
     appendActivePlayer() 
     checkOwner()
 

    }

    if (randomChance === 4){
      activePlayer.cash -= 20 
    }

    if (randomChance === 5){
      activePlayer.cash += 100
    }

    if (randomChance === 6){
      activePlayer.cash -= 15
    }


 if (randomChance === 7){
     
      activePlayer.location.splice(0, activePlayer.location.length)
      activePlayer.location.push(11)  
     activePlayer.updatedlocation = 11
     appendActivePlayer() 
     checkOwner() 
    
    }

     if (randomChance === 8){
       activePlayer.cash += 100 
     }

     if (randomChance === 9){
      activePlayer.cash += 50 
    }

   CPUPlayerCash.textContent = " Cash: $" + CPUPlayer.cash 
   player1Cash.textContent = " Cash: $" + player1.cash 



     }

     
    }  
   

    const generateCommunityCards = () => {

      for (let i = 0; i<10 ; i++){
        
        const communityCards = document.createElement("div")
          communityCards.classList = "communitycards"
        const modalContent = document.getElementsByClassName("modal-content")[0]
        modalContent.appendChild(communityCards)
       
      }   
    
        const communityCards = document.getElementsByClassName("communitycards")
          communityCards[0].innerText = " Hospital bill. Pay $100   "
          communityCards[1].innerText = " Life insurance matures. Collect $100  "
          communityCards[2].innerText = " Pay school tax of $ 150  "
          communityCards[3].innerText = " Bank error in your favor. Collect $200 "
          communityCards[4].innerText = " Xmas fund matures. Collect $ 100  "
          communityCards[5].innerText = " You have just received an inheritence of $100  "
          communityCards[6].innerText = " Pay poor tax of $15 "
          communityCards[7].innerText = " Thanks for playing this game. Here is $200 "
          communityCards[8].innerText = " There was a bank error in your favor. Collect $100  "
          communityCards[9].innerText = " You won $ 50 from a a hotdog eating contest. Colect $50"
        
    }
    
    

generateCommunityCards() 


  const displayCommunityCards = () => {
 
  let landedOn = spacesArray[activePlayer.updatedlocation]

   const communityCards = document.getElementsByClassName("communitycards")
   if (landedOn === communitychest){
   for (let i = 0; i < communityCards.length; i++){
    
      resetDisplay()
      
    }

     usermessage[0].textContent = "You have landed on Community Chest. Here is your card... "
    let randomChance = Math.floor(Math.random() * 9) +1 
     communityCards[randomChance].style.display = "block"
    okbutton.style.display = "block"
    buttonNo.style.display = "none"
    buttonYes.style.display = "none"
    

    if (randomChance === 0){
      activePlayer.cash += 100
      }
    
    if (randomChance === 1){
     activePlayer.cash += 100
    }

    if (randomChance === 2){
     activePlayer.cash -= 150
    }
   
    if (randomChance == 3) {
      activePlayer.cash += 200
 

    }

    if (randomChance === 4){
      activePlayer.cash += 100
    }

    if (randomChance === 5){
      activePlayer.cash += 100
    }

    if (randomChance === 6){
      activePlayer.cash -= 15
    }


     if (randomChance === 7){
     activePlayer.cash += 200 
    
    }

     if (randomChance === 8){
       activePlayer.cash += 100 
     }

     if (randomChance === 9){
      activePlayer.cash += 50 
    }

    twoplayercash.textContent = " Cash: $" + CPUPlayer.cash 
    oneplayercash.textContent = " Cash: $" + player1.cash 
    
    okbutton.addEventListener('click', function(){
   
       switchPlayer()
       computerClickEvent() 
       nameHighlight() 
      
       character.style.display = "none "
       modal.style.display = "none"
       character.style.display = "none "
       okbutton.style.display = " none "
       
       // to reset to default yes and no buttons
       buttonYes.style.display = " block"
       buttonNo.style.display = " block"


      })

    }
  }


      
 buttonNo.addEventListener('click', function(){
  landedOn = spacesArray[activePlayer.updatedlocation]
  playerActionsLog.textContent =  activePlayer.name + "  has landed on  "
      + landedOn.name + " . " + activePlayer.name + " has declined to purchase "

  
  
  nameHighlight()
  generateAuction() 
  
 })
  


    buttonYes.addEventListener('click', function(){
      landedOn = spacesArray[activePlayer.updatedlocation]
     

       activePlayer.cash -= landedOn.price
       landedOn.owner = activePlayer.name 
      
      // const noduplicates = [...new Set(inactivePlayer.propertyowned)]
       activePlayer.propertyowned.push(landedOn)
       
      if (landedOn === readingRailRoad){
        activePlayer.railroads += 1; 
      }
      
      if (landedOn === pennRR){
        activePlayer.railroads += 1; 
      }
      
      if (landedOn === band0){
        activePlayer.railroads += 1; 
      }
      
      if (landedOn === shortLine){
        activePlayer.railroads += 1; 
      }
      
      playerActionsLog.textContent =  activePlayer.name + "  has landed on  "
      + landedOn.name + " . " + landedOn.name + " has been purchased"

      switchPlayer() 
      computerClickEvent() 
      nameHighlight()
      resetDisplay()
       modal.style.display = "none"

          twoplayercash.textContent = " Cash: $" + CPUPlayer.cash 
          oneplayercash.textContent = " Cash: $ " + player1.cash 
        

  })
    
   
 
  

  const computerClickNo= () => {
   
    buttonNo.click() 
   
  }

const computerClickYes= () => {
  buttonYes.click() 
}





let cpuIsPlaying = true; 


  ///////////////////////////////////

const highestBidDisplay = document.getElementsByClassName("currenthighbid")[0]
const auctionPopUp = document.getElementsByClassName("auctionpopup")[0]
const stopBiddingPlyr1 = document.getElementsByClassName("stopbidding1")[0]
const stopBiddingPlyr2 = document.getElementsByClassName("stopbidding2")[0]
const player1ConfirmBid = document.getElementsByClassName("player1confirmbid")[0]
const player2ConfirmBid = document.getElementsByClassName("player2confirmbid")[0]
const cpuBidDisplay = document.getElementsByClassName("cpubid")[0]
let cpubidamount = parseInt(document.getElementsByClassName("cpubidamount")[0].value)
let highestBidNumber = parseInt(document.getElementsByClassName("currenthighbidnum")[0])

let player1Bid = parseInt(document.getElementById('Player1bid').value)
let player2Bid = parseInt(document.getElementById('Player2bid').value)

cpubidamount = 0 




const setCpuDiplay = () => {
  if (cpuIsPlaying = true){
    stopBiddingPlyr2.style.display = "none "
    player2ConfirmBid.style.display = "none"
    document.getElementById('Player2bid').style.display = "none"
    cpuBidDisplay.innerText = "Current CPU Bid"
    
    

}

}


  
setCpuDiplay() 



const compareBids = () => {

  let player1Bid = parseInt( document.getElementById('Player1bid').value)
  let player2Bid = parseInt( document.getElementById('Player2bid').value)
  
    if (player1Bid < highestBidNumber){
    return
  }
 
  if (cpubidamount > player1Bid || cpubidamount > highestBidNumber){
    return
  }

  if (cpubidamount < highestBidNumber){
    return
  }

  let propertyPrice= spacesArray[activePlayer.updatedlocation].price
 
  let maxBId = propertyPrice 

  let oldBid  = cpubidamount
 
  let bidIncrement = Math.floor(Math.random() * 10) +1 
  cpubidamount = player1Bid + bidIncrement
  


  if ( cpubidamount > maxBId){
    cpubidamount = 0 
    document.getElementsByClassName("cpubidamount")[0].innerHTML = cpubidamount

  }


  
 const delayBid = () => {
 
  if (player1Bid > cpubidamount){
    highestBidNumber = player1Bid
    highestBidDisplay.innerHTML = "The current high bid is : $  " + player1Bid
  } else {
    highestBidNumber= cpubidamount
    
  }

  highestBidDisplay.innerHTML = "The current high bid is : $  " + cpubidamount
  
  
  document.getElementsByClassName("cpubidamount")[0].innerHTML = cpubidamount

}


 if (player1Bid > oldBid){
  highestBidNumber = player1Bid
  highestBidDisplay.innerHTML = "The current high bid is : $  " + player1Bid
} else {
  highestBidNumber= oldBid
  
}

setTimeout(delayBid,1500)


 



}

  
 


  

   
 


function generateAuction (){ 
  auctionPopUp.style.display = " block "
}


   player1ConfirmBid.addEventListener('click', function(){
   compareBids() 
    
 

   })


   stopBiddingPlyr1.addEventListener('click', function(){

   auctionPopUp.style.display ="none "
   switchPlayer()
   nameHighlight()


  })

  stopBiddingPlyr2.addEventListener('click', function(){

    auctionPopUp.style.display ="none "
    switchPlayer() 
    nameHighlight() 
 
 
   })












///////////
   
   
player1ConfirmBid.addEventListener('click', function(){
  
 
   
    })
  
  
  
   player2ConfirmBid.addEventListener('click', function(){
   
  
    })

