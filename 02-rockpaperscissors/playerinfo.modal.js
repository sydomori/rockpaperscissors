import { errorMessages } from "./errorMessages.js";
const formModal = document.getElementById('player-info-dialog');
const addModalButton = document.querySelector('.add-info-button');
const okButton = document.getElementById('confirm');
const cancelButton = document.getElementById('cancel');
console.log(addModalButton);
const nameError = document.getElementById("name-error-message");
const emailError = document.getElementById("email-error-message");
console.log(emailError);
const postalError = document.getElementById("postal-code-error-message");
console.log(postalError);
const passwordError = document.getElementById("password-error-message");
const countryError = document.getElementById("country-error-message");
const nameInput = document.getElementById("player-name");
const emailInput = document.getElementById("email");
const countryInput = document.getElementById("country");
const passwordInput = document.getElementById("password");
const postalInput = document.getElementById("postal-code");

addModalButton.addEventListener('click',()=>{
  formModal.showModal();
})

okButton.addEventListener('click',()=>{
  formModal.close();
})

cancelButton.addEventListener('click',()=>{
  formModal.close();
})

emailInput.addEventListener('input',()=>{
  if(emailInput.validity.valid && !emailInput.validity.patternMismatch){
    emailError.textContent = '';
    emailError.classList.remove = "error"
  } else{
    errorMessages.emailErrorMessage();
    emailError.className = "error";
  }
})

nameInput.addEventListener('input',()=>{
  if(nameInput.validity.valid){
    nameError.textContent = '';
    nameError.classList.remove = "error"
  }else{
    errorMessages.nameErrorMessage();
    nameError.className = "error"
  }
});

postalInput.addEventListener('input',()=>{
  if(postalInput.validity.valid){
    postalError.textContent = '';
    postalError.classList.remove = "error";
  } else{
    errorMessages.postalErrorMessage();
    postalError.className = "error";
  }
})
