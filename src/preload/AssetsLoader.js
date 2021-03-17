import { keys } from '../core/Consts';

import sky from './assets/sky.png';
import platform from './assets/platform.png';
import star from './assets/star.png';
import bomb from './assets/bomb.png';
import dude from './assets/dude.png';

export default class AssetsLoader {
  constructor(scene) {
    scene.load.image(keys.sky, sky);
    scene.load.image(keys.platform, platform);
    scene.load.image(keys.star, star);
    scene.load.image(keys.bomb, bomb);

    scene.load.spritesheet(
      keys.dude, dude,
      {
        frameWidth: 32,
        frameHeight: 48,
      },
    );
  }
}
