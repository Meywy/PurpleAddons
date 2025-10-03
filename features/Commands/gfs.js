import { getSkyblockItemID, registerWhen } from "../../../BloomCore/utils/Utils"
import { prefix } from "../../utils/utils"

// Inflatable Jerrys
register("command", () => {
    const jerryStack = Player.getInventory().getItems().find(a => getSkyblockItemID(a) == "INFLATABLE_JERRY")

    if(!jerryStack) {
        ChatLib.command(`gfs inflatable_jerry 64`, false)
        ChatLib.chat(prefix(`&fGrabbed &b64 &fJerrys.`))
        return
    }
    
    const toGive = 64 - jerryStack.getStackSize()
        if (toGive == 0) return
        ChatLib.command(`gfs inflatable_jerry ${toGive}`, false)
        ChatLib.chat(prefix(`&fGrabbed &b${toGive} &fJerrys.`))
        
}).setName("ij").setAliases('jerry')

// Sirit Leaps
register("command", () => {
    const leapsStack = Player.getInventory().getItems().find(a => getSkyblockItemID(a) == "SPIRIT_LEAP")

    if(!leapsStack) {
        ChatLib.command(`gfs spirit_leap 16`, false)
        ChatLib.chat(prefix("&fGrabbed &b16 &fleaps."))
        return
    }
    
    const toGive = 16 - leapsStack.getStackSize()
        if (toGive == 0) return
        ChatLib.command(`gfs spirit_leap ${toGive}`, false)
        ChatLib.chat(prefix(`&fGrabbed &b${toGive} &fleaps.`))
        
}).setName("sp")

// Ender Pearls
register("command", () => {
    const pearlStack = Player.getInventory().getItems().find(a => getSkyblockItemID(a) == "ENDER_PEARL")

    if(!pearlStack) {
        ChatLib.command(`gfs ender_pearl 16`, false)
        ChatLib.chat(prefix(`&fGrabbed &b16 &fpearls.`))
        return
    }
    
    const toGive = 16 - pearlStack.getStackSize()
        if (toGive == 0) return
        ChatLib.command(`gfs ender_pearl ${toGive}`, false)
        ChatLib.chat(prefix(`&fGrabbed &b${toGive} &fpearls.`))
        
}).setName("pearls").setAliases('ep')

