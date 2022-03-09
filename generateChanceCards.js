export function generateChanceCards() {



    for (let i = 0; i<10 ; i++){
      
      const chanceCards = document.createElement("div")
      chanceCards.classList = "chancecards"
      const modalContent = document.getElementsByClassName("modal-content")[0]
      modalContent.appendChild(chanceCards)
      chanceCards.style.display = "none"
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