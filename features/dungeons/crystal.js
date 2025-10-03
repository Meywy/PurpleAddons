import config from "../../config"
import { displayTitle } from "../../utils/UATitle"

register("renderOverlay", () => {
    if(!config().crystalAlert) return
    if(Player.getInventory().getItems().find(a => a?.getName()?.includes("Energy Crystal"))) {
        displayTitle(5, 5, "&5Place Crystal!", 120)
    }
})