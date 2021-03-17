import { KEY } from '../core/Consts';

export default class BackgroundSound {
  constructor(scene) {
    this.music = scene.sound.add(KEY.ambianceWind, {
      volume: 1,
      loop: true,
    });
  }

  play() {
    this.music.play();
  }
}
