import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, Color } from 'Vigilance';

const version = JSON.parse(FileLib.read("PurpleAddons", "metadata.json")).version
@Vigilant("PurpleAddons", `PurpleAddons v${version}`, {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General", "Dungeons", "Mining", "Misc"];
        console.log("Comparing:", a.name, b.name);
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})

class Settings {

    eelocationgui = new Gui()
    

    // General \\
    @ButtonProperty({
        name: "Github",
        description: "Star my repo, thanks :3",
        category: "General",
        subcategory: "Star :3",
        placeholder: "Click!"
    })
    githubButtonAction() {
        java.awt.Desktop.getDesktop().browse(new java.net.URI(`https://github.com/Meywy/PurpleAddons`));
    }

    // Dungeons \\
    @SwitchProperty({
        name: "Auto Potion",
        description: "Automatically opens potion bag on start of the run",
        category: "Dungeons",
        subcategory: "General",
    })
    autopot = false;
    @SwitchProperty({
        name: "Blood Ready",
        description: "Notify when blood mobs spawned",
        category: "Dungeons",
        subcategory: "General",
    })
    bloodReady = false;
    @SwitchProperty({
        name: "Blood Done",
        description: "Notify when blood is done",
        category: "Dungeons",
        subcategory: "General",
    })
    bloodDone = false;
    @SwitchProperty({
        name: "Crush notify",
        description: "Notify when storm is crushed",
        category: "Dungeons",
        subcategory: "General"
    })
    stormCrush = false;
    @SwitchProperty({
        name: "Energy Crystal Alert",
        description: "Alerts when you have to place energy crystal",
        category: "Dungeons",
        subcategory: "M7"
    })
    EnergyCrystalAlert = false;
    @SwitchProperty({
        name: "Hide Players",
        description: "Hides players at dev",
        category: "Dungeons",
        subcategory: "Devices"
    })
    hidePlayers = false;
    @SwitchProperty({
        name: "Wish",
        description: "Annouces when to wish in F7/M7",
        category: "Dungeons",
        subcategory: "Heal and Tonk"
    })
    healerWish = false;
    @SwitchProperty({
        name: "Tank Ult",
        description: "Annouces when to ult",
        category: "Dungeons",
        subcategory: "Heal and Tonk"
    })
    tankUlt = false;
    @SwitchProperty({
        name: "Twilight Notify",
        description: "Notifies when twilight arrow poison is needed",
        category: "Dungeons",
        subcategory: "M7"
    })
    TwilightNotify = false;
    @SwitchProperty({
        name: "Rag",
        description: "Tells when rag casts",
        category: "Dungeons",
        subcategory: "M7"
    })
    ragAxe = false;
    @SwitchProperty({
        name: "Leap Annoucemet",
        description: "Annouces on leap",
        category: "Dungeons",
        subcategory: "General"
    })
    leapAnnouce = false;
    @SwitchProperty({
        name: "Debuff waypoints",
        description: "waypoints for debuff",
        category: "Dungeons",
        subcategory: "M7"
    })
    debuffWp = false;
    @SwitchProperty({
        name: "ArrowStack waypoints",
        description: "waypoints for arrow stack",
        category: "Dungeons",
        subcategory: "General"
    })
    ArrowStackWayPoints = false;
    @SwitchProperty({
        name: "PosMsgs",
        category: "Dungeons",
        subcategory: "M7"
    })
    posMsgs = false;

    // Mining \\
    @SwitchProperty({
        name: "Mining Ability",
        description: "Annouces when mining ability is ready",
        category: "Mining",
        subcategory: "General"
    })
    miningAbility = false;

    // Misc \\
    @SwitchProperty({
        name: "Clean Chat",
        description: "Cleans chat from unwanted messages",
        category: "Misc"
    })
    cleanChat = false;
    @SwitchProperty({
        name: "Cleaner Stash",
        description: "Makes the stash message much more cleaner",
        category: "Misc"
    })
    cleanerStash = false;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription("General", "&5&lDev: Purple")
    }
}

export default new Settings();