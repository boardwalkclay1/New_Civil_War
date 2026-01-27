/* ADVANCED RUN TRACKER */
/* GPS + Motion Sensors + Distance + Steps + Local Storage */

let runActive = false;
let runStartTime = null;
let watchId = null;

let lastPosition = null;
let totalDistanceMiles = 0;

let stepCount = 0;
let lastAccel = { x: 0, y: 0, z: 0 };
let stepThreshold = 1.2; // simple peak detection

/* ---------------------------
   SENSOR PERMISSIONS
----------------------------*/
async function enableSensors() {
  // iOS requires explicit permission for motion sensors
  if (typeof DeviceMotionEvent !== "undefined" &&
      typeof DeviceMotionEvent.requestPermission === "function") {
    try {
      await DeviceMotionEvent.requestPermission();
    } catch (e) {
      alert("Motion permission denied.");
      return false;
    }
  }
  return true;
}

/* ---------------------------
   START RUN
----------------------------*/
function startRun() {
  runActive = true;
  runStartTime = Date.now();
  totalDistanceMiles = 0;
  stepCount = 0;
  lastPosition = null;

  // Start GPS tracking
  watchId = navigator.geolocation.watchPosition(
    handlePosition,
    err => console.warn("GPS error:", err),
    { enableHighAccuracy: true, maximumAge: 1000, timeout: 10000 }
  );

  // Start motion tracking
  window.addEventListener("devicemotion", handleMotion);

  return true;
}

/* ---------------------------
   HANDLE GPS POSITION
----------------------------*/
function handlePosition(pos) {
  const { latitude, longitude } = pos.coords;

  if (!lastPosition) {
    lastPosition = { latitude, longitude };
    return;
  }

  const dist = haversineMiles(
    lastPosition.latitude,
    lastPosition.longitude,
    latitude,
    longitude
  );

  if (dist > 0.00001) {
    totalDistanceMiles += dist;
    lastPosition = { latitude, longitude };
  }

  updateLiveStats();

  // Auto-stop at 1 mile
  if (totalDistanceMiles >= 1.0 && runActive) {
    finishRun();
  }
}

/* ---------------------------
   HANDLE MOTION (STEP ESTIMATION)
----------------------------*/
function handleMotion(event) {
  if (!runActive) return;

  const acc = event.accelerationIncludingGravity;
  if (!acc) return;

  const magnitude =
    Math.abs(acc.x - lastAccel.x) +
    Math.abs(acc.y - lastAccel.y) +
    Math.abs(acc.z - lastAccel.z);

  if (magnitude > stepThreshold) {
    stepCount++;
  }

  lastAccel = { x: acc.x, y: acc.y, z: acc.z };
}

/* ---------------------------
   FINISH RUN
----------------------------*/
function finishRun() {
  runActive = false;

  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }

  window.removeEventListener("devicemotion", handleMotion);

  const timeMs = Date.now() - runStartTime;
  const timeSec = Math.floor(timeMs / 1000);

  const best = Storage.load("bestMile", null);

  if (!best || timeSec < best) {
    Storage.save("bestMile", timeSec);
  }

  const history = Storage.load("runHistory", []);
  history.push({
    time: timeSec,
    distance: totalDistanceMiles,
    steps: stepCount,
    date: new Date().toISOString()
  });
  Storage.save("runHistory", history);

  return {
    timeSec,
    best: Storage.load("bestMile"),
    distance: totalDistanceMiles,
    steps: stepCount
  };
}

/* ---------------------------
   LIVE UI UPDATES
----------------------------*/
function updateLiveStats() {
  const elapsedSec = Math.floor((Date.now() - runStartTime) / 1000);
  const mph = (totalDistanceMiles / (elapsedSec / 3600)).toFixed(2);

  document.getElementById("liveDistance").textContent =
    totalDistanceMiles.toFixed(2);

  document.getElementById("liveTime").textContent = elapsedSec + "s";

  document.getElementById("liveSpeed").textContent = isFinite(mph) ? mph : "0";

  document.getElementById("liveSteps").textContent = stepCount;
}

/* ---------------------------
   HAVERSINE DISTANCE (miles)
----------------------------*/
function haversineMiles(lat1, lon1, lat2, lon2) {
  const R = 3958.8; // Earth radius in miles
  const toRad = x => (x * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
