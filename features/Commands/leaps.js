import { getSkyblockItemID, registerWhen } from "../../../BloomCore/utils/Utils"
import { prefix } from "../../utils/Utils"

register("command", () => {
    const stack = Player.getInventory().getItems().find(a => getSkyblockItemID(a) == "SPIRIT_LEAP")

    if(!stack) {
        ChatLib.command(`gfs spirit_leap 16`, false)
        ChatLib.chat(`${prefix} &fGrabbed &b16 &fleaps.`)
        return
    }
    
    const toGive = 16 - stack.getStackSize()
        if (toGive == 0) return
        ChatLib.command(`gfs spirit_leap ${toGive}`, false)
        ChatLib.chat(`${prefix} &fGrabbed &b${toGive} &fleaps.`)
        
}).setName("sp")


