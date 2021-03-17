import GameState from '../core/GameState';
import { anims } from '../core/Consts';

export default class CollisionRules {
  constructor(scene, dude, platforms, stars, bombSpawner, scoreLabel) {
    this.bombSpawner = bombSpawner;
    this.scoreLabel = scoreLabel;
    this.stars = stars;
    this.scene = scene;

    this.scene.physics.add.collider(dude, platforms.group);
    this.scene.physics.add.collider(this.stars.group, platforms.group);
    this.scene.physics.add.collider(bombSpawner.group, platforms.group);

    this.scene.physics.add.collider(
      dude, this.bombSpawner.group, this.hitBomb, null, this,
    );

    this.scene.physics.add.overlap(
      dude, stars.group, this.collectStar, null, this,
    );
  }

  // eslint-disable-next-line no-unused-vars
  hitBomb(player, bomb) {
    this.scene.physics.pause();

    player.setTint(0xff0000);

    player.anims.play(anims.idle);

    GameState.gameOver = true;
  }

  collectStar(player, star) {
    star.disableBody(true, true);
    this.scoreLabel.add(10);

    if (this.stars.group.countActive(true) === 0) {
      //  A new batch of stars to collect
      this.stars.group.children.iterate((child) => {
        child.enableBody(true, child.x, 0, true, true);
      });
    }

    this.bombSpawner.spawn(player.x);
  }
}
