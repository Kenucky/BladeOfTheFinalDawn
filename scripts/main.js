const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 600,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000 },
            debug: false
        }
    },
    scene:[Menu,Controls,About,Level1,Level2,Level3,GameOver,Congratulations]
};

const game = new Phaser.Game(config);
