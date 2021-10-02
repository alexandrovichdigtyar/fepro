let form = document.getElementById("form")
let input = document.getElementById('input');
let buttonLog = document.getElementById("button");
let div = document.getElementById("divId");

buttonLog.addEventListener('click', onClickLoad)
document.addEventListener("DOMContentLoaded", onLoadedChek())

function onClickLoad(e){
    e.preventDefault();
    localStorage.name = input.value;
    localStorage.name = localStorage.name.trim()
    console.log(localStorage.name)
    if(!localStorage.name){
        alert("Введите пожалуйста логин");
    }
    else{
        form.style.visibility = "hidden";
        div.style.visibility = "visible";
        div.textContent = `Привет ${localStorage.name}`;
    }
}

function onLoadedChek() {
    if(localStorage.name) {
        form.style.visibility = "hidden";
        div.style.visibility = "visible";
        div.textContent = `Привет ${localStorage.name}`;
    }
  
}

