import Settings from "../../../config"
import { displayTitle } from "../../../utils/title"
import { notePling } from "../../../utils/Utils"

register("chat", () => {
    if(!Settings.ragAxe) return
    displayTitle(20, 5, `&6Rag now`, 120);
    notePling = true;
}).setCriteria("[BOSS] Wither King: I no longer wish to fight, but I know that will not stop you.");