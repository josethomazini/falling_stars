export default class LoadingText {
  constructor(scene) {
    const { width, height } = scene.cameras.main;

    this.text = scene.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    this.text.setOrigin(0.5, 0.5);
  }

  completed() {
    this.text.destroy();
  }
}
