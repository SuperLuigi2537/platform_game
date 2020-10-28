controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player1.vy == 0) {
        Player1.vy = -175
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile7, function (sprite, location) {
    game.over(true)
    info.changeScoreBy(1000)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    game.over(true)
    info.changeScoreBy(500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.top) {
        otherSprite.destroy()
        info.changeScoreBy(100)
    } else {
        game.over(false)
    }
})
let Player1: Sprite = null
info.setScore(0)
tiles.setTilemap(tiles.createTilemap(hex`32001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000090908090000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000c0b00000000000000000000000000000000000500000200000000000000000000000000000000000000000000000000000c0d0d0b0000000000000000000000000000000000000002000000000000000000000100000000000006000000000000070c0d0d0d0d0b000000000000000000000000000000000000040000000000000000000a0a0a0a0a0b00000c0a0a0a0a0a0a0a0d0d0d0d0d0d0a0a0a0b00000c0b00000c0b000d000d000c0a0a0a0b0000000000000d0d0d0d0d0e00000f0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e00000f0e00000f0e000d000d000f0d0d0d0e0000000000000d0d0d0d0d0e00000f0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e00000f0e00000f0e000d000d000f0d0d0d0e0000000000000d0d0d0d0d0e00000f0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e00000f0e00000f0e000d000d000f0d0d0d0e0000000000000d0d0d0d0d0e00000f0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e00000f0e00000f0e000d000d000f0d0d0d0e000000000000`, img`
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..........2.......................................
    ..................................................
    ..................................................
    ..........2222....................................
    ..................22.................2............
    .................2..2.............................
    ................2....2............................
    222222..22222222......2222..22..22.2.2.22222......
    .....2..2................2..22..22.2.2.2...2......
    .....2..2................2..22..22.2.2.2...2......
    .....2..2................2..22..22.2.2.2...2......
    .....2..2................2..22..22.2.2.2...2......
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.builtin.forestTiles0,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile19], TileScale.Sixteen))
Player1 = sprites.create(img`
    ......777771....
    .....777777777..
    .....eeee484....
    .....e4e4484....
    .....e4e44444...
    .....ee4444e44..
    .....44444eee...
    ......44444.....
    .....78777......
    ....77877877....
    ...7778888777...
    ..777888888777..
    ..117858858711..
    ..111888888111..
    ..118888888811..
    ....88888888....
    ....888..888....
    ...eee....eee...
    ..eeee....eeee..
    `, SpriteKind.Player)
tiles.placeOnRandomTile(Player1, myTiles.tile1)
controller.moveSprite(Player1, 100, 0)
Player1.ay = 300
scene.cameraFollowSprite(Player1)
scene.setBackgroundColor(9)
let goomba = sprites.create(img`
    . . . . . . e e e e . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e e e e e e e . . . . 
    . . . e e e e e e e e e e . . . 
    . . e f f e e e e e e f f e . . 
    . e e e 1 f e e e e f 1 e e e . 
    . e e e 1 f f f f f f 1 e e e . 
    e e e e 1 f 1 e e 1 f 1 e e e e 
    e e e e 1 1 1 e e 1 1 1 e e e e 
    e e e e e e e e e e e e e e e e 
    . e e e e d d d d d d e e e e . 
    . . . . d d d d d d d d . . . . 
    . . . . d d d d d d d d f f . . 
    . . . f f d d d d d f f f f f . 
    . . . f f f d d d f f f f f f . 
    . . . . f f f . . f f f f f . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(goomba, myTiles.tile10)
goomba.x += 14
game.onUpdate(function () {
    if (Player1.y > 235) {
        game.over(false)
    }
    if (goomba.tileKindAt(TileDirection.Left, myTiles.tile10)) {
        goomba.vx = 50
        goomba.setImage(img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . . . d d d d d d d d f f . . 
            . . . f f d d d d d f f f f f . 
            . . . f f f d d d f f f f f f . 
            . . . . f f f . . f f f f f . . 
            `)
    } else if (goomba.tileKindAt(TileDirection.Right, myTiles.tile11)) {
        goomba.vx = -50
        goomba.setImage(img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . f f d d d d d d d d . . . . 
            . f f f f f d d d d d f f . . . 
            . f f f f f f d d d f f f . . . 
            . . f f f f f . . f f f . . . . 
            `)
    }
})
