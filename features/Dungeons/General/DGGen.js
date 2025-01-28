
import Settings from "../../../config";
import { notePling, prefix, prefix2, ItemUtils } from "../../../utils/Utils";
import { registerWhen } from "../../../../BloomCore/utils/Utils";
import { onChatPacket } from "../../../../BloomCore/utils/Events";
import { displayTitle } from "../../../utils/title";


// Variables \\
let hasOpened = false;


// Features \\
registerWhen(onChatPacket(() => {
    if (!Settings.autopot) return
        if (hasOpened) return
            ChatLib.chat(`${prefix} &aopening.`)
            ChatLib.command("pb")
            hasOpened = true;
}).setCriteria("Starting in 4 seconds."), () => Settings.autopot);

registerWhen(onChatPacket(() => {
    if (!Settings.bloodReady) return
        displayTitle(40, 5, `&cBlood ready!`, 80)
        ChatLib.command(`pc ${prefix2} Blood Ready!`)
        notePling.value = true
}).setCriteria("[BOSS] The Watcher: That will be enough for now."), () => Settings.bloodReady)

registerWhen(onChatPacket(() => {
    if (!Settings.bloodDone) return
        displayTitle(40, 5, `&cBlood Done!`, 80)
        ChatLib.command(`pc ${prefix2} Blood Done!`)
        notePling.value = true
}).setCriteria("[BOSS] The Watcher: You have proven yourself. You may pass."), () => Settings.bloodDone)

registerWhen(onChatPacket(() => {
    if (!Settings.stormCrush) return 
        displayTitle(25, 5, "&eCrushed", 80)
}).setCriteria(/\[BOSS\] Storm: Oof|\[BOSS\] Storm: Ouch, that hurt!/), () => Settings.stormCrush)

register(`worldUnload`, () => {
    hasOpened = false;
})