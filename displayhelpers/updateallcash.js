import * as players from "../PlayerFactory.js"


export const updateAllCash = () => {

    const oneplayercash = document.getElementsByClassName("cash1")[0]
const threeplayercash = document.getElementsByClassName("cash3")[0]
const fourplayercash = document.getElementsByClassName("cash4")[0]
const twoplayercash = document.getElementsByClassName("cash2")[0]


twoplayercash.textContent = "$" + players.CPUPlayer.cash 
oneplayercash.textContent = "$" + players.player1.cash 
threeplayercash.textContent ="$" +  players.CPUPlayer2.cash
fourplayercash.textContent = "$" +  players.CPUPlayer3.cash

}