import { KEY } from '../../../core/Consts';
import DUDE_ANIM from '../../Consts';

export default class DudeAnimations {
  constructor(scene) {
    this.scene = scene;

    this.right();
    this.left();
    this.idle();
    this.dead();
  }

  dead() {
    const config = {
      key: DUDE_ANIM.dead,
      frames: [{ key: KEY.dude, frame: 9 }],
      frameRate: 20,
    };

    this.scene.anims.create(config);
  }

  idle() {
    const config = {
      key: DUDE_ANIM.idle,
      frames: [{ key: KEY.dude, frame: 4 }],
      frameRate: 20,
    };

    this.scene.anims.create(config);
  }

  right() {
    const config = {
      key: DUDE_ANIM.right,
      frames: this.scene.anims.generateFrameNumbers(
        KEY.dude, { start: 5, end: 8 },
      ),
      frameRate: 10,
      repeat: -1,
    };

    this.scene.anims.create(config);
  }

  left() {
    const config = {
      key: DUDE_ANIM.left,
      frames: this.scene.anims.generateFrameNumbers(
        KEY.dude, { start: 0, end: 3 },
      ),
      frameRate: 10,
      repeat: -1,
    };

    this.scene.anims.create(config);
  }
}
