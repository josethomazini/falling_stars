import Phaser from 'phaser';

import AssetsLoader from './AssetsLoader';
import EventHandler from './event-handler';
import { SCENE } from '../core/Consts';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super(SCENE.preload);
  }

  preload() {
    new EventHandler(this);
    new AssetsLoader(this);
  }

  create() {
    this.scene.start(SCENE.stage);
  }
}
