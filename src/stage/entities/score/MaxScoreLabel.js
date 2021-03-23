export default class MaxScoreLabel {
  constructor(scene) {
    const { width } = scene.cameras.main;

    const config = {
      x: width - 25,
      y: 16,
      text: '',
      style: {
        fontSize: '25px',
        fill: '#000',
      },
    };

    this.text = scene.make.text(config);
    this.text.setOrigin(1, 0);
  }

  setScore(value) {
    this.value = value;
    const txt = `Max Score: ${this.value}`;
    this.text.setText(txt);
  }
}
