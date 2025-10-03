import config from "../../config"
import { displayTitle } from "../../utils/UATitle"

register("chat", () => {
    if(!config().stormCrush) return
    displayTitle(25, 5, "&eCrushed!", 80)
}).setCriteria(/\[BOSS\] Storm: Oof|\[BOSS\] Storm: Ouch, that hurt!/)