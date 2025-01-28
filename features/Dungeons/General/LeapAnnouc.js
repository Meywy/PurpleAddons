import Settings from "../../../config"

register("chat", (player, event) => {
    if (!Settings.leapAnnouce) return
    ChatLib.command(`pc Leaping to ${player}`);
    cancel(event);

}).setCriteria("You have teleported to ${player}");