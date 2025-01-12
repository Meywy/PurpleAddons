import Settings from "./config";


// features
import "./features/Dungeons/General/DGGen"
import "./features/Dungeons/Device/DGDevs"
import "./features/Dungeons/HealerAndTank/HealerAndTank"
import "./features/Mining/General/MiningGen"


// to open the config gui use the "openGUI" function
register("command", () => Settings.openGUI()).setName("purpleaddons").setAliases("pa").setAliases("purpa").setAliases("padds").setAliases("paddons");
