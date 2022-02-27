const communityCards = document.getElementsByClassName("communitycards")
const character = document.createElement("img")
character.classList = "guy"

character.src = "character.png"

export function generateCommunityCards  (){
    for (let i = 0; i<10 ; i++){
      
      const communityCards = document.createElement("div")
        communityCards.classList = "communitycards"
      const modalContent = document.getElementsByClassName("modal-content")[0]
      modalContent.appendChild(communityCards)
      communityCards.style.display = "none"
     
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
        communityCards[9].innerText = " You won $ 50 from a hotdog eating contest. Collect $50"
       
  }