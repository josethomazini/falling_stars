import Phaser from 'phaser';

import Background from './entities/Background';
import BombSpawner from './entities/BombSpawner';
import CollisionRules from './rules/CollisionRules';
import Dude from './entities/dude';
import MaxScoreLabel from './entities/score/MaxScoreLabel';
import MaxScoreManager from './entities/score/MaxScoreManager';
import PlatformGroup from './entities/PlatformGroup';
import PlayerControl from './rules/PlayerControl';
import ScoreLabel from './entities/score/ScoreLabel';
import StarGroup from './entities/StarGroup';
import State from './rules/State';
import SoundManager from './SoundManager';
import { SCENE } from '../core/Consts';
import GameOverMessage from './entities/GameOverMessage';

export default class StageScene extends Phaser.Scene {
  constructor() {
    super(SCENE.stage);
  }

  create() {
    State.gameOver = false;

    const soundManager = SoundManager(this);
    new Background(this);
    const dude = new Dude(this);
    const platforms = new PlatformGroup(this);
    const stars = new StarGroup(this);
    const bombSpawner = new BombSpawner(this);
    const maxScoreLabel = new MaxScoreLabel(this);
    const maxScoreManager = new MaxScoreManager(maxScoreLabel);
    const scoreLabel = new ScoreLabel(this, maxScoreManager);
    const gameOverMessage = new GameOverMessage(this);

    this.playerControl = new PlayerControl(this, dude, soundManager);
    new CollisionRules(
      this, dude, platforms, stars, bombSpawner,
      scoreLabel, soundManager, gameOverMessage,
    );
  }

  update() {
    if (State.gameOver) {
      return;
    }

    this.playerControl.update();
  }
}
