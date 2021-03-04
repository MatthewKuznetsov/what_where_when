const tvScoreNumberElement = document.getElementById('tv-score-number');
const expertsScoreNumberElement = document.getElementById('experts-score-number');

function checkScore() {
  const state = getState();
  if (state && state.score) {
    if (tvScoreNumberElement && state.score.tv != null) {
      tvScoreNumberElement.innerHTML = state.score.tv;
    }
    if (expertsScoreNumberElement && state.score.experts != null) {
      expertsScoreNumberElement.innerHTML = state.score.experts;
    }
  }
}

setInterval(checkScore, CHECK_INTERVAL);