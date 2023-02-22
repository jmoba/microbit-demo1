input.onButtonPressed(Button.AB, function () {
    music.playMelody("E B G A B G A F ", 90)
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.M2)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
    basic.pause(1000)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
})
