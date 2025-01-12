
import Settings from "../../../config";
import { registerWhen } from "../../../../BloomCore/utils/Utils";
import { onChatPacket } from "../../../../BloomCore/utils/Events";
import { displayTitle } from "../../../utils/title";
import { notePling } from "../../../utils/Utils";

registerWhen(onChatPacket(() => {
    if (Settings.miningAbility) {
        displayTitle(40, 5, `&ePickobulus ready!`, 80)
        notePling.value = true
    }

}).setCriteria(/Pickobulus is now available!/), () => Settings.miningAbility);

registerWhen(onChatPacket(() => {
    if (Settings.miningAbility) {
        displayTitle(40, 5, `&eSpeed Boost ready!`, 80)
        notePling.value = true
    }

}).setCriteria(/Mining Speed Boost is now available!/), () => Settings.miningAbility);