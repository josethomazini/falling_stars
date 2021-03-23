import State from './State';
import { SCENE } from '../../core/Consts';
import DUDE_ANIM from '../Consts';

export default class PlayerControl {
  constructor(scene, dude, soundManager) {
    this.scene = scene;
    this.dude = dude;
    this.soundManager = soundManager;

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
    if (State.gameOver) {
      this.soundManager.background.increaseVolume();
      this.scene.scene.start(SCENE.stage);
    }
  }

  moveLeft() {
    this.dude.setVelocityX(-160);
    this.dude.anims.play(DUDE_ANIM.left, true);
  }

  moveRight() {
    this.dude.setVelocityX(160);
    this.dude.anims.play(DUDE_ANIM.right, true);
  }

  jump() {
    this.soundManager.jump.play();
    this.dude.setVelocityY(-330);
  }

  idle() {
    this.dude.setVelocityX(0);
    this.dude.anims.play(DUDE_ANIM.idle);
  }
}
