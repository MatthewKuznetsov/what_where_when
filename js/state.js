const CHECK_INTERVAL = 200;

function getState() {
  let res;
  try {
    res = JSON.parse(localStorage.getItem('www'));
  } catch (err) { console.log(err); }
  return res;
}

function setState(state) {
  try {
    localStorage.setItem('www', JSON.stringify(state));
  } catch (err) { console.log(err); }
}

