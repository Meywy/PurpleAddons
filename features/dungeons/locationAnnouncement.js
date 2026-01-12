import config from "../../config"
import { displayTitle } from "../../utils/UATitle"
import { notePling, extractChatPlayerName, escapeRegExp } from "../../utils/utils"

const LOCATION_MAP = {
	"at ee2 high": "at EE2 High",
	"at ee2": "at EE2",
	"at ee3": "at EE3",
	"inside core": "inside Core",
	"outside core": "outside Core",
	"at core": "at Core"
}

const LOCATION_REGEX = new RegExp(
	`\\b(${Object.keys(LOCATION_MAP).map(phrase => escapeRegExp(phrase)).join("|")})\\b`,
	"i"
)

register("chat", (event) => {
	if (!config().eeAlert) return

	const cleanMessage = ChatLib.removeFormatting(ChatLib.getChatMessage(event, true))
	const match = cleanMessage.match(LOCATION_REGEX)
	if (!match) return

	const playerName = extractChatPlayerName(cleanMessage)
	if (!playerName || playerName === Player.getName()) return

	const canonical = match[1].toLowerCase()
	const locationTitle = LOCATION_MAP[canonical]
	if (!locationTitle) return

	displayTitle(60, 4, `&5${playerName}&r ${locationTitle}`, 120)
	notePling.value = true
})
