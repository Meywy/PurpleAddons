import config from "./config"

import "./features/dungeons/rag"
import "./features/dungeons/blood"
import "./features/dungeons/storm"
import "./features/dungeons/crystal"
import "./features/dungeons/leapAnnoucement"

import "./features/commands/gfs"
import "./features/commands/instanceJoin"

import "./features/misc/backend"
import "./features/misc/removeSelfieCam"

import "./features/mining/abilityAlert"
import "./features/mining/fetchur"

import "./features/slayers/reminder"

import "./utils/firstLoad"


register("command", () => {
    config().getConfig().openGui()
}).setName("pa")
