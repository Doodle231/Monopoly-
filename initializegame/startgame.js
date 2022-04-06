import { generatePropertyCards } from "../propertyCards/generatePropertyCards.js"
import { grabIconChoice } from "../setIcons.js"

export const startGame = () => {
    
  grabIconChoice()
    
  generatePropertyCards()

    const propertyCards = document.getElementsByClassName("propertycards")

    for (let i = 0; i < propertyCards.length; i++) {
    
    propertyCards[i].style.display = "none"
    
    }


    let introPage = true;

if (introPage === true ){
  const backGround = document.getElementsByClassName("background")[0]
  const mainContainer = document.getElementsByClassName("container")[0]
  const navBar = document.getElementsByClassName("navbar")[0]
  mainContainer.style.display = "none"
  navBar.style.display = "none"

}

let introButtons = document.getElementsByClassName("intro-iconbutton")

for (let i = 0; i< introButtons.length; i++){

introButtons[i].addEventListener('click', function(e) {


  
  introPage = false
  
  if (introPage === false){
   const introPage =  document.getElementsByClassName("intropage")[0]
    introPage.style.display = "none"
    const mainContainer = document.getElementsByClassName("container")[0]
    const navBar = document.getElementsByClassName("navbar")[0]
    mainContainer.style.display = "grid"
    navBar.style.display = "grid"
  }

})

}


}