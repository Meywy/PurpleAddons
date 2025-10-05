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