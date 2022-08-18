import { spacesArray } from "../spaceObjects.js"

export const generatePropertyCards = (source)=>{

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
    
     


    }
 
  
  
  }

  
  export const generateAuctionPropertyCards = (source)=>{

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
      propertyCard.classList = "auctionpropertycards"
      oneHouse.classList = "onehouse"
      twoHouse.classList = "twohouses "
      threeHouse.classList = "threehouses"
      fourHouse.classList = "fourhouses"
      hotelRent.classList = "hotelrent"
    
      propertyTitle.classList = "auctionpropertytitle"
  
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
  
    const auctionCardContainer = document.getElementById("auctioncardcontainer")
  
     propertyCard.appendChild(propertyTitle)
     propertyCard.appendChild(rents)
    rents.appendChild(oneHouse)
    rents.appendChild(twoHouse)    
    rents.appendChild(threeHouse)
    rents.appendChild(fourHouse)
    rents.appendChild(hotelRent)
   

     
   
auctionCardContainer.appendChild(propertyCard)
    
    
    }
 
  
  
  }

  export const generatemobilePropertyCards = () => {


    for (let i = 0; i < spacesArray.length; i++) {

    const propertyCard = document.createElement("div")
    const rents = document.createElement("div")
    const oneHouse = document.createElement("div")
    const twoHouse =  document.createElement("div")
    const threeHouse = document.createElement("div")
    const fourHouse =  document.createElement("div")
    const hotelRent = document.createElement("div")
    const propertyTitle = document.createElement("div")
    
    rents.classList = "mobilerents"
    propertyCard.classList = "mobilepropertycards"
    oneHouse.classList = "mobileonehouse"
    twoHouse.classList = "mobiletwohouses "
    threeHouse.classList = "mobilethreehouses"
    fourHouse.classList = "mobilefourhouses"
    hotelRent.classList = "mobilehotelrent"
  
    propertyTitle.classList = "mobilepropertytitle"

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

  

   propertyCard.appendChild(propertyTitle)
   propertyCard.appendChild(rents)
  rents.appendChild(oneHouse)
  rents.appendChild(twoHouse)    
  rents.appendChild(threeHouse)
  rents.appendChild(fourHouse)
  rents.appendChild(hotelRent)
 

  const mobilePropetyCards = document.getElementById("mobileflexwrapper")
 
mobilePropetyCards.appendChild(propertyCard)

    }

  }

  export const displayInventoryCard = (playerLocation) => {
    const mobilePropetyCards = document.getElementsByClassName("mobilepropertycards")
   mobilePropetyCards[playerLocation].style.display = "block"

  }