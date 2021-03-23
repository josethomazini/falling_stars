import Background from './Background';
import BombExplode from './BombExplode';
import DeathScream from './DeathScream';
import Jump from './Jump';
import CollectCoin from './CollectCoin';

let soundManager = null;

class SoundManager {
  constructor(scene) {
    this.background = new Background(scene);
    this.bombExplode = new BombExplode(scene);
    this.deathScream = new DeathScream(scene);
    this.jump = new Jump(scene);
    this.collectCoin = new CollectCoin(scene);

    this.background.play();
  }
}

const soundManagerFactory = (scene) => {
  // Avoid creation of multiple SoundManager instances.
  if (soundManager === null) {
    soundManager = new SoundManager(scene);
  }
  return soundManager;
};

export default soundManagerFactory;
