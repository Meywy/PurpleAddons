import config from "../../config"
import { displayTitle } from "../../utils/UATitle"
import { notePling, prefix2 } from "../../utils/utils"

register("chat", () => {
    if(!config().bloodDone) return
    displayTitle(40, 5, "&cBlood done!", 120)
    notePling.value = true
    ChatLib.command(`pc ${prefix2} Blood Done!`)

}).setCriteria(/\[BOSS\] The Watcher: You have proven yourself. You may pass\./)

register("chat", () => {
    if(!config().bloodReady) return
    displayTitle(40, 5, "&cBlood Ready!", 120)
    notePling.value = true
    ChatLib.command(`pc ${prefix2} Blood Ready!`)

}).setCriteria(/\[BOSS\] The Watcher: That will be enough for now\./)