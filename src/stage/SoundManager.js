import { KEY } from '../core/Consts';
import Sound from '../core/Sound';

class SoundManager {
  constructor(scene) {
    this.background = new Sound(scene, KEY.epicBattle, true);
    this.bombExplode = new Sound(scene, KEY.bombExplode, false);
    this.deathScream = new Sound(scene, KEY.deathScream, false);
    this.jump = new Sound(scene, KEY.jump, false);
    this.collectCoin = new Sound(scene, KEY.collectCoin, false);

    this.background.play();
  }
}

export default (() => {
  let instance = null;

  return (scene) => {
    if (instance == null) {
      instance = new SoundManager(scene);
    }
    return instance;
  };
})();
