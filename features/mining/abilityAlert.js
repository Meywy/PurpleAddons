import config from "../../config"
import { notePling } from "../../utils/utils"
import { displayTitle } from "../../utils/UATitle"

const abilities = [
    { name: "Pickobulus" },
    { name: "Mining Speed Boost" },
    { name: "Maniac Miner" },
    { name: "Tunnel Vision" },
    { name: "Sheer Force" },
    { name: "Gemstone Infusion" }
]

abilities.forEach(({ name }) => {
    register("chat", () => {
        if (!config().abilityAlert) return
        displayTitle(40, 5, `&e${name} ready!`, 80)
        notePling.value = true
    }).setCriteria(new RegExp(`${name} is now available!`))
})
