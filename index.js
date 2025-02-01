import Settings from "./config";
import axios from "../axios";
import { getDataJson, prefix, line } from "./utils/Utils";

// features
import "./features/Dungeons/General/DGGen"
import "./features/Dungeons/HealerAndTank/HealerAndTank"
import "./features/Dungeons/M7/Twilight"
import "./features/Mining/General/MiningGen"
import "./features/Misc/CleanChat"
import "./features/Dungeons/M7/Rag"
import "./features/Dungeons/General/LeapAnnouc"
import "./features/Dungeons/M7/Crystal"

// register the commands
import "./features/Commands/pearls"
import "./features/Commands/leaps"
import "./features/Commands/instanceJoin"
import "./features/Commands/jerry"

data = getDataJson
const version = JSON.parse(FileLib.read("PurpleAddons", "metadata.json")).version
let updateNoti = false

register("command", (arg) => {
    switch (arg) {
        case undefined:
            Settings.openGUI();
            break;
        case 'help':
            ChatLib.chat(line)
            ChatLib.chat(ChatLib.getCenteredText(`${prefix} &5Command List`))
            ChatLib.chat(line)
            ChatLib.chat('')
            ChatLib.chat("&d/pa (/purpadds, /purp, /chloricisbad, /purpleaddons) &f- Opens Settings GUI.")
            ChatLib.chat("&d/pearls (/ep) &f- Gets Ender Pearls from your sack.")
            ChatLib.chat("&d/sp &f- Spirit Leaps from your sack.")
            ChatLib.chat("&d/ij (/jerry) &f- Inflatable Jerry from your sack.")
            ChatLib.chat("&d/f [1-7] &f- Enters dungeon floor")
            ChatLib.chat("&d/m [1-7] &f- Enters mastermode floor")
            ChatLib.chat("&d/k [1-5] &f- Enters kuudra")
            break;
    }

}).setName("pa").setAliases('purpadds', 'purp', 'chloricisbad', 'purpleaddons')

if(data.data.firstLoad){
    setTimeout(() => {
        ChatLib.chat(`\n${prefix}\n&aThanks for using PurpleAddons!\n&aIf you have any suggestions or bugs, please open issue request on github\n&aUsage: /pa\n`);
        data.data.firstLoad = false
        data.data.last_version = version
        data.save()
    }, 300)
}

register("worldLoad", () => {
    if (updateNoti) return
    axios.get(`https://chattriggers.com/api/modules/purpleaddons`)
    .then(res => {
        const newVer = res.data.releases[0].releaseVersion
        if (data.data.last_version !== version) {
            if (data.data.last_version === undefined) return
            ChatLib.chat(`\n${line}`)
            ChatLib.chat(ChatLib.getCenteredText(prefix))
            ChatLib.chat(`${line}\n&aUpdate completed! &ev${data.data.last_version} -> v${version}`)
            data.data.last_version = version
            data.save()
            updateNoti = true;
        } else {
            // NWJN || https://www.chattriggers.com/modules/v/NwjnAddons
                if (newVer == version) return;
                if (newVer != version) {
                    ChatLib.chat(`\n${line}`)
                    ChatLib.chat(ChatLib.getCenteredText(prefix))
                    ChatLib.chat(line)
                    ChatLib.chat(ChatLib.getCenteredText(`&aNew update! &2v${version} -> v${newVer}`))
                    new TextComponent(ChatLib.getCenteredText(`&a&lClick here to update!\n`))
                    .setClickAction("run_command")
                    .setClickValue(`/ct load`)
                    .chat()
                    updateNoti = true;
                }
            //
        }
    })
})