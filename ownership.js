


export const occupiedSpace = () => {
 console.log("occupied space")
    if (landedOn.owner !== "The bank" && landedOn.spaceType !== "unique" ){
        console.log("working")
        usermessage[0].textContent = " You have landed on " + landedOn.name +
        ". It is currently owned by  " + landedOn.owner + ". $" + landedOn.rent +
        "  has been been taken out of your account"
        activePlayer.cash -= landedOn.rent 
        inactivePlayer.cash += landedOn.rent 
        
        buttonNo.style.display = "none"
        buttonYes.style.display ="none"
       okbutton.style.display = "block"
       
      }
}



export const vacantDisplay = () => {

    {
        usermessage[0].textContent = "You have landed on " + landedOn.name + "." +
        "This property is vacant! " + 
        " Do you want to buy it for "
        + landedOn.price + "$ ?"

       okbutton.style.display = "none"
        buttonYes.style.display = "block"
        buttonNo.style.display = "block "

        
       }

}