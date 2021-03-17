import Phaser from 'phaser';

import DudeAnimations from './DudeAnimations';
import { KEY } from '../core/Consts';

export default class Dude extends Phaser.Physics.Arcade.Sprite {
  constructor(scene) {
    super(scene, 100, 450, KEY.dude);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setBounce(0.2);
    this.setCollideWorldBounds(true);

    new DudeAnimations(scene);
  }
}
