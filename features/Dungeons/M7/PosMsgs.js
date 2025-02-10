import Settings from "../../../config"
import { onChatPacket } from "../../../../BloomCore/utils/Events";

const announcedLocations = new Set();
const goldorStart = false;

onChatPacket(() => {
    goldorStart = true;    
}).setCriteria(/^\[BOSS\] Goldor: Who dares trespass into my domain\?$/)


register("step", () => {
    if (!Settings.posMsgs && !goldorStart) return;

    const x = Player.getX();
    const y = Player.getY();
    const z = Player.getZ();

    const locations = [
        { name: "Simon Says", condition: x > 108 && x < 111 && y == 120 && z > 93 && z < 95 },
        { name: "Early Enter 2", condition: x > 49 && x < 58 && y == 109 && z > 130 && z < 131 },
        { name: "Early Enter 3", condition: x > 1 && x < 3 && y == 109 && z > 98 && z < 106 },
        { name: "Early Enter 4", condition: x > 39 && x < 42 && y == 109 && z > 34 && z < 36 },
        { name: "Core", condition: x > 54 && x < 55 && y == 115 && z > 50 && z < 53 },
        { name: "Mid", condition: x > 47 && x < 62 && y == 65 && z > 69 && z < 84 }
    ];

    locations.forEach(({ name, condition }) => {
        if (condition && !announcedLocations.has(name)) {
            announcedLocations.add(name);
            ChatLib.command(`pc At ${name}`);

            // Optional chat messages
        /*  if (name === "Simon Says") ChatLib.chat(`ss test`);
            if (name === "Early Enter 2") ChatLib.chat(`ee 2test`);
            if (name === "Early Enter 3") ChatLib.chat(`test`);
            if (name === "Early Enter 4") ChatLib.chat(`ee 4test`);
            if (name === "Core") ChatLib.chat(`core test`);
            if (name === "Mid") ChatLib.chat(`mid test`); 
        */
        }
    });

}).setDelay(1);

register("worldUnload", () => {
    goldorStart = false;
})