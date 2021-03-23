import Phaser from 'phaser';

import './style.css';

import PreloadScene from './preload';
import StageScene from './stage';

const config = {
  type: Phaser.CANVAS,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      // debug: true,
      gravity: {
        y: 300,
      },
    },
  },
  scene: [
    PreloadScene,
    StageScene,
  ],
};

export default new Phaser.Game(config);
