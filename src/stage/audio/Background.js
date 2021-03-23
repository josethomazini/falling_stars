import { KEY } from '../../core/Consts';

export default class Background {
  constructor(scene) {
    const config = {
      volume: 1,
      loop: true,
    };
    this.audio = scene.sound.add(KEY.epicBattle, config);
  }

  play() {
    this.audio.play();
  }

  decreaseVolume() {
    this.audio.setVolume(0.5);
  }

  increaseVolume() {
    this.audio.setVolume(1);
  }
}
