export default class ScoreLabel {
  constructor(scene, x, y, value) {
    const style = { fontSize: '32px', fill: '#000' };

    this.text = scene.make.text({
      x, y, text: '', style,
    });

    this.setScore(value);
  }

  setScore(value) {
    this.value = value;
    this.text.setText(`Score: ${this.value}`);
  }

  add(points) {
    this.setScore(this.value + points);
  }
}
