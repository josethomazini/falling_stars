import { keys } from '../core/Consts';

export default class PlatformGroup {
  constructor(scene) {
    this.group = scene.physics.add.staticGroup();

    this.group.create(400, 568, keys.platform).setScale(2).refreshBody();

    this.group.create(600, 400, keys.platform);
    this.group.create(50, 250, keys.platform);
    this.group.create(750, 220, keys.platform);
  }
}
