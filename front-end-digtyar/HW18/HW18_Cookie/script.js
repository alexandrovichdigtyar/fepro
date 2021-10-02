const VISIBLE_CLASS = "visible";
let form = document.getElementById("form");
let input = document.getElementById('input');
let buttonLog = document.getElementById("button");
let div = document.getElementById("divId");

buttonLog.addEventListener('click', onClickLoad);
window.onload = onLoadedChek;

function onClickLoad(e){
    e.preventDefault();
    document.cookie = "login=" + input.value;
    let cookie = getCookie(document.cookie);
    cookie.login = cookie.login.trim();
    if(!cookie.login){
        alert("Введите пожалуйста логин"); 
    }
    else {
        div.classList.add(VISIBLE_CLASS);
        form.remove(VISIBLE_CLASS);
        div.textContent = `Привет ${cookie.login}`;
    }
    

}


function onLoadedChek() {    
    let cookie = getCookie(document.cookie);
    if(cookie.login) {
        div.classList.add(VISIBLE_CLASS);
        div.textContent = `Привет ${cookie.login}`;
    } 
    else {
        form.classList.add(VISIBLE_CLASS);
    }
} 

function getCookie (str){
    let cookieElems = {};
    let arr = str.split("; ");
    arr.forEach(elem => {
        let value = elem.split("=");
        cookieElems[value[0]] = value[1];
    });
    return cookieElems;
}


