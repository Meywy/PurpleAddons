import data from "../data_"
import { line } from "./utils"

register("step", () => {
    if (!data.firstLoad) return
    data.firstLoad = false
    data.save()
    ChatLib.chat(line)
    ChatLib.chat("&5PurpleAddons loaded!")
    ChatLib.chat(" ")
    ChatLib.chat("&dPrefix for config is /pa")
    ChatLib.chat(line)

}).setFps(1)