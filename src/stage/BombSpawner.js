import Phaser from 'phaser';

import { keys } from '../core/Consts';

export default class BombSpawner {
  constructor(scene) {
    this.group = scene.physics.add.group();
  }

  spawn(playerX) {
    const x = (playerX < 400)
      ? Phaser.Math.Between(400, 800)
      : Phaser.Math.Between(0, 400);

    const bomb = this.group.create(x, 16, keys.bomb);
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
  }
}
