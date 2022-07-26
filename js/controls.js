export default function Controls({
  buttonSoundFire,
  buttonSoundForest,
  buttonSoundHome,
  buttonSoundRain,
  pathFire,
  pathForest,
  pathHome,
  pathRain,
}) {
  function SoundForest() {
    buttonSoundForest.classList.add("button-sound-active");
    buttonSoundRain.classList.remove("button-sound-active");
    buttonSoundFire.classList.remove("button-sound-active");
    buttonSoundHome.classList.remove("button-sound-active");

    pathForest.classList.add("path-active");
    pathRain.classList.remove("path-active");
    pathFire.classList.remove("path-active");
    pathHome.classList.remove("path-active");
  }
  function SoundRain() {
    buttonSoundRain.classList.add("button-sound-active");
    buttonSoundFire.classList.remove("button-sound-active");
    buttonSoundForest.classList.remove("button-sound-active");
    buttonSoundHome.classList.remove("button-sound-active");

    pathRain.classList.add("path-active");
    pathForest.classList.remove("path-active");
    pathFire.classList.remove("path-active");
    pathHome.classList.remove("path-active");
  }
  function SoundFire() {
    buttonSoundFire.classList.add("button-sound-active");
    buttonSoundRain.classList.remove("button-sound-active");
    buttonSoundForest.classList.remove("button-sound-active");
    buttonSoundHome.classList.remove("button-sound-active");

    pathFire.classList.add("path-active");
    pathRain.classList.remove("path-active");
    pathForest.classList.remove("path-active");
    pathHome.classList.remove("path-active");
  }
  function SoundHome() {
    buttonSoundHome.classList.add("button-sound-active");
    buttonSoundFire.classList.remove("button-sound-active");
    buttonSoundRain.classList.remove("button-sound-active");
    buttonSoundForest.classList.remove("button-sound-active");

    pathHome.classList.add("path-active");
    pathFire.classList.remove("path-active");
    pathRain.classList.remove("path-active");
    pathForest.classList.remove("path-active");
  }
  return {
    SoundFire,
    SoundForest,
    SoundHome,
    SoundRain,
  };
}
