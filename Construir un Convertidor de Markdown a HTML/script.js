function convertMarkdown () {
  const markdown = document.querySelector("#markdown-input")
  
  let htmlText = markdown.value;

  htmlText = htmlText.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  htmlText = htmlText.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  htmlText = htmlText.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  
  htmlText = htmlText.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  htmlText = htmlText.replace(/__(.*?)__/gim, '<strong>$1</strong>');

  htmlText = htmlText.replace(/_(.*?)_/gim, '<em>$1</em>');
  htmlText = htmlText.replace(/\*(.*?)\*/gim, '<em>$1</em>');

  htmlText = htmlText.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="$2">');

  htmlText = htmlText.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');

  htmlText = htmlText.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

  return htmlText
}
const markdown = document.querySelector("#markdown-input")

markdown.addEventListener("input", () => {
const text = convertMarkdown()
const preview = document.querySelector("#preview")
const raw = document.querySelector("#html-output")
preview.innerHTML = text
raw.textContent = text
})
