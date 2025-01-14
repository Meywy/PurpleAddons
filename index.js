import Settings from "./config";
import { getDataJson, prefix } from "./utils/Utils";

// features
import "./features/Dungeons/General/DGGen"
import "./features/Dungeons/Device/DGDevs"
import "./features/Dungeons/HealerAndTank/HealerAndTank"
import "./features/Mining/General/MiningGen"
import "./features/Misc/CleanChat"


// to open the config gui use the "openGUI" function
register("command", () => Settings.openGUI()).setName("purpleaddons").setAliases("pa").setAliases("purpa").setAliases("padds").setAliases("paddons");

data = getDataJson

if(data.data.firstLoad){
    setTimeout(() => {
        ChatLib.chat(`\n${prefix.replace(">", "")}\n&aThanks for using PurpleAddons!\n&aIf you have any suggestions or bugs, please open issue request on github\n&aUsage: /pa\n`)
        data.data.firstLoad = false
        data.save()
    }, 300)
}