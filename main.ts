namespace SpriteKind {
    export const qeuestion_mark_Block = SpriteKind.create()
    export const turning_block = SpriteKind.create()
    export const gun = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (loaded > 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . 7 . 7 7 . . . 
            . . 7 . 7 7 7 . 
            7 . . . 7 6 7 7 
            . . 7 7 7 6 6 7 
            . 7 7 6 6 1 6 7 
            . 7 6 6 1 6 7 7 
            . 7 7 6 6 7 7 . 
            . . 7 7 7 7 . . 
            `, Player1, 50, 0)
        loaded += -1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gun, function (sprite, otherSprite) {
    loaded = 5
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player1.vy == 0) {
        if (loaded == 0) {
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
        } else {
            Player1.setImage(img`
                ....11111.......
                ...111111111....
                ...eeee484..11..
                ...e4e4484..11..
                ...e4e44444.11..
                ...ee4444e4411..
                ...44444eee.11..
                ....44444..111..
                ..11171711111...
                .11117171111....
                .111.7777.......
                111.757577......
                11.777777777....
                .777777777777e..
                77777...77eeee..
                7777......eee...
                eee.............
                eeee............
                ................
                `)
            Player1.vy = -175
            music.jumpUp.play()
            pause(1000)
            Player1.setImage(img`
                ......111111....
                .....111111111..
                .....eeee484....
                .....e4e4484....
                .....e4e44444...
                .....ee4444e44..
                .....44444eee...
                ......44444.....
                .....17111......
                ....11711711....
                ...1117777111...
                ..111777777111..
                ..111757757111..
                ..111777777111..
                ..117777777711..
                ....77777777....
                ....777..777....
                ...eee....eee...
                ..eeee....eeee..
                `)
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (loaded == 0) {
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
        Player1.setImage(img`
            ......111111....
            .....111111111..
            .....eeee484....
            .....e4e4484....
            .....e4e44444...
            .....ee4444e44..
            .....44444eee...
            ......44444.....
            .....17111......
            ....11711711....
            ...1117777111...
            ..111777777111..
            ..111757757111..
            ..111777777111..
            ..117777777711..
            ....77777777....
            ....777..777....
            ...eee....eee...
            ..eeee....eeee..
            `)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player1.vy == 0) {
        if (loaded == 0) {
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
        } else {
            animation.runImageAnimation(
            Player1,
            [img`
                . . . 1 1 1 1 1 . . . . . 
                1 1 1 1 1 1 1 1 1 . . . . 
                . . 4 8 4 e e e e . . . . 
                . . 4 8 4 4 e 4 e . . . . 
                . 4 4 4 4 4 e 4 e . . . . 
                4 4 e 4 4 4 4 e e . . . . 
                . e e e 4 4 4 4 4 . . . . 
                . . . 4 4 4 4 4 . . . . . 
                . . . 1 1 7 1 1 . . . . . 
                1 1 1 1 1 7 1 1 1 . . . . 
                1 1 1 . . 7 7 1 1 1 1 1 . 
                . . . . . 5 7 7 1 1 1 1 . 
                . . . . 7 7 7 7 7 . . . . 
                . . . . 7 7 7 7 7 7 . . . 
                . . . . 7 7 7 7 7 7 . . . 
                . . e e e 7 7 7 7 7 7 e e 
                . e e e e 7 7 . . 7 7 e e 
                . . . . . . . . . . . e e 
                . . . . . . . . . . . . e 
                `,img`
                . . . . . . . . . . . . . 
                . . . 1 1 1 1 1 . . . . . 
                1 1 1 1 1 1 1 1 1 . . . . 
                . . 4 8 4 e e e e . . . . 
                . . 4 8 4 4 e 4 e . . . . 
                . 4 4 4 4 4 e 4 e . . . . 
                4 4 e 4 4 4 4 e e . . . . 
                . e e e 4 4 4 4 4 . . . . 
                . . . 4 4 4 4 4 . . . . . 
                . . . 1 1 1 7 7 . . . . . 
                1 1 1 1 1 1 7 7 7 . . . . 
                1 1 1 1 5 7 7 7 7 . . . . 
                . . . . 7 7 7 7 7 7 . . . 
                . . . . 7 7 7 7 7 7 7 e e 
                . . . . 7 7 7 7 7 7 7 e e 
                . . . 7 7 7 7 7 7 . . e e 
                . . . 7 7 7 7 . . . . . e 
                . . e e e . . . . . . . . 
                . e e e e . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . . . . . . . . . 
                . . . . 1 1 1 1 . . . . . 
                . 1 1 1 1 1 1 1 1 . . . . 
                . . . 8 4 4 e e e . . . . 
                . . . 8 4 4 e e e . . . . 
                . . 4 4 4 4 e e e 1 1 . . 
                . 4 4 e 4 4 4 e e 1 1 . . 
                . . e e e 4 4 4 4 1 1 . . 
                . . . . 4 4 4 4 1 1 . . . 
                . . . . . 1 1 7 1 1 . . . 
                . . 1 1 1 7 7 7 1 . . . . 
                . 1 1 1 7 7 7 7 . . . . . 
                . 1 1 7 7 7 7 7 7 . . . . 
                . 1 1 7 7 7 7 7 7 . . . . 
                . . . 7 7 7 7 7 7 7 e e . 
                . . . 7 7 7 7 . 7 7 e e . 
                . . e e e . . . . . e e . 
                . e e e e . . . . . . e . 
                `],
            200,
            true
            )
        }
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, myTiles.tile10)
    otherSprite.x += 14
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (BLOCK.vy == 0) {
        if (loaded == 0) {
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
                ......111111....
                .....111111111..
                .....eeee484....
                .....e4e4484....
                .....e4e44444...
                .....ee4444e44..
                .....44444eee...
                ......44444.....
                .....17111......
                ....11711711....
                ...1117777111...
                ..111777777111..
                ..111757757111..
                ..111777777111..
                ..117777777711..
                ....77777777....
                ....777..777....
                ...eee....eee...
                ..eeee....eeee..
                `)
        }
    } else {
        if (loaded == 0) {
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
        } else {
            animation.stopAnimation(animation.AnimationTypes.All, Player1)
            Player1.setImage(img`
                ....11111.......
                ...111111111....
                ...eeee484..11..
                ...e4e4484..11..
                ...e4e44444.11..
                ...ee4444e4411..
                ...44444eee.11..
                .....4444..111..
                ..11171711111...
                .11117171111....
                .111.7777.......
                111.757577......
                11.777777777....
                .777777777777e..
                77777...77eeee..
                7777......eee...
                eee.............
                eeee............
                ................
                `)
            pause(500)
            Player1.setImage(img`
                ......111111....
                .....111111111..
                .....eeee484....
                .....e4e4484....
                .....e4e44444...
                .....ee4444e44..
                .....44444eee...
                ......44444.....
                .....17111......
                ....11711711....
                ...1117777111...
                ..111777777111..
                ..111757757111..
                ..111777777111..
                ..117777777711..
                ....77777777....
                ....777..777....
                ...eee....eee...
                ..eeee....eeee..
                `)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (Player1.vy == 0) {
        if (loaded == 0) {
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
                .....11111......
                ..111111111.....
                ....484eeee.....
                ....4844e4e.....
                ...44444e4e.....
                ..44e4444ee.....
                ...eee44444.....
                .....44444......
                ......11171.....
                ....11711711....
                ...1117777111...
                ..111777777111..
                ..111757757111..
                ..111777777111..
                ..117777777711..
                ....77777777....
                ....777..777....
                ...eee....eee...
                ..eeee....eeee..
                `)
        }
    } else {
        if (loaded == 0) {
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
        } else {
            animation.stopAnimation(animation.AnimationTypes.All, Player1)
            Player1.setImage(img`
                ....11111.......
                ...111111111....
                ...eeee484..11..
                ...e4e4484..11..
                ...e4e44444.11..
                ...ee4444e4411..
                ...44444eee.11..
                .....4444..111..
                ..11171711111...
                .11117171111....
                .111.7777.......
                111.757577......
                11.777777777....
                .777777777777e..
                77777...77eeee..
                7777......eee...
                eee.............
                eeee............
                ................
                `)
            pause(500)
            Player1.setImage(img`
                .....11111......
                ..111111111.....
                ....484eeee.....
                ....4844e4e.....
                ...44444e4e.....
                ..44e4444ee.....
                ...eee44444.....
                .....44444......
                ......11171.....
                ....11711711....
                ...1117777111...
                ..111777777111..
                ..111757757111..
                ..111777777111..
                ..117777777711..
                ....77777777....
                ....777..777....
                ...eee....eee...
                ..eeee....eeee..
                `)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile9, function (sprite, location) {
    music.baDing.play()
    info.changeScoreBy(10)
    tiles.setTileAt(location, myTiles.transparency16)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player1.vy == 0) {
        if (loaded == 0) {
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
        } else {
            animation.runImageAnimation(
            Player1,
            [img`
                . . . . . 1 1 1 1 1 . . . 
                . . . . 1 1 1 1 1 1 1 1 1 
                . . . . e e e e 4 8 4 . . 
                . . . . e 4 e 4 4 8 4 . . 
                . . . . e 4 e 4 4 4 4 4 . 
                . . . . e e 4 4 4 4 e 4 4 
                . . . . 4 4 4 4 4 e e e . 
                . . . . . 4 4 4 4 4 . . . 
                . . . . . 1 1 7 1 1 . . . 
                . . . . 1 1 1 7 1 1 1 1 1 
                . 1 1 1 1 1 7 7 . . 1 1 1 
                . 1 1 1 1 7 7 7 . . . . . 
                . . . . 7 7 7 7 . . . . . 
                . . . 7 7 7 7 7 . . . . . 
                . . . 7 7 7 7 7 7 . . . . 
                e e 7 7 7 7 7 7 e e e . . 
                e e 7 7 . . 7 7 e e e e . 
                e e . . . . . . . . . . . 
                e . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . 1 1 1 1 1 . . . 
                . . . . 1 1 1 1 1 1 1 1 1 
                . . . . e e e e 4 8 4 . . 
                . . . . e 4 e 4 4 8 4 . . 
                . . . . e 4 e 4 4 4 4 4 . 
                . . . . e e 4 4 4 4 e 4 4 
                1 1 . . 4 4 4 4 4 e e e . 
                1 1 1 1 . 4 4 4 4 4 . . . 
                . 1 1 1 1 7 7 1 1 1 . . . 
                . . 1 1 7 7 7 1 1 1 1 . . 
                . . . . 7 7 7 7 5 1 1 . . 
                . . . 7 7 7 7 7 7 . 1 1 . 
                e e 7 7 7 7 7 7 7 . 1 1 . 
                e e 7 7 7 7 7 7 7 . . . . 
                e e . . 7 7 7 7 7 7 . . . 
                e . . . . . 7 7 7 7 . . . 
                . . . . . . . . e e e . . 
                . . . . . . . . e e e e . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . . . . . . . . . 
                . . . . 1 1 1 1 1 . . . . 
                . . . 1 1 1 1 1 1 1 1 1 . 
                . . . e e e e 4 4 8 . . . 
                . . . e e e 4 4 4 8 . . . 
                . 1 1 e e e 4 4 4 4 4 . . 
                . 1 1 e e 4 4 4 4 e 4 4 . 
                . 1 1 4 4 4 4 4 e e e . . 
                . . 1 1 4 4 4 4 4 . . . . 
                . . 1 1 7 1 1 . . . . . . 
                . . . 1 7 7 7 1 1 1 . . . 
                . . . . 7 7 7 7 1 1 1 . . 
                . . . 7 7 7 7 7 7 1 1 . . 
                . . . 7 7 7 7 7 7 1 1 . . 
                e e 7 7 7 7 7 7 7 . . . . 
                e e 7 7 . 7 7 7 7 . . . . 
                e e . . . . . e e e . . . 
                e . . . . . . e e e e . . 
                `],
            200,
            true
            )
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    info.changeScoreBy(50)
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.turning_block, function (sprite, otherSprite) {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . f f f 8 8 8 8 8 8 f f f . . 
        . f 8 8 8 6 6 6 6 6 6 8 8 8 f . 
        f 8 6 6 6 6 6 6 6 6 6 6 6 6 8 f 
        f f f f f f f f f f f f f f f f 
        f e e 4 4 e 4 e e e 4 e e e e f 
        f e e 4 4 e 4 e e 4 e e e e e f 
        f f f f f f f f f f f f f f f f 
        `)
    pause(1000)
    otherSprite.destroy()
    for (let value of wall) {
        tiles.setTileAt(value, myTiles.tile9)
        tiles.setWallAt(value, false)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player1.vy > 0) {
        if (loaded == 0) {
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
        } else {
            Player1.setVelocity(0, 200)
            Player1.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . 1 1 1 1 1 . . . . . . . 
                . . . 1 1 1 1 1 1 1 1 1 . . . . 
                . . . e e e e 4 4 8 . . . . . . 
                . . . e e e 4 4 4 8 . . . . . . 
                . . . e e e 4 4 4 4 4 . . . . . 
                . . . e e 4 4 4 4 e 4 4 . . . . 
                . . . 4 4 4 4 4 e e e . . . . . 
                . . . . 4 4 4 4 4 . . . . . . . 
                . . . . 1 7 7 1 1 1 . . . . . . 
                . . . . 7 7 7 7 1 1 1 1 . . . . 
                . . . . 7 7 7 7 7 1 1 1 . . . . 
                . . . . 7 7 7 7 7 . . . e . . . 
                . . . . 7 7 7 7 7 . . e e . . . 
                . . . . 7 7 7 7 7 7 7 e e . . . 
                . . . . . 7 7 7 7 7 7 e e . . . 
                `)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    info.changeScoreBy(100)
    game.over(true, effects.smiles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.top) {
        if (controller.A.isPressed()) {
            if (loaded == 0) {
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
                mySprite = sprites.create(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f 8 8 8 8 f f . . . . 
                    . . . f 8 8 6 6 6 6 8 8 f . . . 
                    . . f 8 f f f f f f f 6 8 f . . 
                    . f 8 6 f 1 1 1 1 1 1 f 6 8 f . 
                    . f 8 6 f 1 1 1 f 1 1 1 f 8 f . 
                    f 8 6 6 f 1 1 1 f 1 1 1 f 6 8 f 
                    f 8 6 6 f 1 1 1 1 1 1 f 6 6 6 f 
                    f 8 6 6 f 1 1 1 f f f 6 6 6 8 f 
                    f 8 6 6 f 1 1 1 f 6 6 6 6 6 8 f 
                    f 8 6 6 f f f f f 6 6 6 6 6 8 f 
                    f 8 6 6 6 6 6 6 6 6 6 6 6 6 8 f 
                    f f f f f f f f f f f f f f f f 
                    f e e 4 e 4 4 4 e e 4 4 e e e f 
                    f e e 4 e 4 4 4 e e 4 4 e e e f 
                    f f f f f f f f f f f f f f f f 
                    `, SpriteKind.turning_block)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 10))
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
                mySprite2 = sprites.create(img`
                    .....11111111.....
                    ...111111111111...
                    ..11144444444111..
                    .1144422222244411.
                    .1144422222244411.
                    ..11144444444111..
                    ...111111111111...
                    .....11111111.....
                    ........77........
                    ........77........
                    ........77........
                    7777....77....7777
                    .7777...77...7777.
                    .77777..77..77777.
                    ..77777.77.77777..
                    ..77777.77.77777..
                    ...777777777777...
                    .......7777.......
                    `, SpriteKind.gun)
                tiles.placeOnTile(mySprite2, tiles.getTileLocation(41, 10))
            } else {
                sprite.setImage(img`
                    ....11111.......
                    ...111111111....
                    ...eeee484..11..
                    ...e4e4484..11..
                    ...e4e44444.11..
                    ...ee4444e4411..
                    ...44444eee.11..
                    .....4444..111..
                    ..11171711111...
                    .11117171111....
                    .111.7777.......
                    111.757577......
                    11.777777777....
                    .777777777777e..
                    77777...77eeee..
                    7777......eee...
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
                sprite.vy = -275
                mySprite = sprites.create(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f 8 8 8 8 f f . . . . 
                    . . . f 8 8 6 6 6 6 8 8 f . . . 
                    . . f 8 f f f f f f f 6 8 f . . 
                    . f 8 6 f 1 1 1 1 1 1 f 6 8 f . 
                    . f 8 6 f 1 1 1 f 1 1 1 f 8 f . 
                    f 8 6 6 f 1 1 1 f 1 1 1 f 6 8 f 
                    f 8 6 6 f 1 1 1 1 1 1 f 6 6 6 f 
                    f 8 6 6 f 1 1 1 f f f 6 6 6 8 f 
                    f 8 6 6 f 1 1 1 f 6 6 6 6 6 8 f 
                    f 8 6 6 f f f f f 6 6 6 6 6 8 f 
                    f 8 6 6 6 6 6 6 6 6 6 6 6 6 8 f 
                    f f f f f f f f f f f f f f f f 
                    f e e 4 e 4 4 4 e e 4 4 e e e f 
                    f e e 4 e 4 4 4 e e 4 4 e e e f 
                    f f f f f f f f f f f f f f f f 
                    `, SpriteKind.turning_block)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 10))
                animation.stopAnimation(animation.AnimationTypes.All, otherSprite)
                pause(1000)
                sprite.setImage(img`
                    ......111111....
                    .....111111111..
                    .....eeee484....
                    .....e4e4484....
                    .....e4e44444...
                    .....ee4444e44..
                    .....44444eee...
                    ......44444.....
                    .....17111......
                    ....11711711....
                    ...1117777111...
                    ..111777777111..
                    ..111757757111..
                    ..111777777111..
                    ..117777777711..
                    ....77777777....
                    ....777..777....
                    ...eee....eee...
                    ..eeee....eeee..
                    `)
                info.changeScoreBy(10)
                otherSprite.destroy()
                mySprite2 = sprites.create(img`
                    .....11111111.....
                    ...111111111111...
                    ..11144444444111..
                    .1144422222244411.
                    .1144422222244411.
                    ..11144444444111..
                    ...111111111111...
                    .....11111111.....
                    ........77........
                    ........77........
                    ........77........
                    7777....77....7777
                    .7777...77...7777.
                    .77777..77..77777.
                    ..77777.77.77777..
                    ..77777.77.77777..
                    ...777777777777...
                    .......7777.......
                    `, SpriteKind.gun)
                tiles.placeOnTile(mySprite2, tiles.getTileLocation(41, 10))
            }
        } else {
            if (loaded == 0) {
                mySprite = sprites.create(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f 8 8 8 8 f f . . . . 
                    . . . f 8 8 6 6 6 6 8 8 f . . . 
                    . . f 8 f f f f f f f 6 8 f . . 
                    . f 8 6 f 1 1 1 1 1 1 f 6 8 f . 
                    . f 8 6 f 1 1 1 f 1 1 1 f 8 f . 
                    f 8 6 6 f 1 1 1 f 1 1 1 f 6 8 f 
                    f 8 6 6 f 1 1 1 1 1 1 f 6 6 6 f 
                    f 8 6 6 f 1 1 1 f f f 6 6 6 8 f 
                    f 8 6 6 f 1 1 1 f 6 6 6 6 6 8 f 
                    f 8 6 6 f f f f f 6 6 6 6 6 8 f 
                    f 8 6 6 6 6 6 6 6 6 6 6 6 6 8 f 
                    f f f f f f f f f f f f f f f f 
                    f e e 4 e 4 4 4 e e 4 4 e e e f 
                    f e e 4 e 4 4 4 e e 4 4 e e e f 
                    f f f f f f f f f f f f f f f f 
                    `, SpriteKind.turning_block)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 10))
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
                mySprite2 = sprites.create(img`
                    .....11111111.....
                    ...111111111111...
                    ..11144444444111..
                    .1144422222244411.
                    .1144422222244411.
                    ..11144444444111..
                    ...111111111111...
                    .....11111111.....
                    ........77........
                    ........77........
                    ........77........
                    7777....77....7777
                    .7777...77...7777.
                    .77777..77..77777.
                    ..77777.77.77777..
                    ..77777.77.77777..
                    ...777777777777...
                    .......7777.......
                    `, SpriteKind.gun)
                tiles.placeOnTile(mySprite2, tiles.getTileLocation(47, 10))
            } else {
                mySprite = sprites.create(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f 8 8 8 8 f f . . . . 
                    . . . f 8 8 6 6 6 6 8 8 f . . . 
                    . . f 8 f f f f f f f 6 8 f . . 
                    . f 8 6 f 1 1 1 1 1 1 f 6 8 f . 
                    . f 8 6 f 1 1 1 f 1 1 1 f 8 f . 
                    f 8 6 6 f 1 1 1 f 1 1 1 f 6 8 f 
                    f 8 6 6 f 1 1 1 1 1 1 f 6 6 6 f 
                    f 8 6 6 f 1 1 1 f f f 6 6 6 8 f 
                    f 8 6 6 f 1 1 1 f 6 6 6 6 6 8 f 
                    f 8 6 6 f f f f f 6 6 6 6 6 8 f 
                    f 8 6 6 6 6 6 6 6 6 6 6 6 6 8 f 
                    f f f f f f f f f f f f f f f f 
                    f e e 4 e 4 4 4 e e 4 4 e e e f 
                    f e e 4 e 4 4 4 e e 4 4 e e e f 
                    f f f f f f f f f f f f f f f f 
                    `, SpriteKind.turning_block)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 10))
                sprite.setImage(img`
                    ....11111.......
                    ...111111111....
                    ...eeee484..11..
                    ...e4e4484..11..
                    ...e4e44444.11..
                    ...ee4444e4411..
                    ...44444eee.11..
                    .....4444..111..
                    ..11171711111...
                    .11117171111....
                    .111.7777.......
                    111.757577......
                    11.777777777....
                    .777777777777e..
                    77777...77eeee..
                    7777......eee...
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
                sprite.vy = -100
                animation.stopAnimation(animation.AnimationTypes.All, otherSprite)
                pause(500)
                sprite.setImage(img`
                    ......111111....
                    .....111111111..
                    .....eeee484....
                    .....e4e4484....
                    .....e4e44444...
                    .....ee4444e44..
                    .....44444eee...
                    ......44444.....
                    .....17111......
                    ....11711711....
                    ...1117777111...
                    ..111777777111..
                    ..111757757111..
                    ..111777777111..
                    ..117777777711..
                    ....77777777....
                    ....777..777....
                    ...eee....eee...
                    ..eeee....eeee..
                    `)
                info.changeScoreBy(10)
                otherSprite.destroy()
                mySprite2 = sprites.create(img`
                    .....11111111.....
                    ...111111111111...
                    ..11144444444111..
                    .1144422222244411.
                    .1144422222244411.
                    ..11144444444111..
                    ...111111111111...
                    .....11111111.....
                    ........77........
                    ........77........
                    ........77........
                    7777....77....7777
                    .7777...77...7777.
                    .77777..77..77777.
                    ..77777.77.77777..
                    ..77777.77.77777..
                    ...777777777777...
                    .......7777.......
                    `, SpriteKind.gun)
                tiles.placeOnTile(mySprite2, tiles.getTileLocation(47, 10))
            }
        }
    } else {
        game.over(false, effects.slash)
    }
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
let projectile: Sprite = null
let loaded = 0
let BLOCK: Sprite = null
let wall: tiles.Location[] = []
let Player1: Sprite = null
info.setScore(0)
tiles.setTilemap(tiles.createTilemap(hex`50001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000011000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000110000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000070700070000000000000000000000000000000000000000000000000000000011000000000000000000000000000000000000000000000000000000000000030100000000000000000000000000000000000000000000000a0900000000000000000000000000000000000000000000110000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000a0f10090000000000000000000000000000000000000000001100000000000000000000000000000000000000000000000000000e0e000000020000000000000000000000000500000000000000060a0f0b0b1009000000000000000000000000000000000000000011000000000000000000000000000007000700000000000000000e0e0e00000002000000000008080808080900000a080808080808080f0b0b0b0b10080808080808090500000000000000000000060a090000000b0b000000000000000000000000000000000000000e0e0e0e0000000200000000000b0b0b0b0b0c00000d0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b100808080808080808080808080f0c0000000b0b0b00000000000000000000000000000000000e0e0e0e0e0000000200000000000b0b0b0b0b0c00000d0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0c0000000b0b0b0b0500000000000000000000000600000e0e0e0e0e0e0000000e00000000000b0b0b0b0b0c00000d0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0c0000000b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b000a080808080808080808080808080808080b0b0b0b0b0c00000d0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0c0000000b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b000d0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b`, img`
    ..........................................2................................2....
    ..........................................2................................2....
    ..........................................2................................2....
    ..........................................2................................2....
    ..........2...............................2................................2....
    ..........................................2................................2....
    ..........................................2................................2....
    ..........2222............................2................................2....
    ..................22......................2.....................................
    .................2..2.....................2..........................22.........
    ................2....2....................2..............222........2.2.........
    222222..22222222......2222222............22...22...................2..2.........
    .....2..2....................222222222222.2...2.2.................2...2.........
    .....2..2.................................2...2..2...............2....2...2.....
    .....2..2.................................2...2...222222222222.22......2222.....
    .....2..2.................................2...2..............2.2................
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile10,myTiles.tile11,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile3,myTiles.tile2,myTiles.tile4,myTiles.tile5], TileScale.Sixteen))
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
controller.moveSprite(Player1, 100, 0)
wall = tiles.getTilesByType(myTiles.tile5)
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
loaded = 0
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
