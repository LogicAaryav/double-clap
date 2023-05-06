input.onSound(DetectedSound.Loud, function () {
    flag = !(flag)
})
let flag = false
flag = false
basic.forever(function () {
    if (flag) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showNumber(1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showNumber(2)
    }
})
