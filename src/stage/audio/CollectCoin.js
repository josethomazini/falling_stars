import { KEY } from '../../core/Consts';

export default class CollectCoin {
  constructor(scene) {
    const config = {
      volume: 1,
      loop: false,
    };
    this.audio = scene.sound.add(KEY.collectCoin, config);
  }

  play() {
    this.audio.play();
  }
}
