

export const updateSmallRailRoadCards = (railroadindexes) => { 
    const rent1 = document.getElementsByClassName("mobileonehouse")
    const rent2 = document.getElementsByClassName("mobiletwohouses")
    const rent3 = document.getElementsByClassName("mobilethreehouses")
    const rent4 = document.getElementsByClassName("mobilefourhouses")

    rent1[railroadindexes].textContent = "Rent with one Rail Road $25"
    rent2[railroadindexes].textContent = "Rent with two Rail Roads $50"
    rent3[railroadindexes].textContent = "Rent with three Rail Roads $100"
    rent4[railroadindexes].textContent = "Rent with two Rail Roads $200"

} 

export const updateUtilityCards = () => { 
    const electricRent = document.getElementsByClassName("mobilerents")[12]
    electricRent.textContent = "Rent price is 4x the value of dice rolled if one utility is owned and 8x the value of the dice rolled if two utilities are owned"

    const waterWorksRent =  document.getElementsByClassName("mobilerents")[28]
    waterWorksRent.textContent = "Rent price is 4x the value of dice rolled if one utility is owned and 8x the value of the dice rolled if two utilities are owned"


}