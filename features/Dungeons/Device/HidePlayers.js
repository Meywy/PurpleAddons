import Settings from "../../../config";
import { getDistanceToCoord } from  "../../../../BloomCore/utils/Utils";
import { prefix } from "../../../utils/Utils";

let messageShown = false;

const ssStandPos = [108.63, 120, 94]
const standingAtSS = () => getDistanceToCoord(...ssStandPos) < 1.8
const fourStandPos = [63.5, 127, 35.5]
const standingAt4Dev = () => getDistanceToCoord(...fourStandPos) < 1.8
const arrowStandPos = [0, 120, 77]
const standingAtArrows = () => getDistanceToCoord(...arrowStandPos) < 1.8

const EntityPlayer = Java.type("net.minecraft.entity.player.EntityPlayer")


register("renderEntity", (entity, pos, pt, event) => {
  if (!(Settings.hidePlayers && (standingAtSS() || standingAt4Dev() || standingAtArrows()))) return;

  if (!messageShown) {
    ChatLib.chat(`${prefix} &fHiding Players`)
    messageShown = true;
  }

  const mcEntity = entity.getEntity()
  if (!(mcEntity instanceof EntityPlayer)) return;

  if (entity.getUUID().toString()[14] == "2" || entity.getName() == Player.getName()) return;

  mcEntity.func_70107_b(entity.getX(), entity.getY()+99999, entity.getZ())
  

}); 

register("worldUnload", () => {
  messageShown = false;
})