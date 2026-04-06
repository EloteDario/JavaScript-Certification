const textInput = document.querySelector("#text-input")



const button = document.querySelector("#check-btn") 
const result = document.querySelector("#result") 

function isPalindrome(text){
text = text.toLowerCase(text)
const cleanText = text.replace(/[^a-z0-9]-/g, '')
const textReversed = cleanText.split('').reverse().join('')
return cleanText === textReversed
}

button.addEventListener("click", () => {

  const text = textInput.value
  
  if (text === "") {
    alert("Please input a value");
    return; 
  }

  if (isPalindrome(text)) {
    result.innerText = `${text} is a palindrome`
  } else {result.innerText = `${text} is not a palindrome`}
  
})
