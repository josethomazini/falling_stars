export default class ScoreLabel {
  constructor(scene, maxScoreManager) {
    this.maxScoreManager = maxScoreManager;

    const config = {
      x: 25,
      y: 16,
      text: '',
      style: {
        fontSize: '25px',
        fill: '#000',
      },
    };

    this.text = scene.make.text(config);
    this.text.setOrigin(0, 0);

    this.setScore(0);
  }

  setScore(value) {
    this.value = value;
    const txt = `Score: ${this.value}`;
    this.text.setText(txt);
    this.maxScoreManager.currentScoreChangedTo(value);
  }

  add(points) {
    const updatedScore = this.value + points;
    this.setScore(updatedScore);
  }
}
