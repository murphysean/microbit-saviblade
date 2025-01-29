input.onButtonPressed(Button.A, function () {
    command = 32
    command = command + COLORS[COLOR]
    sendCommand(command)
    basic.showIcon(IconNames.Sword)
    basic.pause(500)
    command = 160
    command = command + COLORS[COLOR]
    sendCommand(command)
    basic.showIcon(IconNames.Sword)
})
input.onPinPressed(TouchPin.P2, function () {
    command5 = 112
    // command5 = command5 + COLORS[COLOR]
    sendCommand(command5)
    basic.showIcon(IconNames.Angry)
})
function sendCommand (cmd: number) {
    let SIG_ACTIVE = 0
    SIG_PREAMBLE_DLY = 17
    SIG_SHORT = 1200
    SIG_LONG = 2400
    SIG_IDLE = 1
    sig = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
    ]
    for (let index = 0; index <= 7; index++) {
        if ((cmd >> 7 - index) & 1) {
            sig[2 * index] = SIG_LONG
            sig[2 * index + 1] = SIG_SHORT
        } else {
            sig[2 * index] = SIG_SHORT
            sig[2 * index + 1] = SIG_LONG
        }
    }
    pins.digitalWritePin(DigitalPin.P0, SIG_ACTIVE)
    basic.pause(SIG_PREAMBLE_DLY)
    pins.digitalWritePin(DigitalPin.P0, SIG_IDLE)
    basic.pause(SIG_PREAMBLE_DLY)
    pins.digitalWritePin(DigitalPin.P0, SIG_ACTIVE)
    basic.pause(SIG_PREAMBLE_DLY)
    pins.digitalWritePin(DigitalPin.P0, SIG_IDLE)
    for (let index2 = 0; index2 <= 7; index2++) {
        pins.digitalWritePin(DigitalPin.P0, SIG_IDLE)
        control.waitMicros(sig[2 * index2])
        pins.digitalWritePin(DigitalPin.P0, SIG_ACTIVE)
        control.waitMicros(sig[2 * index2 + 1])
    }
    pins.digitalWritePin(DigitalPin.P0, SIG_IDLE)
}
input.onButtonPressed(Button.AB, function () {
    command3 = 64
    command3 = command3 + COLORS[COLOR]
    sendCommand(command3)
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.B, function () {
    command2 = 192
    command2 = command2 + COLORS[COLOR]
    sendCommand(command2)
    basic.showIcon(IconNames.Yes)
})
input.onPinPressed(TouchPin.P1, function () {
    command4 = 96
    command4 = command4 + COLORS[COLOR]
    sendCommand(command4)
    basic.showIcon(IconNames.Angry)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    COLOR += 1
    if (COLOR >= 8) {
        COLOR = 0
    }
    basic.showString("" + (COLOR_STRINGS[COLOR]))
})
let command4 = 0
let command2 = 0
let command3 = 0
let sig: number[] = []
let SIG_LONG = 0
let SIG_SHORT = 0
let SIG_PREAMBLE_DLY = 0
let command5 = 0
let COLOR = 0
let command = 0
let SIG_IDLE = 0
let COLOR_STRINGS: string[] = []
let COLORS: number[] = []
COLORS = [
0,
1,
3,
4,
6,
7,
8
]
COLOR_STRINGS = [
"WHITE",
"RED",
"YELLOW",
"GREEN",
"BLUE",
"PURPLE",
"VIOLET"
]
SIG_IDLE = 1
pins.digitalWritePin(DigitalPin.P0, SIG_IDLE)
basic.forever(function () {
    images.iconImage(IconNames.Heart).showImage(0)
})
