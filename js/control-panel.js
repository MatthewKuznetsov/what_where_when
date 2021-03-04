const tvScoreNumberElement = document.getElementById('tv-score');
const expertsScoreNumberElement = document.getElementById('experts-score');

const _state = {
  display: 'score',
  imageNumber: 2,
  score: { tv: 9, experts: 6 },
};
setState(_state);


setInterval(checkScore, CHECK_INTERVAL)

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

function backToScore() {
  _state.display = 'score';
  setState(_state);
} 

function setImage(number) {
  _state.display = 'image';
  _state.imageNumber = number;
  setState(_state);
}

function incrementExperts() {
  _state.score.experts++;
  setState(_state);
}
function decrementExperts() {
  if (_state.score.experts > 0) {
    _state.score.experts--;
    setState(_state);
  }
}
function incrementTv() {
  _state.score.tv++;
  setState(_state);
}
function decrementTv() {
  if (_state.score.tv > 0) {
    _state.score.tv--;
    setState(_state);
  }
}