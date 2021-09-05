let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let game = new Phaser.Game(config);

function preload() {
  this.load.image('sky', 'phaser3-tutorial-src/assets/sky.png');
  this.load.image('ground', 'phaser3-tutorial-src/assets/platform.png');
  this.load.image('star', 'phaser3-tutorial-src/assets/star.png');
  this.load.image('bomb', 'phaser3-tutorial-src/assets/bomb.png');
  this.load.spritesheet('dude', 'phaser3-tutorial-src/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

let platforms;

function create() {
  this.add.image(400, 300, 'sky');
  // this.add.image(400, 300, 'star');

  platforms = this.physics.add.staticGroup();

  platforms.create(400, 568, 'ground').setScale(2).refreshBody();

  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');
}
function update() {

}