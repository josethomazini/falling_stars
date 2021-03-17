export default class AssertText {
  constructor(scene) {
    const { width, height } = scene.cameras.main;

    this.text = scene.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });

    this.text.setOrigin(0.5, 0.5);
  }

  fileProgressed(file) {
    this.text.setText(`Loading asset: ${file.key}`);
  }

  completed() {
    this.text.destroy();
  }
}
