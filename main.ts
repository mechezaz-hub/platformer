enum RadioMessage {
    message1 = 49434
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ay = -200
    animation.runImageAnimation(
    mySprite,
    assets.animation`laugh`,
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    mySprite.sayText("Don't Panic! I'm Going To Level2! Toodoo From Monks!", 2000, false)
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnRandomTile(mySprite, sprites.jewels.jewel3)
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.hazardLava1, function (sprite, location) {
    sprites.destroy(myEnemy, effects.fire, 1000)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`laugh`,
    500,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`left`,
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.gameOver(false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ay = 200
})
scene.onOverlapTile(SpriteKind.Player, sprites.jewels.jewel4, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.jewels.jewel3, function (sprite, location) {
    info.changeScoreBy(20)
    info.changeLifeBy(info.score())
    tiles.setTileAt(location, assets.tile`baseTransparency16`)
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.parachuteRight),
    2000,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(myEnemy, effects.coolRadial, 1000)
    info.changeLifeBy(-1)
    pause(500)
})
let myEnemy: Sprite = null
let mySprite: Sprite = null
radio.sendMessage(RadioMessage.message1)
info.setLife(100)
scene.setBackgroundImage(assets.image`Forest`)
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles3)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Monkey`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 12)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(1000, function () {
    for (let index = 0; index < 10; index++) {
        myEnemy = sprites.create(assets.image`Bite`, SpriteKind.Enemy)
    }
    myEnemy.follow(mySprite, 30)
})
