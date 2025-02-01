import { registerWhen } from "../../BloomCore/utils/Utils";
import PogObject from "../../PogData";

export const prefix = "&f[&5PurpleAddons&f]&r"
export const prefix2 = "[PurpleAddons]"
export const line = ChatLib.getChatBreak(`&m-`);

export let notePling = { value: false }
registerWhen(register("step", () => {
    if (notePling.value) {
        World.playSound("note.pling", 1.0, 2.0)
        notePling.value = false
    }
}), () => notePling)

export const getDataJson = new PogObject('PurpleAddons', {
    data: {
        firstLoad: true,
        last_version: undefined
    }
}, "data.json")


export class ItemUtils {
    /**
         * Used to check if the inventory contains a certain item
         * @param {string} name
         * @return {boolean}
         */
    static InvCheck(name) {
        return Player.getInventory().getItems().find(a => a?.getName()?.includes(name))
    }
}