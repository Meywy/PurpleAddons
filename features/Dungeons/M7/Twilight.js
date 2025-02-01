import Settings from "../../../config";
import { displayTitle } from "../../../utils/title";
import { ItemUtils, notePling } from "../../../utils/Utils";


register("chat", () => {
    if (!Settings.TwilightNotify) return
    if (ItemUtils.InvCheck("Twilight Arrow Poison")) return
    displayTitle(40, 5, `&5Get Twilight!`, 140)
    notePling = true
}).setCriteria("[BOSS] Necron: All this, for nothing...")
