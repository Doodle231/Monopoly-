let interfaceExpandButton = document.getElementById("expandinteracebtn")
let UIinterface = document.getElementsByClassName("interface")[0]

 export const expandInterface = interfaceExpandButton.addEventListener('click', function() {

  
  UIinterface.classList.toggle("active")
  })
  
  