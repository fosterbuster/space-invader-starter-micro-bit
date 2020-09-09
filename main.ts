input.onButtonPressed(Button.A, function () {
    Spiller.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    Skud = game.createSprite(Spiller.get(LedSpriteProperty.X), 5)
    Skud.set(LedSpriteProperty.Brightness, 70)
    for (let index = 0; index < 5; index++) {
        basic.pause(200)
        Skud.change(LedSpriteProperty.Y, -1)
        if (Skud.isTouching(Fjende)) {
            game.addScore(1)
        }
    }
    Skud.delete()
})
input.onButtonPressed(Button.B, function () {
    Spiller.move(1)
})
let Skud: game.LedSprite = null
let Spiller: game.LedSprite = null
let Fjende: game.LedSprite = null
Fjende = game.createSprite(2, 0)
Spiller = game.createSprite(2, 5)
basic.forever(function () {
    Fjende.move(1)
    basic.pause(500)
    Fjende.ifOnEdgeBounce()
})
