import config from "../../config.js"

register("chat", (player, event) => {
    if(!config().leapAnnoucement) return
    ChatLib.chat(`pc Leaping to ${player}`)
    cancel(event)
}).setCriteria("You have teleported to ${player}")