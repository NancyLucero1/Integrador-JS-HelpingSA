const logoutBtn = document.getElementById('logout-message');
const userName = document.getElementById('user-name');
const activeUser = JSON.parse(sessionStorage.getItem("activeUser"))
const showUserName = () =>{
    userName.textContent = `${activeUser.name} ${activeUser.lastName}`
}

const logout = () => {
    if(window.confirm("¿Estas seguro que deseas cerrar sesión?")){
        sessionStorage.removeItem("activeUser")
        window.location.href = "../index.html"
    }
}


const init = () =>{
    showUserName()
    logoutBtn.addEventListener("click", logout)
}



init()