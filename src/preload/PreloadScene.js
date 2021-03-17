import Phaser from 'phaser';

import AssetsLoader from './AssetsLoader';
import EventHandler from './EventHandler';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    new EventHandler(this);
    new AssetsLoader(this);
  }

  create() {
    this.scene.start('StageScene');
  }
}
