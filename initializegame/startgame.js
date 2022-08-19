import { generatemobilePropertyCards, generatePropertyCards } from "../propertyCards/generatePropertyCards.js"
import { grabIconChoice } from "../setIcons.js"
import { setPlayerName } from "../setplayername.js"
export const startGame = () => {
   

  setPlayerName()
  let introButtons = document.getElementsByClassName("smallintroicon")
    

  


  grabIconChoice()
    
  generatePropertyCards()
   generatemobilePropertyCards()
    const propertyCards = document.getElementsByClassName("propertycards")

    for (let i = 0; i < propertyCards.length; i++) {
    
    propertyCards[i].style.display = "none"
    
    }


    let introPage = true;

if (introPage === true ){
  const buttonWrapper = document.getElementById("buttonwrapper")
  const mainContainer = document.getElementsByClassName("container")[0]
  const navBar = document.getElementById("buttonwrapper")
  const playerinterface = document.getElementsByClassName("interface")[0]
  mainContainer.style.display = "none"
  navBar.style.display = "flex"
  buttonWrapper.style.display = "none"
  playerinterface.style.display = "none"
}



for (let i = 0; i< introButtons.length; i++){

introButtons[i].addEventListener('click', function(e) {


  
  introPage = false
  
  if (introPage === false){
   const introPage =  document.getElementsByClassName("intropage")[0]
    introPage.style.display = "none"
    const mainContainer = document.getElementsByClassName("container")[0]
    const playerinterface = document.getElementsByClassName("interface")[0]
    const navBar = document.getElementById("buttonwrapper")
    mainContainer.style.display = "grid"
    navBar.style.display = "flex"
    playerinterface.style.display ="grid"
  }

})

}


}