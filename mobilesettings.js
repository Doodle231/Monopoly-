export const initializeMobileSettingsDisplays = () => {

let mobilePlayerDisplays = document.getElementById("mobileplayerdisplay")

let playerContainer = document.getElementsByClassName("playercontainer")
mobilePlayerDisplays.addEventListener('click', function() {


  for (let i = 0; i < playerContainer.length; i++) {
playerContainer[i].style.display ="block"

  }

  let playerInterface = document.getElementsByClassName("interface")[0]

  playerInterface.style.display ="block"
  
})

}