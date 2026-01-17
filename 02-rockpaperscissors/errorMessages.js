const nameError = document.getElementById("name-error-message");
const emailError = document.getElementById("email-error-message");
const postalError = document.getElementById("postal-code-error-message");
const passwordError = document.getElementById("password-error-message");
const countryError = document.getElementById("country-error-message");
const nameInput = document.getElementById("player-name");
const emailInput = document.getElementById("email");
const countryInput = document.getElementById("country");
const passwordInput = document.getElementById("password");
const postalInput = document.getElementById("postal-code");

console.log(postalInput);
console.log(postalError);
console.log(emailError);
console.log(nameError);

emailInput.addEventListener('input',()=>{

})


export const errorMessages = {
  nameErrorMessage : ()=> {
    if(nameInput.validity.valueMissing){
      nameError.textContent = "please enter your name";
      nameError.classList.add = "error"
    }
  },

  emailErrorMessage : ()=>{
    if(emailInput.validity.valueMissing){
      emailError.textContent = "Email address required"
      emailError.classList.add = "error"
    } else if(emailInput.validity.patternMismatch){
      emailError.textContent = "invalid email address";
      emailError.classList.add = "error"
    }
  },
  
  postalErrorMessage : ()=>{
    if(postalInput.validity.valueMissing){
      postalError.textContent = "postal code required";
      postalError.classList.add = "error"
    } else if(postalInput.validity.tooLong){
      postalError.textContent = "enter valid postal address";
      postalError.classList.add = "error"
    }
  }
}