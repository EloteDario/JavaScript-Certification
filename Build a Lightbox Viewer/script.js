const gallery = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeBTN = document.querySelector("#close-btn");


gallery.forEach((item) => {

  item.addEventListener("click", (e) => {
  
  lightbox.style.display = "flex";


  const fullSizeSrc = item.src.replace("-thumbnail", "");
  lightboxImage.src = fullSizeSrc;
  
  });
})


closeBTN.addEventListener("click", () => {
  lightbox.style.display = "none"
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
