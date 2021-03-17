import { keys, anims } from '../core/Consts';

export default class DudeAnimations {
  constructor(scene) {
    scene.anims.create({
      key: anims.left,
      frames: scene.anims.generateFrameNumbers(
        keys.dude, { start: 0, end: 3 },
      ),
      frameRate: 10,
      repeat: -1,
    });

    scene.anims.create({
      key: anims.idle,
      frames: [{ key: keys.dude, frame: 4 }],
      frameRate: 20,
    });

    scene.anims.create({
      key: anims.right,
      frames: scene.anims.generateFrameNumbers(
        keys.dude, { start: 5, end: 8 },
      ),
      frameRate: 10,
      repeat: -1,
    });
  }
}
