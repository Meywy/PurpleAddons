import config from "../../config"
import { displayTitle } from "../../utils/UATitle"
import { prefix } from "../../utils/utils"

const fetchurItems = {
    "theyre expensive minerals": "20x Mithril",
    "its tall and can be opened": "1x Iron Door or Wood Door",
    "theyre red and soft": "50x Red Wool",
    "its shiny and makes sparks": "1x Flint and Steel",
    "its hot and gives energy": "1x Cheap Coffee, Decent Coffee or Black Coffee",
    "theyre yellow and see through": "20x Yellow Stained Glass",
    "its useful during celebrations": "1x Firework Rocket",
    "its circular and sometimes moves": "1x Compass",
    "its wearable and grows": "1x Pumpkin",
    "theyre brown and fluffy": "3x Rabbit's Foot",
    "its explosive, more than usual": "1x Superboom TNT",
    "theyre green and some dudes trade stuff for it": "50x Emerald"
}

register("chat", (message) => {
    if (!config().fetchurItems) return

    let msg = message.trim()
    let found = fetchurItems[msg]

    if (found) {
        setTimeout(()=> {
            displayTitle(50, 2, `&eFetchur needs: &6${found}`, 80)
            prefix(`&aFetchur needs: &6${found}`)
        }, 2000)
        
    }
}).setCriteria(/^\[NPC] Fetchur: (.+)$/i)