import { spacesArray} from "./spaceObjects.js"
import * as players from "./PlayerFactory.js"

const cpuBuyProperty = () => {
   
    let landedOn = spacesArray[activePlayer.updatedlocation]
    if (players.activePlayer === players.player1 ){
        return
    }

    if (landedOn.owner !== players.player1 && landedOn.spaceType != "unique"){
        
    }
}