import Settings from "../Amaterasu/core/Settings"
import DefaultConfig from "../Amaterasu/core/DefaultConfig"

const defaultConf = new DefaultConfig("PurpleAddons", "data/settings.json")

    
    .addSwitch({
        category: "Dungeons",
        configName: "bloodDone",
        title: "Blood Done",
        description: "Announces when blood room is done",
    })
    .addSwitch({
        category: "Dungeons",
        configName: "bloodReady",
        title: "Blood Ready",
        description: "Announces when blood room is ready",
    })
    .addSwitch({
        category: "Dungeons",
        configName: "leapAnnoucement",
        title: "Leap Annoucement",
        description: "Announces who you leaped to",
    })
    .addSwitch({
        category: "Dungeons",
        subcategory: "M7",
        configName: "ragAxe",
        title: "Rag Axe",
        description: "Shows title when to cast rag in M7",
    })
    .addSwitch({
        category: "Dungeons",
        subcategory: "M7",
        configName: "stormCrush",
        title: "Storm Crush",
        description: "Shows title when storm is crushed",
    })
    .addSwitch({
        category: "Dungeons",
        subcategory: "M7",
        configName: "crystalAlert",
        title: "Crystal Alert",
        description: "Alerts you when you have energy crystal in your inventory",
    })
    .addSwitch({
        category: "Slayers",
        configName: "slayerFailed",
        title: "Slayer Reminder",
        description: "Reminds you to start a new slayer quest after failing one",
    })
    .addSwitch({
        category: "Mining",
        configName: "abilityAlert",
        title: "Ability Alert",
        description: "Alerts you when your ability is ready"
    })
    .addSwitch({
        category: "Mining",
        configName: "fetchurItems",
        title: "Fetchur Items",
        description: "Shows items u need to give to Fetchur",
    })
    .addSwitch({
        category: "Alerts",
        configName: "tubaAlert",
        title: "Tuba Alert",
        description: "Alerts you when Weird/er Tuba runs out"
    })
    .addSwitch({
        category: "Misc",
        configName: "noSelfieCam",
        title: "Remove Selfie Cam",
        description: "Disables selfie camera",
    })
    
const config = new Settings("PurpleAddons", defaultConf, "data/colorScheme.json", "PA Module Settings")
export default () => config.settings