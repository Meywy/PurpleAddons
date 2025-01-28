import Settings from "./config";
import axios from "../axios";
import { getDataJson, prefix } from "./utils/Utils";

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


register("command", () => Settings.openGUI()).setName("purpleaddons").setAliases("pa").setAliases("purpa").setAliases("padds").setAliases("paddons");

data = getDataJson
const version = JSON.parse(FileLib.read("PurpleAddons", "metadata.json")).version

if(data.data.firstLoad){
    setTimeout(() => {
        ChatLib.chat(`\n${prefix}\n&aThanks for using PurpleAddons!\n&aIf you have any suggestions or bugs, please open issue request on github\n&aUsage: /pa\n`);
        data.data.firstLoad = false
        data.data.last_version = version
        data.save()
    }, 300)
}

let ctNoti = false
register("worldLoad", () => {
    if (ctNoti) return
    axios.get(`https://chattriggers.com/api/modules/purpleaddons`)
    .then(res => {
        let changes = res.data.releases[0].changelog.toString().replaceAll("\r", "")
        const newVer = res.data.releases[0].releaseVersion
        if (data.data.last_version !== version) {
            if (data.data.last_version === undefined) return
            ChatLib.chat(`\n${prefix}\n&5PurpAdds has updated! &ev${data.data.last_version} ➜ v${version}`)
            data.data.last_version = version
            data.save()
            ctNoti = true;
        } else {
            // NWJN || https://www.chattriggers.com/modules/v/NwjnAddons
                if (newVer == version) return;
                if (version.includes("pre")) return;
                
                if (newVer != version) {
                    ChatLib.chat(`\n${prefix}\n&aPurpAdds has new update! &2v${version} ➜ v${newVer}\n&eChangelog:\n${changes}`)
                    new TextComponent(`&a&lClick here to update!\n`)
                    .setClickAction("run_command")
                    .setClickValue(`/ct load`)
                    .chat()
                    ctNoti = true;
                }
            //
        }
    })
})
