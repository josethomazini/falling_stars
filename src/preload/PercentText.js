export default class PercentText {
  constructor(scene) {
    const { width, height } = scene.cameras.main;

    this.text = scene.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    this.text.setOrigin(0.5, 0.5);
  }

  progressed(value) {
    this.text.setText(`${parseInt(value * 100, 10)}%`);
  }

  completed() {
    this.text.destroy();
  }
}
