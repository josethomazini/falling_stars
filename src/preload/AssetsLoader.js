import { KEY } from '../core/Consts';

import bomb from './assets/bomb.png';
import dude from './assets/dude.png';
import platform from './assets/platform.png';
import sky from './assets/sky.png';
import star from './assets/star.png';
import ambianceWind from './assets/ambiance-wind-forest-calm-loop.wav';

export default class AssetsLoader {
  constructor(scene) {
    scene.load.image(KEY.sky, sky);
    scene.load.image(KEY.platform, platform);
    scene.load.image(KEY.star, star);
    scene.load.image(KEY.bomb, bomb);

    scene.load.spritesheet(
      KEY.dude, dude,
      {
        frameWidth: 32,
        frameHeight: 48,
      },
    );

    scene.load.audio(KEY.ambianceWind, ambianceWind);
  }
}
