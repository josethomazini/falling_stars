import { KEY } from '../../core/Consts';

export default class DeathScream {
  constructor(scene) {
    const config = {
      volume: 1,
      loop: false,
    };
    this.audio = scene.sound.add(KEY.deathScream, config);
  }

  play() {
    this.audio.play();
  }
}
