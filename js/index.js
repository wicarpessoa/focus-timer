import Sound from "./sound.js";
import Controls from "./controls.js";
import Timer from "./timer.js";
import {
  buttonPlay,
  buttonStop,
  buttonAddMinutes,
  buttonSubMinutes,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundFire,
  buttonSoundHome,
  pathFire,
  pathForest,
  pathRain,
  pathHome,
  minutesDisplay,
  secondsDisplay,
} from "./config.js";

const controls = Controls({
  buttonSoundFire,
  buttonSoundForest,
  buttonSoundHome,
  buttonSoundRain,
  pathFire,
  pathForest,
  pathHome,
  pathRain,
});

const sound = Sound();
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
});

buttonAddMinutes.addEventListener("click", function () {
  timer.updateDisplay(
    Number(minutesDisplay.textContent) + 5,
    Number(secondsDisplay.textContent)
  );
});
buttonSubMinutes.addEventListener("click", function () {
  if (Number(minutesDisplay.textContent) < 5) {
    return;
  }
  timer.updateDisplay(
    Number(minutesDisplay.textContent) - 5,
    Number(secondsDisplay.textContent)
  );
});

buttonPlay.addEventListener("click", function () {
  timer.stop();
  timer.countdown();
});

buttonStop.addEventListener("click", function () {
  timer.stop();
});

buttonSoundForest.addEventListener("click", function () {
  sound.pressForestSound();
  controls.SoundForest();
});
buttonSoundRain.addEventListener("click", function () {
  sound.pressRainSound();
  controls.SoundRain();
});
buttonSoundFire.addEventListener("click", function () {
  sound.pressFireSound();
  controls.SoundFire();
});

buttonSoundHome.addEventListener("click", function () {
  sound.pressHomeSound();
  controls.SoundHome();
});
