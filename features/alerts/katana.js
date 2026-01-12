import config from "../../config"
import sleep from "sleep"
import { displayTitle } from "../../utils/UATitle"

let katanaActive = false

register("actionBar", () => {
    if (!config.katanaAlert) return
    if (katanaActive) return
    
    katanaActive = true

    sleep(4100, () => {
        katanaActive = false
        displayTitle(40, 5, "&5Katana expired", 80)
    })


}).setCriteria(/.+\(Soulcry\).+/)