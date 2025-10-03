import config from "../../config"
import { displayTitle } from "../../utils/UATitle"

register("chat", () => {
    if (!config().slayerFailed) return
    setTimeout(() => {
        displayTitle(50, 4, "&c&lStart new slayer quest", 80)
    }, 2000)
}).setCriteria(/(?:§.|.)*SLAYER QUEST FAILED!(?:§.|.)*/i)