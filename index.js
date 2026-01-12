import config from "./config"

import "./features/dungeons/rag"
import "./features/dungeons/blood"
import "./features/dungeons/storm"
import "./features/dungeons/crystal"
import "./features/dungeons/leapAnnoucement"
import "./features/dungeons/locationAnnouncement"

import "./features/commands/gfs"
import "./features/commands/instanceJoin"

import "./features/misc/removeSelfieCam"

import "./features/mining/abilityAlert"
import "./features/mining/fetchur"

import "./features/slayers/reminder"

import "./features/alerts/tuba"
import "./features/alerts/katana"

import "./utils/firstLoad"


register("command", () => {
    config().getConfig().openGui()
}).setName("pa")
