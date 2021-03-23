import Phaser from 'phaser';

import { KEY } from '../../core/Consts';

export default class StarGroup {
  constructor(scene) {
    const config = {
      key: KEY.star,
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 },
    };

    this.group = scene.physics.add.group(config);

    this.group.children.iterate((child) => {
      const random = Phaser.Math.FloatBetween(0.4, 0.8);
      child.setBounceY(random);
    });
  }
}
