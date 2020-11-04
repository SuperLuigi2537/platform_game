namespace SpriteKind {
    export const qeuestion_mark_Block = SpriteKind.create()
    export const turning_block = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player1.vy == 0) {
        Player1.setImage(img`
            ....77771.......
            ...777777777....
            ...eeee484..11..
            ...e4e4484..11..
            ...e4e44444.77..
            ...ee4444e4477..
            ...44444eee.77..
            ....44444..777..
            ..77787877777...
            .77778787777....
            .777.8888.......
            117.858588......
            11.888888888....
            .888888888888e..
            88888...88eeee..
            8888......eee...
            eee.............
            eeee............
            ................
            `)
        Player1.vy = -175
        music.jumpUp.play()
        pause(1000)
        Player1.setImage(img`
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
            `)
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    Player1.setImage(img`
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
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player1.vy == 0) {
        animation.runImageAnimation(
        Player1,
        [img`
            . . . 1 7 7 7 7 . . . . . 
            7 7 7 7 7 7 7 7 7 . . . . 
            . . 4 8 4 e e e e . . . . 
            . . 4 8 4 4 e 4 e . . . . 
            . 4 4 4 4 4 e 4 e . . . . 
            4 4 e 4 4 4 4 e e . . . . 
            . e e e 4 4 4 4 4 . . . . 
            . . . 4 4 4 4 4 . . . . . 
            . . . 7 7 8 7 7 . . . . . 
            1 1 7 7 7 8 7 7 7 . . . . 
            1 1 7 . . 8 8 7 7 7 1 1 . 
            . . . . . 5 8 8 7 7 1 1 . 
            . . . . 8 8 8 8 8 . . . . 
            . . . . 8 8 8 8 8 8 . . . 
            . . . . 8 8 8 8 8 8 . . . 
            . . e e e 8 8 8 8 8 8 e e 
            . e e e e 8 8 . . 8 8 e e 
            . . . . . . . . . . . e e 
            . . . . . . . . . . . . e 
            `,img`
            . . . . . . . . . . . . . 
            . . . 1 7 7 7 7 . . . . . 
            7 7 7 7 7 7 7 7 7 . . . . 
            . . 4 8 4 e e e e . . . . 
            . . 4 8 4 4 e 4 e . . . . 
            . 4 4 4 4 4 e 4 e . . . . 
            4 4 e 4 4 4 4 e e . . . . 
            . e e e 4 4 4 4 4 . . . . 
            . . . 4 4 4 4 4 . . . . . 
            . . . 7 7 7 8 8 . . . . . 
            1 1 7 7 7 7 8 8 8 . . . . 
            1 1 7 7 5 8 8 8 8 . . . . 
            . . . . 8 8 8 8 8 8 . . . 
            . . . . 8 8 8 8 8 8 8 e e 
            . . . . 8 8 8 8 8 8 8 e e 
            . . . 8 8 8 8 8 8 . . e e 
            . . . 8 8 8 8 . . . . . e 
            . . e e e . . . . . . . . 
            . e e e e . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . 1 7 7 7 . . . . . 
            . 7 7 7 7 7 7 7 7 . . . . 
            . . . 8 4 4 e e e . . . . 
            . . . 8 4 4 e e e . . . . 
            . . 4 4 4 4 e e e 1 1 . . 
            . 4 4 e 4 4 4 e e 1 1 . . 
            . . e e e 4 4 4 4 7 7 . . 
            . . . . 4 4 4 4 7 7 . . . 
            . . . . . 7 7 8 7 7 . . . 
            . . 7 7 7 8 8 8 7 . . . . 
            . 7 7 7 8 8 8 8 . . . . . 
            . 1 1 8 8 8 8 8 8 . . . . 
            . 1 1 8 8 8 8 8 8 . . . . 
            . . . 8 8 8 8 8 8 8 e e . 
            . . . 8 8 8 8 . 8 8 e e . 
            . . e e e . . . . . e e . 
            . e e e e . . . . . . e . 
            `],
        200,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, myTiles.tile10)
    otherSprite.x += 14
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (BLOCK.vy == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, Player1)
        Player1.setImage(img`
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
            `)
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, Player1)
        Player1.setImage(img`
            ....77771.......
            ...777777777....
            ...eeee484..11..
            ...e4e4484..11..
            ...e4e44444.77..
            ...ee4444e4477..
            ...44444eee.77..
            .....4444..777..
            ..77787877777...
            .77778787777....
            .777.8888.......
            117.858588......
            11.888888888....
            .888888888888e..
            88888...88eeee..
            8888......eee...
            eee.............
            eeee............
            ................
            `)
        pause(500)
        Player1.setImage(img`
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
            `)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (Player1.vy == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, Player1)
        Player1.setImage(img`
            .....17777......
            ..777777777.....
            ....484eeee.....
            ....4844e4e.....
            ...44444e4e.....
            ..44e4444ee.....
            ...eee44444.....
            .....44444......
            ......77787.....
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
            `)
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, Player1)
        Player1.setImage(img`
            ....77771.......
            ...777777777....
            ...eeee484..11..
            ...e4e4484..11..
            ...e4e44444.77..
            ...ee4444e4477..
            ...44444eee.77..
            .....4444..777..
            ..77787877777...
            .77778787777....
            .777.8888.......
            117.858588......
            11.888888888....
            .888888888888e..
            88888...88eeee..
            8888......eee...
            eee.............
            eeee............
            ................
            `)
        pause(500)
        Player1.setImage(img`
            .....17777......
            ..777777777.....
            ....484eeee.....
            ....4844e4e.....
            ...44444e4e.....
            ..44e4444ee.....
            ...eee44444.....
            .....44444......
            ......77787.....
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
            `)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player1.vy == 0) {
        animation.runImageAnimation(
        Player1,
        [img`
            . . . . . 7 7 7 7 1 . . . 
            . . . . 7 7 7 7 7 7 7 7 7 
            . . . . e e e e 4 8 4 . . 
            . . . . e 4 e 4 4 8 4 . . 
            . . . . e 4 e 4 4 4 4 4 . 
            . . . . e e 4 4 4 4 e 4 4 
            . . . . 4 4 4 4 4 e e e . 
            . . . . . 4 4 4 4 4 . . . 
            . . . . . 7 7 8 7 7 . . . 
            . . . . 7 7 7 8 7 7 7 1 1 
            . 1 1 7 7 7 8 8 . . 7 1 1 
            . 1 1 7 7 8 8 8 . . . . . 
            . . . . 8 8 8 8 . . . . . 
            . . . 8 8 8 8 8 . . . . . 
            . . . 8 8 8 8 8 8 . . . . 
            e e 8 8 8 8 8 8 e e e . . 
            e e 8 8 . . 8 8 e e e e . 
            e e . . . . . . . . . . . 
            e . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . 7 7 7 7 1 . . . 
            . . . . 7 7 7 7 7 7 7 7 7 
            . . . . e e e e 4 8 4 . . 
            . . . . e 4 e 4 4 8 4 . . 
            . . . . e 4 e 4 4 4 4 4 . 
            . . . . e e 4 4 4 4 e 4 4 
            1 1 . . 4 4 4 4 4 e e e . 
            1 1 7 7 . 4 4 4 4 4 . . . 
            . 7 7 7 7 8 8 7 7 7 . . . 
            . . 7 7 8 8 8 7 7 7 7 . . 
            . . . . 8 8 8 8 5 7 7 . . 
            . . . 8 8 8 8 8 8 . 1 1 . 
            e e 8 8 8 8 8 8 8 . 1 1 . 
            e e 8 8 8 8 8 8 8 . . . . 
            e e . . 8 8 8 8 8 8 . . . 
            e . . . . . 8 8 8 8 . . . 
            . . . . . . . . e e e . . 
            . . . . . . . . e e e e . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . 7 7 7 7 1 . . . . 
            . . . 7 7 7 7 7 7 7 7 7 . 
            . . . e e e e 4 4 8 . . . 
            . . . e e e 4 4 4 8 . . . 
            . 1 1 e e e 4 4 4 4 4 . . 
            . 1 1 e e 4 4 4 4 e 4 4 . 
            . 7 7 4 4 4 4 4 e e e . . 
            . . 7 7 4 4 4 4 4 . . . . 
            . . 7 7 8 7 7 . . . . . . 
            . . . 7 8 8 8 7 7 7 . . . 
            . . . . 8 8 8 8 7 7 7 . . 
            . . . 8 8 8 8 8 8 1 1 . . 
            . . . 8 8 8 8 8 8 1 1 . . 
            e e 8 8 8 8 8 8 8 . . . . 
            e e 8 8 . 8 8 8 8 . . . . 
            e e . . . . . e e e . . . 
            e . . . . . . e e e e . . 
            `],
        200,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    info.changeScoreBy(50)
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.turning_block, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . e e e e e e e e e e e e . . 
        . e 1 1 1 4 4 4 4 4 4 4 4 4 e . 
        e 1 1 5 5 5 5 5 5 5 5 5 4 4 4 e 
        e 1 5 5 5 5 5 5 5 5 5 5 5 5 4 e 
        e 1 5 5 5 5 5 5 5 5 5 5 5 5 4 e 
        e 4 5 5 5 f 5 5 5 5 f 5 5 5 4 e 
        e 1 5 5 5 f 5 5 5 5 f 5 5 5 4 e 
        e 4 5 5 5 f 5 5 5 5 f 5 5 5 4 e 
        e 4 5 5 5 f 5 5 5 5 f 5 5 5 4 e 
        e 4 5 5 5 5 5 5 5 5 5 5 5 5 4 e 
        e 4 5 5 5 5 5 5 5 5 5 5 5 5 4 e 
        e 4 5 5 5 5 5 5 5 5 5 5 5 5 4 e 
        e 4 4 5 5 5 5 5 5 5 5 5 4 4 4 e 
        e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
        . e 4 4 4 4 4 4 4 4 4 4 4 4 e . 
        . . e e e e e e e e e e e e . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        . f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    tiles.placeOnTile(Player1, tiles.getTileLocation(31, 8))
    pause(59)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player1.vy > 0) {
        Player1.setVelocity(0, 200)
        Player1.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 7 7 7 7 1 . . . . . . . 
            . . . 7 7 7 7 7 7 7 7 7 . . . . 
            . . . e e e e 4 4 8 . . . . . . 
            . . . e e e 4 4 4 8 . . . . . . 
            . . . e e e 4 4 4 4 4 . . . . . 
            . . . e e 4 4 4 4 e 4 4 . . . . 
            . . . 4 4 4 4 4 e e e . . . . . 
            . . . . 4 4 4 4 4 . . . . . . . 
            . . . . 7 8 8 7 7 7 . . . . . . 
            . . . . 8 8 8 8 7 7 1 1 . . . . 
            . . . . 8 8 8 8 8 7 1 1 . . . . 
            . . . . 8 8 8 8 8 . . . e . . . 
            . . . . 8 8 8 8 8 . . e e . . . 
            . . . . 8 8 8 8 8 8 8 e e . . . 
            . . . . . 8 8 8 8 8 8 e e . . . 
            `)
        pause(1000)
        Player1.setImage(img`
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
            `)
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    info.changeScoreBy(100)
    game.over(true, effects.smiles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.top) {
        if (controller.A.isPressed()) {
            sprite.setImage(img`
                ....77771.......
                ...777777777....
                ...eeee484..11..
                ...e4e4484..11..
                ...e4e44444.77..
                ...ee4444e4477..
                ...44444eee.77..
                .....4444..777..
                ..77787877777...
                .77778787777....
                .777.8888.......
                117.858588......
                11.888888888....
                .888888888888e..
                88888...88eeee..
                8888......eee...
                eee.............
                eeee............
                ................
                `)
            otherSprite.setImage(img`
                . . 1 1 . . . . . 1 1 1 . . . . 
                . 1 1 1 . . . . 1 . . 1 1 . . . 
                . . 1 1 . . . 1 1 . . . 1 1 . . 
                . . 1 1 . . . 1 1 . . . 1 1 . . 
                . . 1 1 . . . 1 1 1 . . 1 1 . . 
                1 1 1 1 1 1 . . 1 1 1 1 1 . . . 
                . . . . . . . . . 1 1 1 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . e e e e . . . . . . 
                . . . e e e e e e e e e e . . . 
                . e e f f f e e e e f f f e e . 
                e e 1 1 1 1 f f f f 1 1 1 1 e e 
                e e e e e e e e e e e e e e e e 
                . . . d d d d d d d d d d . . . 
                . . . . d d d d d d d d . . . . 
                . f f f f f . . . . f f f f f . 
                `)
            music.pewPew.play()
            otherSprite.setVelocity(0, 0)
            sprite.vy = -250
            animation.stopAnimation(animation.AnimationTypes.All, otherSprite)
            pause(1000)
            sprite.setImage(img`
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
                `)
            info.changeScoreBy(10)
            otherSprite.destroy()
        } else {
            sprite.setImage(img`
                ....77771.......
                ...777777777....
                ...eeee484..11..
                ...e4e4484..11..
                ...e4e44444.77..
                ...ee4444e4477..
                ...44444eee.77..
                .....4444..777..
                ..77787877777...
                .77778787777....
                .777.8888.......
                117.858588......
                11.888888888....
                .888888888888e..
                88888...88eeee..
                8888......eee...
                eee.............
                eeee............
                ................
                `)
            otherSprite.setImage(img`
                . . 1 1 . . . . . 1 1 1 . . . . 
                . 1 1 1 . . . . 1 . . 1 1 . . . 
                . . 1 1 . . . 1 1 . . . 1 1 . . 
                . . 1 1 . . . 1 1 . . . 1 1 . . 
                . . 1 1 . . . 1 1 1 . . 1 1 . . 
                1 1 1 1 1 1 . . 1 1 1 1 1 . . . 
                . . . . . . . . . 1 1 1 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . e e e e . . . . . . 
                . . . e e e e e e e e e e . . . 
                . e e f f f e e e e f f f e e . 
                e e 1 1 1 1 f f f f 1 1 1 1 e e 
                e e e e e e e e e e e e e e e e 
                . . . d d d d d d d d d d . . . 
                . . . . d d d d d d d d . . . . 
                . f f f f f . . . . f f f f f . 
                `)
            music.pewPew.play()
            otherSprite.setVelocity(0, 0)
            sprite.vy = -75
            animation.stopAnimation(animation.AnimationTypes.All, otherSprite)
            pause(500)
            sprite.setImage(img`
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
                `)
            info.changeScoreBy(10)
            otherSprite.destroy()
        }
    } else {
        game.over(false, effects.slash)
    }
})
let BLOCK: Sprite = null
let Player1: Sprite = null
let mySprite: Sprite = null
info.setScore(0)
tiles.setTilemap(tiles.createTilemap(hex`50001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000070700070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030100000000000000000000000000000000000000000000000a0900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000a0f10090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0e000000020000000000000000000000000500000000000000060a0f0b0b1009000000000000000000000000000000000000000000000000000000000000000000000007000700000000000000000e0e0e00000002000000000008080808080900000a080808080808080f0b0b0b0b10080808080808090500000000000000000000060a090000000b0b000000000000000000000000000000000000000e0e0e0e0000000200000000000b0b0b0b0b0c00000d0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b100808080808080808080808080f0c0000000b0b0b00000000000000000000000000000000000e0e0e0e0e0000000200000000000b0b0b0b0b0c00000d0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0c0000000b0b0b0b0500000000000000000000000600000e0e0e0e0e0e0000000e00000000000b0b0b0b0b0c00000d0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0c0000000b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b000a080808080808080808080808080808080b0b0b0b0b0c00000d0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0c0000000b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b000d0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b`, img`
    ...........................................................................2....
    ...........................................................................2....
    ...........................................................................2....
    ...........................................................................2....
    ..........2................................................................2....
    ...........................................................................2....
    ...........................................................................2....
    ..........2222.............................................................2....
    ..................22............................................................
    .................2..2................................................22.........
    ................2....2...................................222........2.2.........
    222222..22222222......2222222............22...22...................2..2.........
    .....2..2....................222222222222.2...2.2.................2...2.........
    .....2..2.................................2...2..2...............2....2...2.....
    .....2..2.................................2...2...222222222222.22......2222.....
    .....2..2.................................2...2..............2.2................
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile10,myTiles.tile11,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile3,myTiles.tile2,myTiles.tile4], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . e e e e e e e e e e e e . . 
    . e 1 1 1 4 4 4 4 4 4 4 4 4 e . 
    e 1 1 5 5 5 5 5 5 5 5 5 4 4 4 e 
    e 1 5 5 5 5 5 5 5 5 5 5 5 5 4 e 
    e 1 5 5 5 5 5 5 5 5 5 5 5 5 4 e 
    e 4 5 5 5 f 5 5 5 5 f 5 5 5 4 e 
    e 1 5 5 5 f 5 5 5 5 f 5 5 5 4 e 
    e 4 5 5 5 f 5 5 5 5 f 5 5 5 4 e 
    e 4 5 5 5 f 5 5 5 5 f 5 5 5 4 e 
    e 4 5 5 5 5 5 5 5 5 5 5 5 5 4 e 
    e 4 5 5 5 5 5 5 5 5 5 5 5 5 4 e 
    e 4 5 5 5 5 5 5 5 5 5 5 5 5 4 e 
    e 4 4 5 5 5 5 5 5 5 5 5 4 4 4 e 
    e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
    . e 4 4 4 4 4 4 4 4 4 4 4 4 e . 
    . . e e e e e e e e e e e e . . 
    `, SpriteKind.turning_block)
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
tiles.placeOnTile(Player1, tiles.getTileLocation(1, 11))
Player1.y += -16
tiles.placeOnTile(mySprite, tiles.getTileLocation(31, 9))
controller.moveSprite(Player1, 100, 0)
Player1.ay = 300
scene.cameraFollowSprite(Player1)
BLOCK = sprites.create(img`
    f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    4 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
    4 5 5 5 5 4 4 4 4 4 5 5 5 5 5 f 
    4 5 5 5 4 4 f f f 4 4 5 5 5 5 f 
    4 5 5 5 4 4 f 5 5 4 4 f 5 5 5 f 
    4 5 5 5 4 4 f 5 5 4 4 f 5 5 5 f 
    4 5 5 5 5 f f 5 4 4 4 f 5 5 5 f 
    4 5 5 5 5 5 5 4 4 f f f 5 5 5 f 
    4 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
    4 5 5 5 5 5 5 5 f f 5 5 5 5 5 f 
    4 5 5 5 5 5 5 4 4 5 5 5 5 5 5 f 
    4 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
    4 5 f 5 5 5 5 5 f f 5 5 5 f 5 f 
    4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.qeuestion_mark_Block)
let Block2 = sprites.create(img`
    f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    4 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
    4 5 5 5 5 4 4 4 4 4 5 5 5 5 5 f 
    4 5 5 5 4 4 f f f 4 4 5 5 5 5 f 
    4 5 5 5 4 4 f 5 5 4 4 f 5 5 5 f 
    4 5 5 5 4 4 f 5 5 4 4 f 5 5 5 f 
    4 5 5 5 5 f f 5 4 4 4 f 5 5 5 f 
    4 5 5 5 5 5 5 4 4 f f f 5 5 5 f 
    4 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
    4 5 5 5 5 5 5 5 f f 5 5 5 5 5 f 
    4 5 5 5 5 5 5 4 4 5 5 5 5 5 5 f 
    4 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
    4 5 f 5 5 5 5 5 f f 5 5 5 f 5 f 
    4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.qeuestion_mark_Block)
tiles.placeOnTile(BLOCK, tiles.getTileLocation(12, 7))
tiles.placeOnTile(Block2, tiles.getTileLocation(58, 10))
scene.setBackgroundColor(9)
info.startCountdown(120)
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
let goomba2 = sprites.create(img`
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
let goomba3 = sprites.create(img`
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
tiles.placeOnRandomTile(goomba2, myTiles.tile10)
tiles.placeOnRandomTile(goomba3, myTiles.tile10)
goomba.x += 14
goomba2.x += 14
goomba3.x += 14
animation.runImageAnimation(
goomba,
[img`
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
    . . . . d d d d d d d d f f f . 
    . . . f f d d d d d f f f f f f 
    . . . f f f d d d f f f f f f f 
    . . . . f f f . . f f f f f f . 
    `,img`
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
    `],
200,
true
)
animation.runImageAnimation(
goomba2,
[img`
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
    . . . . d d d d d d d d f f f . 
    . . . f f d d d d d f f f f f f 
    . . . f f f d d d f f f f f f f 
    . . . . f f f . . f f f f f f . 
    `,img`
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
    `],
200,
true
)
animation.runImageAnimation(
goomba3,
[img`
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
    . . . . d d d d d d d d f f f . 
    . . . f f d d d d d f f f f f f 
    . . . f f f d d d f f f f f f f 
    . . . . f f f . . f f f f f f . 
    `,img`
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
    `],
200,
true
)
game.onUpdate(function () {
    if (Player1.y > 246) {
        game.over(false)
    }
    if (goomba.tileKindAt(TileDirection.Left, myTiles.tile10)) {
        goomba.vx = 50
    } else if (goomba.tileKindAt(TileDirection.Right, myTiles.tile11)) {
        goomba.vx = -50
    }
    if (goomba2.tileKindAt(TileDirection.Left, myTiles.tile10)) {
        goomba2.vx = 50
    } else if (goomba2.tileKindAt(TileDirection.Right, myTiles.tile11)) {
        goomba2.vx = -50
    }
    if (goomba3.tileKindAt(TileDirection.Left, myTiles.tile10)) {
        goomba3.vx = 50
    } else if (goomba3.tileKindAt(TileDirection.Right, myTiles.tile11)) {
        goomba3.vx = -50
    }
})
