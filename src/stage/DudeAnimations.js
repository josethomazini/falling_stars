import { KEY, DUDE_ANIM } from '../core/Consts';

export default class DudeAnimations {
  constructor(scene) {
    scene.anims.create({
      key: DUDE_ANIM.left,
      frames: scene.anims.generateFrameNumbers(
        KEY.dude, { start: 0, end: 3 },
      ),
      frameRate: 10,
      repeat: -1,
    });

    scene.anims.create({
      key: DUDE_ANIM.idle,
      frames: [{ key: KEY.dude, frame: 4 }],
      frameRate: 20,
    });

    scene.anims.create({
      key: DUDE_ANIM.right,
      frames: scene.anims.generateFrameNumbers(
        KEY.dude, { start: 5, end: 8 },
      ),
      frameRate: 10,
      repeat: -1,
    });
  }
}
