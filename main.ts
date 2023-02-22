input.onButtonPressed(Button.A, function () {
    music.playMelody("E B G A B G A F ", 90)
    basic.pause(100)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
})
