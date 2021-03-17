import GameState from '../core/GameState';
import { anims } from '../core/Consts';

export default class PlayerControl {
  constructor(scene, dude) {
    this.scene = scene;
    this.dude = dude;

    this.cursors = scene.input.keyboard.createCursorKeys();
    this.scene.input.keyboard.on('keydown-SPACE', this.restart, this);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.moveLeft();
    } else if (this.cursors.right.isDown) {
      this.moveRight();
    } else {
      this.idle();
    }
    if (this.cursors.up.isDown && this.dude.body.touching.down) {
      this.jump();
    }
  }

  restart() {
    if (GameState.gameOver) {
      this.scene.scene.start('StageScene');
    }
  }

  moveLeft() {
    this.dude.setVelocityX(-160);
    this.dude.anims.play(anims.left, true);
  }

  moveRight() {
    this.dude.setVelocityX(160);
    this.dude.anims.play(anims.right, true);
  }

  jump() {
    this.dude.setVelocityY(-330);
  }

  idle() {
    this.dude.setVelocityX(0);
    this.dude.anims.play(anims.idle);
  }
}
