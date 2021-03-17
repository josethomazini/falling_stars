import { keys } from '../core/Consts';

export default class Background {
  constructor(scene) {
    scene.add.image(400, 300, keys.sky);
  }
}
