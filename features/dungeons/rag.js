import config from '../../config'
import { displayTitle } from '../../utils/UATitle'
import { notePling } from '../../utils/utils'

register("chat", () => {
    if(!config().ragAxe) return

    displayTitle(40, 5, "&6RAG now!", 120)
    notePling.value = true
}).setCriteria(/\[BOSS\] Wither King: I no longer wish to fight, but I know that will not stop you\./)