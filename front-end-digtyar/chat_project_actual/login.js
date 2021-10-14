import './chat.js'
import initChat from './chat.js';


const loginInput = document.getElementById('input');
const loginContainer = document.getElementById('login-container');
const loginButton = document.getElementById('button');
const containerBlock = document.querySelector(".container");

loginButton.addEventListener("click", enterLogin);
document.addEventListener("DOMContentLoaded", onLoadedChek());

function enterLogin(event) {
    event.preventDefault();
    if (inputValidate()) {
        localStorage.setItem('login', loginInput.value); 
        showChat();
        initChat();
    }
    else {
        alert("Vvedite login");
    }
}

function showChat(){
    loginContainer.classList = "container-none";
    containerBlock.classList.remove("container-none");
}

function inputValidate() {
    let value = loginInput.value.trim();
    return value !== "" && value !== undefined;
}

function onLoadedChek(){
    if(localStorage.getItem('login')){
        showChat();
        initChat();
    }
}

