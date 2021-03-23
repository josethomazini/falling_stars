export default class MaxScoreManager {
  constructor(maxScoreLabel) {
    this.key = 'falling_stars::max_score';
    this.maxScore = localStorage.getItem(this.key) || 0;
    this.maxScoreLabel = maxScoreLabel;

    this.maxScoreLabel.setScore(this.maxScore);
  }

  currentScoreChangedTo(score) {
    if (score > this.maxScore) {
      localStorage.setItem(this.key, score);
      this.maxScoreLabel.setScore(score);
    }
  }
}
