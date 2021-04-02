import State from './State';
import DUDE_ANIM from '../Consts';

export default class CollisionRules {
  constructor(
    scene, dude, platforms, stars, bombSpawner,
    scoreLabel, soundManager, gameOverMessage,
  ) {
    this.bombSpawner = bombSpawner;
    this.scoreLabel = scoreLabel;
    this.soundManager = soundManager;
    this.gameOverMessage = gameOverMessage;

    this.stars = stars;
    this.scene = scene;

    this.cursors = scene.input.keyboard.createCursorKeys();

    this.scene.physics.add.collider(dude, platforms.group);
    this.scene.physics.add.collider(this.stars.group, platforms.group);
    this.scene.physics.add.collider(bombSpawner.group, platforms.group);

    this.scene.physics.add.collider(
      dude, this.bombSpawner.group,
      this.dudeHitsBomb, null, this,
    );

    this.scene.physics.add.overlap(
      dude, stars.group,
      this.dudeCollectsStar, null, this,
    );

    this.scene.physics.add.collider(
      this.bombSpawner.group, this.bombSpawner.group,
      this.bombHitsBomb, null, this,
    );
  }

  // eslint-disable-next-line no-unused-vars
  dudeHitsBomb(dude, bomb) {
    this.gameOverMessage.showTexts();

    this.soundManager.bombExplode.play();
    this.soundManager.deathScream.play();
    this.soundManager.background.setVolume(0.5);
    this.scene.physics.pause();

    dude.anims.play(DUDE_ANIM.dead);

    State.gameOver = true;
  }

  bombHitsBomb(bomb1, bomb2) {
    this.soundManager.bombExplode.play();
    bomb1.disableBody(true, true);
    bomb2.disableBody(true, true);
  }

  jumpOver(dude, star) {
    const dudeY = dude.y + dude.height / 2;
    const starY = star.y + star.height / 2;

    return this.cursors.up.isDown && dudeY < starY;
  }

  dudeCollectsStar(dude, star) {
    this.soundManager.collectCoin.play();
    star.disableBody(true, true);

    if (this.jumpOver(dude, star) === true) {
      // som legal
      this.scoreLabel.add(50);
    } else {
      this.scoreLabel.add(10);
    }

    if (this.stars.group.countActive(true) === 0) {
      //  A new batch of stars to collect
      this.stars.group.children.iterate((child) => {
        child.enableBody(true, child.x, 0, true, true);
      });
    }

    this.bombSpawner.spawn(dude.x);
  }
}
