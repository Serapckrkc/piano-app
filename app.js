const containerKeys = document.querySelectorAll(".container-keys .key");
const containerVolumeSlider = document.querySelector(".container-header-volume-slider input");
const containerCheckbox = document.querySelector(".container-header-keys-checkbox input");

let allKeys = [],
audio = new Audio(`audios/a.wav`);

const playTune = (key) => {
   audio.src = (`audios/${key}.wav`);
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

//Klavyeye basılan tuş, dizinin içerisinde ise playTune fonksiyonunu çağırır ve çalıştırır.
const pressedKey = (e) => {
    if(allKeys.includes(e.key)){
        playTune(e.key);
    }
}

document.addEventListener("keydown", pressedKey);

// Volume settings
const handleVol = (e) => {
    audio.volume = e.target.value;
}

containerVolumeSlider.addEventListener("input", handleVol);