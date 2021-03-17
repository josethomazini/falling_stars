import Phaser from 'phaser';

import Background from './Background';
import BombSpawner from './BombSpawner';
import CollisionRules from './CollisionRules';
import Dude from './Dude';
import GameState from '../core/GameState';
import PlatformGroup from './PlatformGroup';
import PlayerControl from './PlayerControl';
import ScoreLabel from './ScoreLabel';
import StarGroup from './StarGroup';

export default class StageScene extends Phaser.Scene {
  constructor() {
    super('StageScene');
  }

  create() {
    GameState.gameOver = false;

    new Background(this);

    const dude = new Dude(this);
    const platforms = new PlatformGroup(this);
    const stars = new StarGroup(this);
    const bombSpawner = new BombSpawner(this);
    const scoreLabel = new ScoreLabel(this, 16, 16, 0);

    this.playerControl = new PlayerControl(this, dude);
    new CollisionRules(this, dude, platforms, stars, bombSpawner, scoreLabel);
  }

  update() {
    if (GameState.gameOver) {
      return;
    }

    this.playerControl.update();
  }
}
