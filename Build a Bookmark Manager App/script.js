function getBookmarks() {
  try {
    const stored = JSON.parse(localStorage.getItem("bookmarks"));
    
    // Verificar si existe y si es un array
    if (!Array.isArray(stored)) {
      return [];
    }
    
    // Verificar que sea un array válido de objetos de marcadores
    const isValid = stored.every(
      item => item !== null && typeof item === "object" && "name" in item && "category" in item && "url" in item
    );
    
    return isValid ? stored : [];
  } catch (error) {
    return [];
  }
}

const mainSection = document.querySelector("#main-section");
const formSection = document.querySelector("#form-section");

function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}
const bookmarkButton = document.querySelector("#add-bookmark-button");
const categoryName = document.querySelector(".category-name");
const categoryDrop = document.querySelector("#category-dropdown");
bookmarkButton.addEventListener("click", () => {
  categoryName.innerText = categoryDrop.value
  displayOrCloseForm()
});
const closeForm = document.querySelector("#close-form-button");


closeForm.addEventListener("click", () => {
  displayOrCloseForm()
});

const addBookMarkForm = document.querySelector("#add-bookmark-button-form");
const nameForm = document.querySelector("#name");
const urlForm = document.querySelector("#url");
addBookMarkForm.addEventListener("click", (e) => {
  e.preventDefault();

  const forms = getBookmarks()
  const newForm = {"name": nameForm.value, "category": categoryDrop.value, "url": urlForm.value}

  forms.push(newForm)

  localStorage.setItem("bookmarks", JSON.stringify(forms))
  

  nameForm.value = "";
  urlForm.value = "";

  displayOrCloseForm();
});

const bookmarkListSection = document.querySelector("#bookmark-list-section");
function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}
 

const viewCategory = document.querySelector("#view-category-button");
const categoryList = document.querySelector("#category-list");

function updateBookmarkList() {
  const selectedCategory = categoryDrop.value;
  const allBookmarks = getBookmarks();
  const filteredBookmarks = allBookmarks.filter(mark => mark.category === selectedCategory);

  if (filteredBookmarks.length >= 1) {
    categoryList.innerHTML = "";
    filteredBookmarks.forEach(mark => {
      categoryList.innerHTML += `<input type="radio" id="${mark.name}" value="${mark.name}" name="bookmark-radio"><label for="${mark.name}"><a href="${mark.url}">${mark.name}</a></label>`;
    });
  } else {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
  }
}
viewCategory.addEventListener("click", () => {
  categoryName.innerText = categoryDrop.value

  //Modificar HTML
  updateBookmarkList()


  //Acabe de modificar HTML
  displayOrHideCategory()
});
const closeList = document.querySelector("#close-list-button");
closeList.addEventListener("click", () => {
displayOrHideCategory() 
});

const deleteButton = document.querySelector("#delete-bookmark-button");
deleteButton.addEventListener("click", () => {
  const selectedRadio = document.querySelector('input[name="bookmark-radio"]:checked');
  
  if (selectedRadio) {
    const nameToDelete = selectedRadio.value;
    const categoryToDelete = categoryDrop.value;
    let bookmarks = getBookmarks();
    
    bookmarks = bookmarks.filter(mark => !(mark.name === nameToDelete && mark.category === categoryToDelete));
    
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    updateBookmarkList();
  }
});
