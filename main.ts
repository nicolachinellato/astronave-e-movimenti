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
    asteroide.destroy()
    asteroide.startEffect(effects.warmRadial)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let mySprite: Sprite = null
let asteroide: Sprite = null
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
game.onUpdateInterval(randint(200, 500), function () {
    asteroide = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . c a f b c . . . . . . . 
        . . . . b f f b c c . . . . . . 
        . . . a a f b a b a c . . . . . 
        . . . c a c b b f f b . . . . . 
        . . . . b f f b f a b . . . . . 
        . . . . a f f b b b a . . . . . 
        . . . . . a b b c c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    asteroide.setPosition(160, randint(0, 120))
    asteroide.setVelocity(randint(-50, -100), 0)
})
game.onUpdateInterval(randint(500, 1000), function () {
    mySprite = sprites.create(img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `, SpriteKind.Enemy)
    mySprite.setPosition(160, randint(0, 120))
    mySprite.setVelocity(randint(-50, -100), 0)
})
