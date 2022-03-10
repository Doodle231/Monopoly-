
const playerContainer =  document.getElementsByClassName("playercontainer")

export const generateUIproperty =()=> {
    
    for (let i = 0; i < 30; i++) {
        const smallCard = document.createElement("div")
        const cardHead = document.createElement("div")
        const cardBody = document.createElement("div")
        
        
        smallCard.classList = "smallCard1"
        cardHead.classList = "cardhead"
        cardBody.classList = "cardbody"

        let cardContainer = document.getElementsByClassName("cardcontainer")
       smallCard.appendChild(cardHead)
        smallCard.appendChild(cardBody)
    cardContainer[0].appendChild(smallCard)




}

for (let i = 0; i < 30; i++) {
    const smallCard = document.createElement("div")
    const cardHead = document.createElement("div")
    const cardBody = document.createElement("div")
  
    smallCard.classList = "smallCard2"
    cardHead.classList = "cardhead"
    cardBody.classList = "cardbody"

    let cardContainer = document.getElementsByClassName("cardcontainer")

   smallCard.appendChild(cardHead)
    smallCard.appendChild(cardBody)
//playerContainer[1].appendChild(smallCard)
cardContainer[1].appendChild(smallCard)

}

for (let i = 0; i < 30; i++) {
    const smallCard = document.createElement("div")
    const cardHead = document.createElement("div")
    const cardBody = document.createElement("div")
    
    smallCard.classList = "smallCard3"
    cardHead.classList = "cardhead"
    cardBody.classList = "cardbody"
    let cardContainer = document.getElementsByClassName("cardcontainer")

   smallCard.appendChild(cardHead)
    smallCard.appendChild(cardBody)
cardContainer[2].appendChild(smallCard)


}

for (let i = 0; i < 30; i++) {
    const smallCard = document.createElement("div")
    const cardHead = document.createElement("div")
    const cardBody = document.createElement("div")
    
    smallCard.classList = "smallCard4"
    cardHead.classList = "cardhead"
    cardBody.classList = "cardbody"
    let cardContainer = document.getElementsByClassName("cardcontainer")

   smallCard.appendChild(cardHead)
    smallCard.appendChild(cardBody)
cardContainer[3].appendChild(smallCard)


}


}



export const displaySmallPropertyCards = () =>{







}