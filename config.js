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

    // General \\
    @ButtonProperty({
        name: "Surprise",
        description: "Click for surprise",
        category: "General",
        subcategory: "Special Surprise",
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
        name: "i4",
        description: "annouces i4, works similary to UA one",
        category: "Dungeons",
        subcategory: "Devices"
    })
    i4 = false;
    @SwitchProperty({
        name: "SS",
        description: "annouces ss, works similary to UA one",
        category: "Dungeons",
        subcategory: "Devices"
    })
    simonsays = false;
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


    constructor() {
        this.initialize(this);
        this.setCategoryDescription("General", "&5&lDev: Purple")
    }
}

export default new Settings();