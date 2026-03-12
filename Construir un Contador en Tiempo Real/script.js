const text = document.querySelector("#text-input")   
const counter = document.querySelector("#char-count") 


text.addEventListener("input", () => {
  if (text.value.length > 50) {
    text.value = text.value.slice(0, 50)
  }
  counter.textContent = `Character Count: ${text.value.length}/50`
  
  if (text.value.length >= 50) {
     counter.style.color = "red"
  }

});

