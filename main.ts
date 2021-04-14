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
    pipistrelloBase.destroy()
    pipistrelloBase.startEffect(effects.warmRadial)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let pipistrelloBase: Sprite = null
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
game.onUpdateInterval(randint(200, 500), function () {
    pipistrelloBase = sprites.create(img`
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
    pipistrelloBase.setPosition(160, randint(0, 120))
    pipistrelloBase.setVelocity(randint(-50, -100), 0)
})
