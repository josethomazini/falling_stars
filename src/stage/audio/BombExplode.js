import { KEY } from '../../core/Consts';

export default class BombExplode {
  constructor(scene) {
    const config = {
      volume: 1,
      loop: false,
    };
    this.audio = scene.sound.add(KEY.bombExplode, config);
  }

  play() {
    this.audio.play();
  }
}
