let titleHeight = 80
let stringInput = ""
let ticks = 0
let a = 0
let b = 0

export function displayTitle(tks, scale, text, height=80) {
    titleHeight = height
    convertToTimeString.setScale(scale)
    ticks = tks
    stringInput = text
    tickCounter.register()
    stringOverlay.register()
}