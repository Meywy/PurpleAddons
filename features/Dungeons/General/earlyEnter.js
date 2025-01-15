import Settings from "../../../config";
import data, { prefix2 } from "../../../utils/Utils";
import RenderLibV2 from "../../../RenderLibV2";
import { onChatPacket } from "../../../../BloomCore/utils/Events";
import { registerWhen } from "../../../../BloomCore/utils/Utils";

// Variables \\
let inGoldor = false;
let ee2 = false;
let ee3 = false;
let ee2Safe1 = false;
let ee2Safe2 = false;
let ee3Safe = false;
let donesafespot = false;
const overlay = {render: null, title: null, trueTitle: `eelocationgui`};
let testtitle1 =[`&dPlayer at ee3`]
let gui1on;

const necronStart = [
    "[BOSS] Necron: Finally, I heard so much about you. The Eye likes you very much.",
    "[BOSS] Necron: You went further than any human before, congratulations.",
]

// Goldor start and end \\
registerWhen(onChatPacket(() => {
    inGoldor = true;
}).setCriteria("[BOSS] Goldor: Who dares trespass into my domain?"))

register("chat", (message) => {
    if(!necronStart.includes(message)) return;
    inGoldor = false;
}).setCriteria("${message}")

// Render \\

const overlayRegister = register("renderOverlay", () => {
    Renderer.scale(data.eelocationguidata.scale);
    Renderer.drawStringWithShadow((overlay.trueTitle), 
    data.eelocationguidata.x,
    data.eelocationguidata.y,)
}).unregister()

function registerAll() {
    overlay.render = true;
    overlayRegister.register();
}

function unregisterall(){
    overlay.render = false;
    overlayRegister.unregister();
}

register("step", () => {
    if (Settings.eelocationgui.isOpen()) registerAll();
    if (overlay.render) { 
        overlayRegister.register();  
        if (Settings.eelocationgui.isOpen()) {
            overlay.trueTitle = testtitle1;
            gui1on = true
        } else if (!Settings.eelocationgui.isOpen() && gui1on) {
            unregisterall();
            overlay.trueTitle = " "; 
            gui1on = false
        } else overlay.trueTitle = overlay.title
    }
}).setFps(1)

register("dragged", (dx, dy, x, y, bn) => {
    if (Settings.eelocationgui.isOpen() && bn != 2) {
        data.eelocationguidata.x = (x / data.eelocationguidata.scale); 
        data.eelocationguidata.y = (y / data.eelocationguidata.scale);
        data.save()
    }
})

register("scrolled", (x, y, dir) => {
    if (Settings.eelocationgui.isOpen()){
        if (dir == 1) data.eelocationguidata.scale += 0.05;else data.eelocationguidata.scale -= 0.05
        data.eelocationguidata.x = (x / data.eelocationguidata.scale); data.eelocationguidata.y = (y / data.eelocationguidata.scale);
        data.save()
    }
})

register("guiMouseClick", (x, y, bn) => {
    if (Settings.eelocationgui.isOpen() && bn != 2) {
        data.eelocationguidata.x = (x / data.eelocationguidata.scale); 
        data.eelocationguidata.y = (y / data.eelocationguidata.scale);
        data.save()
    } 
    if (Settings.eelocationgui.isOpen() && (bn == 2)) {
        data.eelocationguidata.x = Renderer.screen.getWidth() / 2;
        data.eelocationguidata.y = Renderer.screen.getHeight() / 2 + 10
        data.eelocationguidata.scale = 1;
        data.save()
    }
})

register("step", () => {
    if (!inp3 || !Settings.earlyEnter) return
    if ((Player.getRenderX() >= 90) && (Player.getRenderZ() <= 124)) {
        World.getAllPlayers().forEach(entity => {
            if (entity.isInvisible() || entity.getPing() !== 1) return
            //ee2 to normal ee2
            if (!ee2) {
                if ((((entity.getX()) <= 59.3) && ((entity.getX()) >= 55) && ((entity.getY()) <= 110) && ((entity.getY()) >= 108.5) && ((entity.getZ()) <= 132.3) && ((entity.getZ()) >= 129.7))) {
                    ee2 = true
                    
                    overlay.title = `&d${entity.getName()} is at ee2`
                    if (Settings.sendchatmessage) ChatLib.command(`pc ${prefix2} ${entity.getName()} is at ee2`)
                    overlay.render = true
                    setTimeout(() => {
                        overlay.render = false
                        overlayRegister.unregister()
                    }, 2000);
                }
            }// ee2 to normal

            if (!ee2Safe1) {
                if (((entity.getX()) <= 80.3) && ((entity.getX()) >= 67.7) && ((entity.getY()) <= 113) && ((entity.getY()) >= 108.5) && ((entity.getZ()) <= 128.3) && ((entity.getZ()) >= 125.7)){
                    
                    ee2Safe1 = true
                }
            } // ee to 1st term

            if (!ee2Safe1) {
                if (((entity.getX()) <= 70.3) && ((entity.getX()) >= 67.7) && ((entity.getY()) <= 113) && ((entity.getY()) >= 108.5) && ((entity.getZ()) < 125.7) && ((entity.getZ()) >= 121.987)){
                    
                    ee2Safe1 = true
                }
            } // ee to 1st term

            if (!ee2) {
                if (((entity.getX()) <= 62.3) && ((entity.getX()) >= 59) && ((entity.getY()) <= 134) && ((entity.getY()) >= 131.5) && ((entity.getZ()) <= 140.3) && ((entity.getZ()) >= 137.7)){
                    
                    overlay.title = `&d${entity.getName()} is at ee2 2nd safespot`
                    if (Settings.sendchatmessage) ChatLib.command(`pc ${prefix2} ${entity.getName()} is at ee2 2nd safespot`)
                    ee2 = true
                    overlay.render = true
                    setTimeout(() => {
                        overlay.render = false
                        overlayRegister.unregister()
                    }, 2000);
                }
            } // ee to 2nd dev

            if (!donesafespot) {
                if (((entity.getX()) <= 69.7) && ((entity.getX()) >= 67.3) && ((entity.getY()) <= 109.2) && ((entity.getY()) >= 109) && ((entity.getZ()) <= 122) && ((entity.getZ()) >= 121.9)){
                    
                    overlay.title = `&d${entity.getName()} is at 1st term safespot`
                    donesafespot = true
                    setTimeout(() => {
                        overlay.render = false
                        overlayRegister.unregister()
                    }, 2000);
                }
            } // 1st term safespot
            
            if (!donesafespot) {
                if (((entity.getX()) <= 48.7) && ((entity.getX()) >= 46.3) && ((entity.getY()) <= 109.2) && ((entity.getY()) >= 109) && ((entity.getZ()) <= 122) && ((entity.getZ()) >= 121.9)){
                    overlay.title = `&d${entity.getName()} is at 3rd term safespot`
                    donesafespot = true
                    overlay.render = true
                    setTimeout(() => {
                        overlay.render = false
                        overlayRegister.unregister()
                    }, 2000);
                }
            } // 3rd term safespot
        }) //get all players
    }  // self in s1

    if ((Player.getRenderX() >= 16) && (Player.getRenderZ() >= 121) && (!ee3)) {
        World.getAllPlayers().forEach(entity => {
            if (entity.isInvisible() || entity.getPing() !== 1) return
            if (((entity.getX()) <= 18.7) && ((entity.getX()) >= 17.7) && ((entity.getY()) <= 122) && ((entity.getY()) >= 121) && ((entity.getZ()) <= 95) && ((entity.getZ()) >= 91.3)) {
                    overlay.title = `&d${entity.getName()} is at 3rd term`
                    if (Settings.sendchatmessage) ChatLib.command(`pc ${prefix2} ${entity.getName()} is at 3rd term`)
                    ee3 = true
                    overlay.render = true
                    setTimeout(() => {
                        overlay.render = false
                        overlayRegister.unregister()
                    }, 2000);
            } // 3rd term 3rd section

            if (((entity.getX()) <= 3) && ((entity.getX()) >= 1.3) && ((entity.getY()) <= 109.5) && ((entity.getY()) >= 108.5) && ((entity.getZ()) <= 105.5) && ((entity.getZ()) >= 100)) {
                    
                    overlay.title = `&d${entity.getName()} is at ee 3`
                    if (Settings.sendchatmessage) ChatLib.command(`pc ${prefix2} ${entity.getName()} is at ee 3`)
                    ee3 = true
                    overlay.render = true
                    setTimeout(() => {
                        overlay.render = false
                        overlayRegister.unregister()
                    }, 2000);
            }// ee3
        })
    }//self in s2
}).setFps(4);


register("worldUnload", () => {
    ee2 = false;
    ee3 = false;
    ee2Safe1 = false;
    ee2Safe2 = false;
    ee3Safe = false;
    inGoldor = false;
    overlayRegister.unregister();
    overlay.render = false
})

