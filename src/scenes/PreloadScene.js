import Phaser from 'phaser';
import keys from '../helpers/consts';

import sky from '../assets/sky.png';
import platform from '../assets/platform.png';
import star from '../assets/star.png';
import bomb from '../assets/bomb.png';
import dude from '../assets/dude.png';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.image(keys.sky, sky);
    this.load.image(keys.platform, platform);
    this.load.image(keys.star, star);
    this.load.image(keys.bomb, bomb);

    this.load.spritesheet(
      keys.dude, dude,
      {
        frameWidth: 32,
        frameHeight: 48,
      },
    );
  }

  create() {
    this.scene.start('GameScene');
  }
}
