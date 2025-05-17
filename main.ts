enum ActionKind {
    Walking,
    Idle,
    Jumping
}
info.onScore(938000, function () {
    game.gameOver(true)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
let gray: Sprite = null
scene.setBackgroundColor(10)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . c 6 c 6 . . . . . . . 
    . . . . . c c c c . . . . . . . 
    . . . . . . b b . . . . . . . . 
    . . . . . . b b . . . . . . . . 
    . . . . . . b b . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . c 6 c 6 c c . . . . . 
    . . . . . c c c c c c . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . c c . . . 
    . . . . . . . b b b b c 6 . . . 
    . . . . . . . b b b b c c . . . 
    . . . . . . . . . . . c 6 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b b . . . . . . . . 
    . . . . . . b b . . . . . . . . 
    . . . . . . b b . . . . . . . . 
    . . . . . c c c c . . . . . . . 
    . . . . . c 6 c 6 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
100,
true
)
mySprite.startEffect(effects.fire)
scaling.scaleToPercent(mySprite, 238, ScaleDirection.Uniformly, ScaleAnchor.Middle)
mySprite.setStayInScreen(true)
info.setLife(3)
game.onUpdate(function () {
    info.changeScoreBy(900)
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
game.onUpdateInterval(340, function () {
    gray = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    gray.setPosition(randint(0, scene.screenWidth()), scene.screenHeight())
    gray.setVelocity(0, -81)
    gray.setFlag(SpriteFlag.AutoDestroy, true)
})
