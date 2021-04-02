export default class Sound {
  constructor(scene, key, loop) {
    const config = {
      volume: 1,
      loop,
    };
    this.audio = scene.sound.add(key, config);
  }

  play() {
    this.audio.play();
  }

  setVolume(value) {
    this.audio.setVolume(value);
  }
}
