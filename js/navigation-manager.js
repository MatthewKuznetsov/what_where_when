function checkState() {
  let state = getState() || {};
  let url;
  if (state.display === 'image' && state.imageNumber != null) {
    url = state.imageNumber + '.html';
  } else if (state.display === 'score') {
    url = 'score.html';
  }
  if (url && !window.location.href.endsWith(url)) {
    window.location.assign(url);
  }
}

setInterval(checkState, CHECK_INTERVAL);