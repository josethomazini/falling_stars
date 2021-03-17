import { KEY } from '../core/Consts';

export default class Background {
  constructor(scene) {
    scene.add.image(400, 300, KEY.sky);
  }
}
