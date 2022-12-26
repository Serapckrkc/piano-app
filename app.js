const containerKeys = document.querySelectorAll(".container-keys .key")
const containerVolumeSlider = document.querySelector(".container-header-volume-slider input")
const containerCheckbox = document.querySelector(".container-header-keys-checkbox input")

let allKeys = [],
audio = new Audio(`tunes/a.wav`);

const playTune = (key) => {
   audio = new Audio(`audios/${key}.wav`)
   audio.play();

   const clickedKey = document.querySelector(`[data-key="${key}"]`);
   clickedKey.classList.add("active");
   setTimeout(() => {
    clickedKey.classList.remove("active");
   }, 150);
}

containerKeys.forEach(key =>{
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});
