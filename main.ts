namespace SpriteKind {
    export const Muro = SpriteKind.create()
    export const pipistrellobase = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Navetta_spaziale, 100, 0)
    animation.runImageAnimation(
    Navetta_spaziale,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . 4 4 4 4 . 2 . . . . . 
        . . . . 2 2 2 2 2 f . . . 2 . . 
        . . . . . . 2 . . . . 2 . . . . 
        . . . . . 2 2 2 . . . . . . 2 . 
        . . . . . 2 2 5 . . . . . . . . 
        . . . . . 2 2 2 . . . 2 . . . . 
        . . . . . . 2 . . . . . 2 . 2 . 
        . . . . 2 2 2 2 2 f . . . . . . 
        . . . . . 4 4 4 4 . . 2 . . 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 4 . . . 
        . . . . . 4 4 4 4 . 4 . . . . . 
        . . . . 2 2 2 2 2 f . . . 4 . . 
        . . . . . . 2 . . . . 4 . . . . 
        . . . . . 2 2 2 . . . . 4 . . . 
        . . . . . 2 2 5 . . . . . . . . 
        . . . . . 2 2 2 . . . . . 4 . . 
        . . . . . . 2 . . . . 4 . . . . 
        . . . . 2 2 2 2 2 f 4 . . 4 . . 
        . . . . . 4 4 4 4 . . 4 . . . . 
        . . . . . . . . . . . . . 4 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . 4 4 4 4 . 7 . . . . . 
        . . . . 2 2 2 2 2 f . . 7 . . . 
        . . . . . . 2 . . . . 7 . . . . 
        . . . . . 2 2 2 . . . . . 7 . . 
        . . . . . 2 2 5 . . . . . . . . 
        . . . . . 2 2 2 . . . . . 7 . . 
        . . . . . . 2 . . . . 7 . . . . 
        . . . . 2 2 2 2 2 f . . . 7 . . 
        . . . . . 4 4 4 4 . . . . 7 . . 
        . . . . . . . . . . . 7 . . . . 
        . . . . . . . . . . . . . . 7 . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 . . . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 5 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . . 4 4 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    asteroide_grande.destroy()
    asteroide.destroy()
    asteroide_grande.startEffect(effects.ashes)
    asteroide.startEffect(effects.ashes)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    asteroide_grande.destroy()
    info.changeLifeBy(-1)
})
let boss: Sprite = null
let asteroide: Sprite = null
let asteroide_grande: Sprite = null
let projectile: Sprite = null
let Navetta_spaziale: Sprite = null
Navetta_spaziale = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 . . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . . 2 2 5 . . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . . 4 4 4 4 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Navetta_spaziale, 100, 100)
Navetta_spaziale.setStayInScreen(true)
info.setLife(5)
info.setScore(0)
game.onUpdateInterval(randint(400, 700), function () {
    asteroide = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . c a f b c . . . . . . . 
        . . . . b f f 9 c c . . . . . . 
        . . . a a f b a b a c . . . . . 
        . . . c a 9 b b f f b . . . . . 
        . . . . b f f b f a b . . . . . 
        . . . . a f f b 9 b a . . . . . 
        . . . . . a b b c c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    asteroide.setPosition(160, randint(0, 120))
    asteroide.setVelocity(randint(-50, -100), 0)
    if (info.score() > 24) {
        boss = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 8 8 8 8 8 8 8 . . . . . . 
            . . . 8 2 8 2 8 2 8 . . . . . . 
            . . . 8 8 2 2 2 8 . . . . . . . 
            . . . . 8 2 8 2 8 . . . . . . . 
            . . . . 8 8 8 8 8 . . . . . . . 
            . . . . 2 . 2 . 2 2 . . . . . . 
            . . 2 2 . . 2 . . 2 . . . . . . 
            . . 2 . . . 2 . . 2 . . . . . . 
            . 2 . . . . 2 . . . 2 . . . . . 
            . . . . . . . . . . 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        asteroide.destroy()
    }
})
game.onUpdateInterval(randint(700, 1000), function () {
    asteroide_grande = sprites.create(img`
        . . . . . . . . c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . c f c c a 9 a a c a c . . 
        . . c c f f f f a a a c a a 9 . 
        . . c c a f f c a a f f f a a c 
        . . c c a a a a b c f f f a a c 
        . c c c c a c c b a f c a a c c 
        c a f f c 9 c a b b 6 b b b c c 
        c a f f f f c c c 6 b 9 b a a c 
        c a a c f f c a 6 6 b b b a a c 
        c c b a a a a b 6 b b a b b 9 . 
        . c c b b b b b b b a c c b a . 
        . . c c c b c c c b a a b c . . 
        . . . . c 9 a c c b b b c . . . 
        . . . . c b b a a 6 b c . . . . 
        . . . . . . b 6 6 c c . . . . . 
        `, SpriteKind.Enemy)
    asteroide_grande.setPosition(160, randint(0, 120))
    asteroide_grande.setVelocity(randint(-50, -100), 0)
    if (info.score() > 24) {
        asteroide_grande.destroy()
    }
})
