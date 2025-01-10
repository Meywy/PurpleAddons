
import Settings from "../../config";
import { displayTitle } from "../../utils/title"
import { prefix, prefix2 } from "../../utils/Utils";
import { getClassOther } from "../../utils/player";
import { onChatPacket } from "../../../BloomCore/utils/Events";

// Variables \\
let goldorPhase = 0
let starti4Time = 0
let ssStartTimer = 0
export let i4 = {value: false}
export let inGoldor = {value: false}

// functions :3 \\
function i4IncompleteMsg() {
    if (Settings.i4) {
        displayTitle(40, 5, `&ci4 not done`, 80)
        ChatLib.chat(`${prefix} &4ci4 is not done`)
        ChatLib.command(`pc ${prefix2} i4 not done`)
    }
}

function i4DonedMsg(player, reminder = false) {
    if (Settings.i4) {
        displayTitle(40, 5, `&ai4 Completed`)
        ChatLib.chat(`${prefix} &ai4 Completed`)
        ChatLib.command(reminder ? `pc ${prefix2} i4 is completed` : `pc ${prefix2} i4 is completed by ${player}`)
    }
}

// goldor start \\
onChatPacket(() => {
    starti4Time = Date.now()
    ssStartTimer = Date.now()
    goldorPhase = 1
    inGoldor.value = true
    i4done.value = false
    setTimeout(() =>{
        if (i4done.value == true || inGoldor == false) {
            i4Incomplete()
        }
    }, 15000)
}).setCriteria("[BOSS] Goldor: Who dares trespass into my domain?")

// i4, ss logic \\
register("chat", (player, devTerm, numberOne, numberTwo) => {
    if ((numberOne == 7 && numberTwo == 7) || (numberOne == 8 && numberTwo == 8)) {
        goldorPhase = goldorPhase + 1
        if (goldorPhase == 4) {
            if (i4done.value == false) {
                i4IncompleteMsg();
            } else if (i4done.value == true) {
                i4DonedMsg("", true)
            }
        } else if (goldorPhase == 5) {
            inGoldor.value == false
        }
    }

    if (getClassOther(player)[0] == 'B' && Settings.i4 && !i4done.value && devTerm == "device") {
        if (Date.now()-starti4Time < 12000) {
            i4done.value = true
            starti4Time = 0
            i4DonedMsg(player, false)
            return
        }
    }

    if (devTerm != "device" || getClassOther(player)[0] == 'B') return
    if (Settings.SS && ssStartTimer) {
        let messageConstructor = new Message(new TextComponent(`${prefix} &fSS took &l${((Date.now()-ssStartTimer) / 1000).toFixed(2)}s`))
        messageConstructor.chat()
        ChatLib.command(`pc ${prefix} SS took ${((Date.now()-ssStartTimer) / 1000).toFixed(2)}s`)
        ssStartTimer = undefined
    }

}).setCriteria(/(\w{1,16}) (activated|completed) a (lever|device|terminal)! \((\d)\/((7|8))\)/)

register("worldUnload", () => {
    goldorPhase = 0
    starti4Time = 0
    ssStartTimer = 0
    i4done.value = false
    inGoldor.value = false
})