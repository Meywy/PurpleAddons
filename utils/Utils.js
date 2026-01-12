import PogObject from "../../PogData"

export const prefix2 = "[PurpleAddons]"

/** 
 * Used to send a messag with prefix
 * @param {string} msg
*/
export function prefix(msg) {
    ChatLib.chat(`&5[&dPurpleAddons&5]&r ${msg}`)
}


export const line = ChatLib.getChatBreak("&m-")

export const getDataJson = new PogObject("PurpleAddons",  {
    data: {
    firstLoad: true,
    last_version: undefined
    }
}, "data_.json")

/**
 * Used to play notePling sound
 * @type {{value: boolean}}
 */
export let notePling = { value: false }

register("step", () => {
    if(notePling.value) {
        World.playSound("note.pling", 1.0, 2.0)
        notePling.value = false
    }
})

export function invCheck(item) {
    Player.getInventory().getItems().find(a => a?.getName())?.includes(item)
}

export function extractChatPlayerName(message) {
    const colonIndex = message.indexOf(":")
    if (colonIndex === -1) return null

    const header = message.substring(0, colonIndex).trim()
    const withoutChannel = header.replace(/^(?:Party|Guild|Officer|Co-op|Dungeon|Shout|All|From|To) >\s*/i, "")
    const withoutRanks = withoutChannel.replace(/\[[^\]]+\]\s*/g, "").trim()
    const playerMatch = withoutRanks.match(/([A-Za-z0-9_]{1,16})$/)
    return playerMatch ? playerMatch[1] : null
}

export function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}