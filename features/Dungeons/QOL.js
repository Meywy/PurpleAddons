
import Settings from "../../config";
import { prefix } from "../../utils/Utils";
import { registerWhen } from "../../../BloomCore/utils/Utils";
import { onChatPacket } from "../../../BloomCore/utils/Events";


// Variables \\
let hasOpened = false;


// Features \\
registerWhen(onChatPacket(() => {
    if (Settings.autopot) {
        ChatLib.chat(`${prefix} this shouls show in chat`);

        if (!hasOpened) {
            ChatLib.chat(prefix + "&aopening.")
            ChatLib.command("pb")
            hasOpened = true;
        }
    }
}).setCriteria("Starting in 4 seconds."), () => Settings.autopot);

registerWhen(onChatPacket(() => {
    if (Settings.bloodReady) {
        Client.showTitle("&cBlood Ready!", "", 0, 70, 0)
            ChatLib.command(`pc ${prefix2} Blood Ready!`)
    }
}).setCriteria("[BOSS] The Watcher: That will be enough for now."), () => Settings.bloodReady)

registerWhen(onChatPacket(() => {
    if (Settings.bloodDone) {
        Client.showTitle("&cBlood Done!", "", 0, 70, 0)
        ChatLib.command(`pc ${prefix2} Blood Done!`)
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
