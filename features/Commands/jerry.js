import { getSkyblockItemID, registerWhen } from "../../../BloomCore/utils/Utils"
import { prefix } from "../../utils/Utils"

register("command", () => {
    const stack = Player.getInventory().getItems().find(a => getSkyblockItemID(a) == "INFLATABLE_JERRY")

    if(!stack) {
        ChatLib.command(`gfs inflatable_jerry 64`, false)
        ChatLib.chat(`${prefix} &fGrabbed &b64 &fJerrys.`)
        return
    }
    
    const toGive = 64 - stack.getStackSize()
        if (toGive == 0) return
        ChatLib.command(`gfs inflatable_jerry ${toGive}`, false)
        ChatLib.chat(`${prefix} &fGrabbed &b${toGive} &fJerrys.`)
        
}).setName("ij").setAliases('jerry')


