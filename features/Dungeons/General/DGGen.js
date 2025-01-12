
import Settings from "../../../config";
import { notePling, prefix, prefix2 } from "../../../utils/Utils";
import { registerWhen } from "../../../../BloomCore/utils/Utils";
import { onChatPacket } from "../../../../BloomCore/utils/Events";
import { displayTitle } from "../../../utils/title";


// Variables \\
let hasOpened = false;


// Features \\
registerWhen(onChatPacket(() => {
    if (Settings.autopot) {
        if (!hasOpened) {
            ChatLib.chat(`${prefix} &aopening.`)
            ChatLib.command("pb")
            hasOpened = true;
        }
    }
}).setCriteria("Starting in 4 seconds."), () => Settings.autopot);

registerWhen(onChatPacket(() => {
    if (Settings.bloodReady) {
        displayTitle(40, 5, `&cBlood ready!`, 80)
        ChatLib.command(`pc ${prefix2} Blood Ready!`)
        notePling.value = true
    }
}).setCriteria("[BOSS] The Watcher: That will be enough for now."), () => Settings.bloodReady)

registerWhen(onChatPacket(() => {
    if (Settings.bloodDone) {
        displayTitle(40, 5, `&cBlood Done!`, 80)
        ChatLib.command(`pc ${prefix2} Blood Done!`)
        notePling.value = true
    }
}).setCriteria("[BOSS] The Watcher: You have proven yourself. You may pass."), () => Settings.bloodDone)

registerWhen(onChatPacket(() => {
    if (Settings.stormCrush) {
        displayTitle(25, 5, "&eCrushed", 80)
    }
}).setCriteria("[BOSS] Storm: Ouch, that hurt!" || "[BOSS] Sorm: Oof"), () => Settings.stormCrush)

register(`worldUnload`, () => {
    hasOpened = false;
})
