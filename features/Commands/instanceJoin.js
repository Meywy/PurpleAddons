register("command", (args) => {
    switch(args) {
        case undefined:
            ChatLib.chat("&5Usage: &f/f [1-7]");
            break;
        case '1':
            ChatLib.command("joininstance catacombs_floor_one");
            break;
        case '2':
            ChatLib.command("joininstance catacombs_floor_two");
            break;
        case '3':
            ChatLib.command("joininstance catacombs_floor_three");
            break;
        case '4':
            ChatLib.command("joininstance catacombs_floor_four");
            break;
        case '5':
            ChatLib.command("joininstance catacombs_floor_five");
            break;
        case '6':
            ChatLib.command("joininstance catacombs_floor_six");
            break;
        case '7':
            ChatLib.command("joininstance catacombs_floor_seven");
            break;
        
    }
}).setName('f')

register("command", (args) => {
    switch(args) {
        case undefined:
            ChatLib.chat("&5Usage: &f/m [1-7]");
            break;
        case '1':
            ChatLib.command("joininstance master_catacombs_floor_one");
            break;
        case '2':
            ChatLib.command("joininstance master_catacombs_floor_two");
            break;
        case '3':
            ChatLib.command("joininstance master_catacombs_floor_three");
            break;
        case '4':
            ChatLib.command("joininstance master_catacombs_floor_four");
            break;
        case '5':
            ChatLib.command("joininstance master_catacombs_floor_five");
            break;
        case '6':
            ChatLib.command("joininstance master_catacombs_floor_six");
            break;
        case '7':
            ChatLib.command("joininstance master_catacombs_floor_seven");
            break;
        
    }
}).setName('m')

register("command", (args) => {
    switch(args) {
        case undefined:
            ChatLib.chat("&5Usage: &f/k [1-5]");
            break;
        case '1':
            ChatLib.command("joininstance kuudra_normal");
            break;
        case '2':
            ChatLib.command("joininstance kuudra_hot");
            break;
        case '3':
            ChatLib.command("joininstance kuudra_burning");
            break;
        case '4':
            ChatLib.command("joininstance kuudra_fiery");
            break;
        case '5':
            ChatLib.command("joininstance kuudra_infernal");
            break;        
    }
}).setName('k')