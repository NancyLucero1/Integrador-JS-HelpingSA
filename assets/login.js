const loginForm = document.getElementById('login--form');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const errorMessage = document.getElementById('form__error');



const users = JSON.parse(localStorage.getItem('users')) || [];


const saveToSessionStorage = (user) => {
  sessionStorage.setItem('activeUser', JSON.stringify(user));
};


const isEmpty = (input) => {
  return !input.value.trim().length;
};


const isExistingMail = (input) => {
  return users.some((user) => user.email === input.value.trim());
};


const showError = (message) => {
  errorMessage.textContent = message;
};

const getUser = () => {
   return users.find((user) => user.email === emailInput.value.trim());
}

const isMatchingPass = (input) => {
  const user = getUser()
  return user.password === input.value.trim(); 
};


const isValidAccount = () => {
  let valid = false;

  if (isEmpty(emailInput)) {
    showError('Por favor, complete los campos');
    return;
  }
  if (!isExistingMail(emailInput)) {
    showError('El email ingresado es incorrecto');
    return;
  }
  if (isEmpty(passInput)) {
    showError('Por favor, complete los campos');
    return;
  }
  if (!isMatchingPass(passInput)) {
    showError('Los datos ingresados son incorrectos');
    loginForm.reset();
    return;
  }
  alert('Bienvenido a Helping S.A .Ya estas en linea!');
  valid = true;
  errorMessage.textContent = '';

  return valid;
};


const login = (e) => {
    e.preventDefault()
    if(isValidAccount()){
        const user = getUser()
        saveToSessionStorage(user)
        window.location.href = "./home.html"
    }

}

const init = () =>{
    loginForm.addEventListener("submit", login)
}

init() 

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

