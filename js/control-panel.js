const tvScoreNumberElement = document.getElementById("tv-score");
const expertsScoreNumberElement = document.getElementById("experts-score");
const nowDisplaysElement = document.getElementById("now-displays");
const audioElements = document.querySelectorAll("audio");

audioElements.forEach((e) => {
  e.volume = 0.5;
  e.addEventListener("pause", () => {
    if (e.classList.contains("reset-on-pause")) e.currentTime = 0;
  });
});

const _state = {
  display: "score",
  imageNumber: 2,
  score: { tv: 9, experts: 6 },
};
setState(_state);

checkState();
setInterval(checkState, CHECK_INTERVAL);

function checkState() {
  const state = getState();
  if (state) {
    if (state.score) {
      if (tvScoreNumberElement && state.score.tv != null) {
        tvScoreNumberElement.innerHTML = state.score.tv;
      }
      if (expertsScoreNumberElement && state.score.experts != null) {
        expertsScoreNumberElement.innerHTML = state.score.experts;
      }
    }
    if (state.display === "score") {
      const span = '<span styles="font-size: 2rem;">Счёт</span>';
      nowDisplaysElement.innerHTML = span;
    } else if (state.display === "image") {
      const img = `<img src="images/${state.imageNumber}.jpg" style="width: 200px;">`;
      nowDisplaysElement.innerHTML = img;
    } else {
      nowDisplaysElement.innerHTML = '';

    }
  }
}

function backToScore() {
  _state.display = "score";
  setState(_state);
}

function setImage(number) {
  _state.display = "image";
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
