import { spacesArray} from "./spaceObjects.js"
import * as players from "./PlayerFactory.js"


export const generateLargePropertyCards = ()=>{

  for (let i = 0; i < spacesArray.length; i++) {
  
    const propertyCard = document.createElement("div")
    const rents = document.createElement("div")
    const oneHouse = document.createElement("div")
    const twoHouse =  document.createElement("div")
    const threeHouse = document.createElement("div")
    const fourHouse =  document.createElement("div")
    const hotelRent = document.createElement("div")
    const propertyTitle = document.createElement("div")
    
    rents.classList = "lgrents"
    propertyCard.classList = "lgpropertycards"
    oneHouse.classList = "lgonehouse"
    twoHouse.classList = "lgtwohouses "
    threeHouse.classList = "lgthreehouses"
    fourHouse.classList = "lgfourhouses"
    hotelRent.classList = "lghotelrent"
  
    propertyTitle.classList = "lgpropertytitle"

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
 


  let propertyTrade = document.querySelector(".player1tradeableproperty")
 
propertyTrade.appendChild(propertyCard)
  console.log(propertyTrade)
   


  }



}







const propertyTitle = document.getElementsByClassName("lgpropertytitle")

export const setPropertyColors= ()=> {

    propertyTitle[39].classList = "darkbluecard"
    propertyTitle[37].classList = "darkbluecard"
  
  propertyTitle[35]. classList = "railroad"
   propertyTitle[34].classList = "greencard"
   propertyTitle[32].classList = "greencard"
   propertyTitle[31].classList = "greencard"
  
   propertyTitle[29].classList = "yellowcard"
   propertyTitle[28].classList ="waterworks"
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
   propertyTitle[12].classList = "electriccompany"
   propertyTitle[11].classList = "pinkcard"
  
  
   propertyTitle[9].classList = "lightbluecard"
  
   propertyTitle[8].classList = "lightbluecard"
   propertyTitle[7].classList = "chancecardsmain"
   propertyTitle[6].classList = "lightbluecard"
   propertyTitle[5].classList = "railroad"
   propertyTitle[3].classList = "browncard"
  
   propertyTitle[1].classList = "browncard"
  
  }
  







export const tradeSettings = () => {
  generateLargePropertyCards()
  setPropertyColors()

   
    let tradeScreen = document.querySelector(".trademenu")
  
    let largeCards = document.getElementsByClassName("lgpropertycards")
    for (let i = 0; i < largeCards.length; i++) {

  largeCards[1].style.display = "block"

    }
    
    
    let tradeableCash = document.querySelector(".player1tradeablecash")
    let propertyTrade = document.querySelector(".player1tradeableproperty")
    let player1propertyTrade = document.getElementById("player1trade")
    tradeScreen.style.display = "none"

    

     let closeMenu = document.querySelector(".closetrademenu")
     
     closeMenu.addEventListener('click', function() {

          tradeScreen.style.display = "none"
     })


    const tradeButton = document.getElementsByClassName("iconbutton")[1]

    tradeButton.addEventListener('click', function() {
      
      tradeableCash.textContent = players.player1.cash 

        tradeScreen.style.display = "grid"
  
        let childrenElements = document.querySelector(".tradeablepropertieswrapper").children




        
        let tradingTable = document.querySelector(".player1offer")
        for (let i = 0; i < childrenElements.length; i++) {
     
          childrenElements[i].addEventListener('click', function(e) {
            
            

            let clickedCard= e.target
          
      
            tradingTable.appendChild(clickedCard)
            

            


          })


    

        



        }








        for (let i = 0; i <spacesArray.length; i++){
      
          let option = document.createElement("option")
          let textContent = document.createTextNode(spacesArray[i].name)
          let price = document.createTextNode(spacesArray[i].price)
          
          option.appendChild(textContent)
          

           player1propertyTrade.appendChild(option)
          player1propertyTrade[i].style.display = "none"
           
          player1propertyTrade[1].style.display ="block"
        

           
        }
        
    






    })

}