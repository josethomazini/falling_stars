import { KEY } from '../core/Consts';

import bomb from './assets/bomb.png';
import dude from './assets/dude.png';
import platform from './assets/platform.png';
import sky from './assets/sky.png';
import star from './assets/star.png';
import epicBattle from './assets/Twin Musicom - Epic Battle.mp3';
import bombExplode from './assets/155235__zangrutz__bomb-small.mp3';
import deathScream from './assets/348310__redafs__zombie-monster-scream.wav';
import jump from './assets/369515__lefty-studios__jumping-sfx.wav';
import collectCoin from './assets/135936__bradwesson__collectcoin.wav';

export default class AssetsLoader {
  constructor(scene) {
    this.scene = scene;

    this.loadImages();
    this.loadSprites();
    this.loadSounds();
  }

  loadImages() {
    this.scene.load.image(KEY.sky, sky);
    this.scene.load.image(KEY.platform, platform);
    this.scene.load.image(KEY.star, star);
    this.scene.load.image(KEY.bomb, bomb);
  }

  loadSprites() {
    this.scene.load.spritesheet(
      KEY.dude, dude,
      {
        frameWidth: 32,
        frameHeight: 39,
      },
    );
  }

  loadSounds() {
    this.scene.load.audio(KEY.epicBattle, epicBattle);
    this.scene.load.audio(KEY.bombExplode, bombExplode);
    this.scene.load.audio(KEY.deathScream, deathScream);
    this.scene.load.audio(KEY.jump, jump);
    this.scene.load.audio(KEY.collectCoin, collectCoin);
  }
}
