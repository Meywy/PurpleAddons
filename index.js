import Settings from "./config";
import axios from "../axios";
import { getDataJson, prefix, line } from "./utils/Utils";

// features
import "./features/Dungeons/General/DGGen"
import "./features/Dungeons/Device/HidePlayers"
import "./features/Dungeons/HealerAndTank/HealerAndTank"
import "./features/Dungeons/M7/Twilight"
import "./features/Mining/General/MiningGen"
import "./features/Misc/CleanChat"
import "./features/Dungeons/M7/Rag"
import "./features/Dungeons/General/LeapAnnouc"
import "./features/Dungeons/M7/Crystal"
import "./features/Dungeons/M7/ArrowStack"
import "./features/Dungeons/M7/DebuffWaypoints"

// register the commands
import "./features/Commands/pearls"
import "./features/Commands/leaps"

data = getDataJson
const version = JSON.parse(FileLib.read("PurpleAddons", "metadata.json")).version
let updateNoti = false

register("command", () => Settings.openGUI()).setName("purpleaddons").setAliases("pa").setAliases("purpa").setAliases("padds").setAliases("paddons");

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