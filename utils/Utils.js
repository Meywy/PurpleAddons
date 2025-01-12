import { registerWhen } from "../../BloomCore/utils/Utils";

export const prefix = "&5PurpleAddons &a>&r"
export const prefix2 = "PurpleAddons >"
export const line = "&m-".repeat(ChatLib.getChatWidth() / 6);

// Credit: UA
export let notePling = { value: false }
registerWhen(register("step", () => {
    if (notePling.value) {
        World.playSound("note.pling", 1.0, 2.0)
        notePling.value = false
    }
}), () => notePling)

export const getDataJson = new PogObject('PurpleAddons', {
    data: {
        firstLoad: true
    }
}, data.json)