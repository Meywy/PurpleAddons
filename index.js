import Settings from "./config";
import { prefix, prefix2 } from "./utils/Utils"


// features
import "./features/Dungeons/QOL"
import "./features/Dungeons/Devices"


// to open the config gui use the "openGUI" function
register("command", () => Settings.openGUI()).setName("purpleaddons").setAliases("pa").setAliases("purpa").setAliases("padds").setAliases("paddons");
