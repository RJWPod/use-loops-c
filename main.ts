input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 100; index++) {
        Adding_ += 1
        Sum = Adding_ + Sum
    }
    basic.showNumber(Sum)
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    Sum = 0
    Adding_ = 0
})
let Sum = 0
let Adding_ = 0
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
Adding_ = 0
Sum = 0
