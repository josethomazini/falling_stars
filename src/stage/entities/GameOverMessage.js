export default class GameOverMessage {
  constructor(scene) {
    this.scene = scene;

    this.gameOverText = this.makeGameOverText();
    this.hitSpaceText = this.makeHitSpaceText();

    this.gameOverText.visible = false;
    this.hitSpaceText.visible = false;
  }

  makeHitSpaceText() {
    const { width, height } = this.scene.cameras.main;

    const config = {
      x: width / 2,
      y: height / 2,
      text: 'Hit space to continue',
      style: {
        fontSize: '46px',
        fill: '#f00',
      },
    };

    const text = this.scene.make.text(config);
    text.setOrigin(0.5, 0.5);

    return text;
  }

  makeGameOverText() {
    const { width, height } = this.scene.cameras.main;

    const config = {
      x: width / 2,
      y: height / 4,
      text: 'GAME OVER',
      style: {
        fontSize: '65px',
        fill: '#f00',
      },
    };

    const text = this.scene.make.text(config);
    text.setOrigin(0.5, 0.5);

    return text;
  }

  showTexts() {
    this.gameOverText.visible = true;
    this.hitSpaceText.visible = true;
  }
}
