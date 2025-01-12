
import Settings from "../../../config";
import { displayTitle } from "../../../utils/title";
import { getClass } from "../../../utils/player";
import { registerWhen } from "../../../../BloomCore/utils/Utils";
import { onChatPacket } from "../../../../BloomCore/utils/Events";
import { notePling, prefix2 } from "../../../utils/Utils";

registerWhen(onChatPacket(() => {
    
    let playerClass = getClass(Player.getName())
    if (playerClass[0] == "H") {
        if (Settings.healerWish) {
            displayTitle(25, 5, "&6&lWish!", 80)
            ChatLib.chat(prefix2 + "&6Wish!")
            notePling.value = true
        }
    } else if (playerClass[0] == "T") {
        if (Settings.tankUlt) {
            displayTitle(25, 5, "&a&lUlt!", 80)
            notePling.value = true
        }
    }

}).setCriteria("⚠ Maxor is enraged! ⚠"), () => Settings.healerWish || Settings.tankUlt);