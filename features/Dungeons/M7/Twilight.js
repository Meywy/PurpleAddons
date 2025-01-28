import Settings from "../../../config";
import { displayTitle } from "../../../utils/title";
import { ItemUtils } from "../../../utils/Utils";


register("chat", () => {
    if (!Settings.TwilightNotify) return
    if (ItemUtils.InvCheck("Twilight Arrow Poison")) return
    displayTitle(20, 5, `&5Get Twilight!`, 140)
}).setCriteria("[BOSS] Necron: All this, for nothing...")
