const containerKeys = document.querySelectorAll(".container-keys .key");
const containerVolumeSlider = document.querySelector(".container-header-volume-slider input");
const containerCheckbox = document.querySelector(".container-header-keys-checkbox input");

let allKeys = [],
audio = new Audio(`audios/a.wav`);

const playTune = (key) => {
   audio.src = (`audios/${key}.wav`);
   audio.play();
   
   //Tıklanan tuşa active class'ı atama işlemi yaparak belirli süre geçtikten sonra active class'ını kaldırma işlemi
   const clickedKey = document.querySelector(`[data-key="${key}"]`);
   clickedKey.classList.add("active");
   setTimeout(() => {
    clickedKey.classList.remove("active");
   }, 150);
}
// allKeys dizisine data-key değerlerini ekleyerek playTune fonksiyonunu çağırma işlemi
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
// Ses Ayarını yapma işlemi
const handleVol = (e) => {
    audio.volume = e.target.value;
}
// Tuşların üzerindeki notaları gizle/göster işlemi
const showHide = () => {
    containerKeys.forEach(key => key.classList.toggle("hide"));
}


document.addEventListener("keydown", pressedKey);
containerVolumeSlider.addEventListener("input", handleVol);
containerCheckbox.addEventListener("click", showHide);