const form = document.querySelector("#form");

const emailInput  = document.querySelector("#email");

const nameInput = document.querySelector("#full-name");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



const order = document.querySelector("#order-no");

const orderPattern = /^2024[0-9]{6}$/;



const code = document.querySelector("#product-code");

const codePattern = /^[a-zA-Z][a-zA-Z][0-9][0-9]-[a-zA-Z][0-9][0-9][0-9]-[a-zA-Z][a-zA-Z][0-9]/;



const quantity = document.querySelector("#quantity");

const quantityPattern = /^[1-9][0-9]*$/;

const solutionsGroup = document.querySelector("#solutions-group");

const complaintsGroup = document.querySelector("#complaints-group");

const description = document.querySelector("#complaint-description");

const other = document.querySelector("#other-complaint");

const solutionsDescription = document.querySelector("#solution-description");

const otherSolution = document.querySelector("#other-solution");

form.addEventListener("input", (event) => {

  const obj = validateForm();

  const formularioValido = isValid(obj);

  const nameValue = nameInput.value.trim();

  const emailValue = emailInput.value.trim();

  const orderValue = order.value.trim();

  const codeValue = code.value.trim();

  const quantityValue = quantity.value.trim();

  const checkedBoxes = complaintsGroup.querySelectorAll("input[type='checkbox']:checked");

  const checkedSolutions = solutionsGroup.querySelectorAll("input[type='radio']:checked");

  if (checkedBoxes.length === 0) {

    event.preventDefault()

    description.style.border = "2px solid red"

  } else {

    description.style.border = "2px solid green"

  }



  if (checkedSolutions.length === 0) {

    event.preventDefault()

    solutionsDescription.style.border = "2px solid red"

  } else {

    solutionsDescription.style.border = "2px solid green"

  }



  if (other.checked){

    if (description.value.length < 20) {

    event.preventDefault()

    description.style.border = "2px solid red"

    } else {

    description.style.border = "2px solid green"

    }

  }



  if (otherSolution.checked){

    if (solutionsDescription.value.length < 20) {

    event.preventDefault()

    solutionsDescription.style.border = "2px solid red"

    } else {

    solutionsDescription.style.border = "2px solid green"

    }

  }

   

 

 







  if (quantityValue === "" || !quantityPattern.test(quantityValue)) {

    event.preventDefault()

    quantity.style.border = "2px solid red"

  } else {

    quantity.style.border = "2px solid green"

  }





  if (nameValue === "") {

    event.preventDefault()

    nameInput.style.border = "2px solid red"

  } else {

    nameInput.style.border = "2px solid green"

  }



  if (emailValue === "" || !emailPattern.test(emailValue)) {

    event.preventDefault()

    emailInput.style.border = "2px solid red"

  } else {

    emailInput.style.border = "2px solid green"

  }



  if (orderValue === "" || !orderPattern.test(orderValue)) {

    event.preventDefault()

    order.style.border = "2px solid red"

  } else {

    order.style.border = "2px solid green"

  }



  if (codeValue === "" || !codePattern.test(codeValue)) {

    event.preventDefault()

    code.style.border = "2px solid red"

  } else {

    code.style.border = "2px solid green"

  }





})



