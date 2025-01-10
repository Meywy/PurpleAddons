import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, Color } from 'Vigilance';

const version = JSON.parse(FileLib.read("PurpleAddons", "metadata.json")).version
@Vigilant("PurpleAddons", `PurpleAddons v${version}`, {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General", "Dungeons"];
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
        placeholder: "Click"
    })
    githubButtonAction() {
        java.awt.Desktop.getDesktop().browse(new java.net.URI(`https://github.com/Meywy`));
    }

    // Dungeons \\
    @SwitchProperty({
        name: "Auto Potion",
        description: "Automatically opens potion bag on start of the run",
        category: "Dungeons",
        subcategory: "QOL",
    })
    autopot = false;
    
    @SwitchProperty({
        name: "Blood Ready",
        description: "Notify when blood mobs spawned",
        category: "Dungeons",
        subcategory: "QOL",
    })
    bloodReady = false;

    @SwitchProperty({
        name: "Blood Done",
        description: "Notify when blood is done",
        category: "Dungeons",
        subcategory: "QOL",
    })
    bloodDone = false;

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

    constructor() {
        this.initialize(this);
        this.setCategoryDescription("General", "&d&lDev: Purple")
    }
}

export default new Settings();