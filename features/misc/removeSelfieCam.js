import config from "../../config";

let pressedKey = false
const getSettings = () => Client.getMinecraft().field_71474_y

register("tick", () => {
    if (!config().noSelfieCam) return
    try {
        const settings = Client.settings.getSettings()
        const mode = settings.field_74320_O // 0 = first, 1 = third back, 2 = selfie
        if (mode === 2) {
            settings.field_74320_O = 0
            return
        }

        const key = settings.field_151457_aa.func_151463_i()
        const keyDown = Keyboard.isKeyDown(key)

        // if in third-person back, jump to selfie
        if (keyDown && !pressedKey) {
            if (mode === 1) settings.field_74320_O = 2
            pressedKey = true
            return
        }

        if (!keyDown && pressedKey) pressedKey = false
    } catch (err) {
        const settings = getSettings()
        if (settings.field_74320_O === 2) settings.field_74320_O = 0
    }
})