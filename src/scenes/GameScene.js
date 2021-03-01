import Phaser from 'phaser';
import keys from '../helpers/consts';
import ScoreLabel from '../entities/ScoreLabel';
import BombSpawner from '../entities/BombSpawner';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    this.player = null;
    this.cursors = null;
    this.platforms = null;
    this.scoreLabel = null;
    this.stars = null;
    this.bombSpawner = null;
    this.bombsGroup = null;

    this.gameOver = false;

    this.add.image(400, 300, keys.sky);
    this.platforms = this.createPlatforms();
    this.player = this.createPlayer();
    this.stars = this.createStars();
    this.scoreLabel = this.createScoreLabel(16, 16, 0);
    this.bombSpawner = new BombSpawner(this, keys.bomb);
    this.bombsGroup = this.bombSpawner.group;
    this.cursors = this.input.keyboard.createCursorKeys();
    this.collisionDefs();

    this.input.keyboard.on('keydown-SPACE', this.restart, this);
  }

  update() {
    if (this.gameOver) {
      return;
    }

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);

      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);

      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }

  collisionDefs() {
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.stars, this.platforms);
    this.physics.add.collider(this.bombsGroup, this.platforms);

    this.physics.add.collider(
      this.player, this.bombsGroup, this.hitBomb, null, this,
    );

    this.physics.add.overlap(
      this.player, this.stars, this.collectStar, null, this,
    );
  }

  // eslint-disable-next-line no-unused-vars
  hitBomb(player, bomb) {
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    this.gameOver = true;
  }

  restart() {
    if (this.gameOver) {
      this.scene.start('PreloadScene');
    }
  }

  collectStar(player, star) {
    star.disableBody(true, true);
    this.scoreLabel.add(10);

    if (this.stars.countActive(true) === 0) {
      //  A new batch of stars to collect
      this.stars.children.iterate((child) => {
        child.enableBody(true, child.x, 0, true, true);
      });
    }

    this.bombSpawner.spawn(player.x);
  }

  createScoreLabel(x, y, score) {
    const style = { fontSize: '32px', fill: '#000' };
    const label = new ScoreLabel(this, x, y, score, style);

    this.add.existing(label);

    return label;
  }

  createStars() {
    const stars = this.physics.add.group({
      key: keys.star,
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 },
    });

    stars.children.iterate((child) => {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    return stars;
  }

  createPlatforms() {
    const platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, keys.platform).setScale(2).refreshBody();

    platforms.create(600, 400, keys.platform);
    platforms.create(50, 250, keys.platform);
    platforms.create(750, 220, keys.platform);

    return platforms;
  }

  createPlayer() {
    const player = this.physics.add.sprite(100, 450, keys.dude);
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers(keys.dude, { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: keys.dude, frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers(keys.dude, { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    return player;
  }
}
