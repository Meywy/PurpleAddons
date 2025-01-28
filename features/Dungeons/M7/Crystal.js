import Settings from "../../../config"
import { ItemUtils } from "../../../utils/Utils";
import { displayTitle } from "../../../utils/title";

register("renderOverlay", () => {
    if(!Settings.EnergyCrystalAlert) return;
    if(ItemUtils.InvCheck("Energy Crystal")){
       displayTitle(5, 5, `&5Place Crystal!`, 120)
    }
})