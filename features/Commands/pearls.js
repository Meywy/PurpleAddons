import { getSkyblockItemID, registerWhen } from "../../../BloomCore/utils/Utils"
import { prefix } from "../../utils/Utils"

register("command", () => {
    const stack = Player.getInventory().getItems().find(a => getSkyblockItemID(a) == "ENDER_PEARL")

    if(!stack) {
        ChatLib.command(`gfs ender_pearl 16`, false)
        return
    }
    
    const toGive = 16 - stack.getStackSize()
        if (toGive == 0) return
        ChatLib.command(`gfs ender_pearl ${toGive}`, false)
        ChatLib.chat(`${prefix} &fGrabbed &b${toGive} &fpearls`)
        
}).setName("pearls")


