import config from "../../config"
import sleep from "sleep"
import { displayTitle } from "../../utils/UATitle"
import { invCheck } from "../../utils/utils"

let tubaActive = false

register("actionBar", () => {
    if (!config().tubaAlert) return
    if (tubaActive) return

    const held = Player.getHeldItem()
    if (!held) return

    const item = held.getName?.() ?? ""
    tubaActive = true


    if (/.+Weirder.*Tuba/.test(item) == true) {
        sleep(30000, () => {
            tubaActive = false
            displayTitle(40, 5, "&5Tuba ran out", 80)
        })
    } else {            
        sleep(20000, () => {
        tubaActive = false
        displayTitle(40, 5, "&5Tuba ran out", 80)
    })
    }

}).setCriteria(/.+\(Howl\).+/)