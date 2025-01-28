
import Settings from "../../../config";
import { displayTitle } from "../../../utils/title";
import { getClass } from "../../../utils/player";
import { registerWhen } from "../../../../BloomCore/utils/Utils";
import { onChatPacket } from "../../../../BloomCore/utils/Events";
import { notePling, prefix } from "../../../utils/Utils";

const wishMessages = [
    /⚠ Maxor is enraged! ⚠/,
    /\[BOSS\] Goldor: You have done it, you destroyed the factory… /
]

let playerClass = getClass(Player.getName())

registerWhen(onChatPacket(() => {
    if (playerClass[0] == "T") {
        if (Settings.tankUlt) {
            displayTitle(25, 5, "&a&lUlt!", 80)
            notePling.value = true
        }
    }

}).setCriteria("⚠ Maxor is enraged! ⚠"), () => Settings.tankUlt);

wishMessages.forEach((message) => {
    register("chat", () => {
        if (playerClass[0] != "H") return
        if (!Settings.healerWish) return
        displayTitle(25, 5, "&dWish!", 80)
        ChatLib.chat(`${prefix} &6Wish!`)
        notePling.value = true
    }).setCriteria(message)
    
})