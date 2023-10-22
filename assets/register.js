

const registerForm = document.getElementById('register-form');
const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const phoneInput = document.getElementById('phone');


const users = JSON.parse(localStorage.getItem('users')) || [];


const saveToLocalStorage = () => {
  localStorage.setItem('users', JSON.stringify(users));
};

const isEmpty = (input) => {
  return !input.value.trim().length;
};
const isBetween = (input, min, max) => {
  return input.value.length >= min && input.value.length < max;
};

const isEmailValid = (input) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return re.test(input.value.trim());
};

const isExistingMail = (input) => {
  return users.some((user) => user.email === input.value.trim());
};

const isPassSecure = (input) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  return re.test(input.value.trim());
};


const isValidPhone = (input) => {
  const re = /^[0-9]{10}$/;
  return re.test(input.value.trim());
};



const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove('success');
  formField.classList.add('error');
  const error = formField.querySelector('small');
  error.style.display = 'block';
  error.textContent = message;
};


const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove('error');
  formField.classList.add('success');
  const error = formField.querySelector('small');
  error.textContent = '';
};



const checkTextInput = (input) => {
 
  let valid = false;
  const minCharacters = 3;
  const maxCharacters = 25;

  if (isEmpty(input)) {
    showError(input, 'Este campo es obligatorio');
    return;
  }

  if (!isBetween(input, minCharacters, maxCharacters)) {
    showError(
      input,
      `Este campo debe tener entre ${minCharacters} y ${maxCharacters} caracteres`
    );
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};



const checkEmail = (input) => {

  let valid = false;

  if (isEmpty(input)) {
    showError(input, 'El email es obligatorio');
    return;
  }
  if (!isEmailValid(input)) {
    showError(input, 'El email no es valido');
    return;
  }

  if (isExistingMail(input)) {
    showError(input, `El email ya se encuentra registrado`);
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};



const checkPassword = (input) => {
  let valid = false;

  if (isEmpty(input)) {
    showError(input, 'La contraseña es obligatorio');
    return;
  }
  if (!isPassSecure(input)) {
    showError(
      input,
      'La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un simbolo'
    );
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};


const checkPhone = (input) => {

  let valid = false;

  if (isEmpty(input)) {
    showError(input, 'El telefono es obligatorio');
    return;
  }
  if (!isValidPhone(input)) {
    showError(input, 'El telefono no es valido');
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};



const validateForm = (e) => {
  e.preventDefault();
  let isNameValid = checkTextInput(nameInput);
  let isLastNameValid = checkTextInput(lastNameInput);
  let isEmailValid = checkEmail(emailInput);
  let isPasswordValid = checkPassword(passInput);
  let isPhoneValid = checkPhone(phoneInput);

  let isValidForm =
    isNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isPhoneValid;

    if(isValidForm){
        users.push({
            name: nameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value,
            password: passInput.value,
            phone: phoneInput.value
        })
        saveToLocalStorage(users)
        alert("Te has registrado con exito!")
        window.location.href = "login.html"
    }
};


const initial = () =>{
    registerForm.addEventListener("submit", validateForm)
    nameInput.addEventListener("input",()=> checkTextInput(nameInput))
    lastNameInput.addEventListener("input",()=> checkTextInput(lastNameInput))
    emailInput.addEventListener("input",()=> checkEmail(emailInput))
    passInput.addEventListener("input",()=> checkPassword(passInput))
    phoneInput.addEventListener("input",()=> checkPhone(phoneInput))
}

initial()


const password = document.getElementById("password");
const icon = document.querySelector(".bx");


icon.addEventListener("click" , e => { 
      if (password.type === "password" ){ 
        password.type ="text";
        icon.classList.remove('bx-show-alt') 
        icon.classList.add('bx-hide') 
      } else{ 
        password.type ="password";
        icon.classList.add('bx-show-alt') 
        icon.classList.remove('bx-hide') 

      }
    } );

    

