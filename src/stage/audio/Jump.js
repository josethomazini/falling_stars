import { KEY } from '../../core/Consts';

export default class Jump {
  constructor(scene) {
    const config = {
      volume: 1,
      loop: false,
    };
    this.audio = scene.sound.add(KEY.jump, config);
  }

  play() {
    this.audio.play();
  }
}
