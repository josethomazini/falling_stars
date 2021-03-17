import Phaser from 'phaser';

import { keys } from '../core/Consts';

export default class StarGroup {
  constructor(scene) {
    this.group = scene.physics.add.group({
      key: keys.star,
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 },
    });

    this.group.children.iterate((child) => {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });
  }
}
