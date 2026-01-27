/* RUN TRACKER */

let runStartTime = null;

function startRun() {
  runStartTime = Date.now();
}

function finishRun() {
  const timeMs = Date.now() - runStartTime;
  const timeSec = Math.floor(timeMs / 1000);

  const best = Storage.load("bestMile", null);

  if (!best || timeSec < best) {
    Storage.save("bestMile", timeSec);
  }

  const history = Storage.load("runHistory", []);
  history.push({ time: timeSec, date: new Date().toISOString() });
  Storage.save("runHistory", history);

  return { timeSec, best: Storage.load("bestMile") };
}
