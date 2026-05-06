const drumPads = document.querySelectorAll(".drum-pad")
const display = document.querySelector("#display")

drumPads.forEach((drumPad) => {
  drumPad.addEventListener("click", () => {
    const audio = drumPad.querySelector("audio"); 

    display.textContent = drumPad.id

    audio.currentTime = 0
    audio.play()
  });
})


document.addEventListener("keydown", (event) => {
    const audio = document.getElementById(event.key.toUpperCase());
    const parent = audio.parentElement;
    display.textContent = parent.id

    audio.currentTime = 0;
    audio.play()
});


