import './assets/style.css';
import Phaser from 'phaser';

import PreloadScene from './scenes/PreloadScene';
import GameScene from './scenes/GameScene';

const config = {
  type: Phaser.CANVAS,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 300,
      },
    },
  },
  scene: [
    PreloadScene,
    GameScene,
  ],
};

export default new Phaser.Game(config);
