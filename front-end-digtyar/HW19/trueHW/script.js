/* let actualDate = new Date();
let parag = document.getElementById('p')
let date = document.getElementById('date');

function getActualTime (){
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    if(hours < 10) hours = "0" + hours;
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;
     
    parag.textContent = (`${hours} : ${minutes}: ${seconds}`);
}

function getActualDate () {
    let day = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear()%100;

    if(day < 10) day = "0" + day; 
    if(month < 10) month = "0" + (month + 1);
    
    date.textContent = (`${day}:${month}:${year}`);

}
    


setInterval(getActualTime, 1000);

getActualDate();
 */

//---

let parag = document.getElementById('p');
let date = document.getElementById('date');
 
function getHours() {
    let h = new Date().getHours();
    if(h < 10) h = "0" + h;
    return h;
}

function getMinutes() {
    let m = new Date().getMinutes();
    if(m < 10) m = "0" + m;
    return m;
}

function getSeconds(){
    let s = new Date().getSeconds(); 
    if(s < 10) s = "0" + s;
    return s;
}

function getDay(){
    d = new Date().getDate();
    if (d < 10) d = "0" + d;
    return d;
 }

function getMonth(){
    m = new Date().getMonth() + 1;
    if (m < 10) m = "0" + m;
    return m;
}

function getYear(){
    y = new Date().getFullYear() % 100;
    if (y < 10) y = "0" + y;
    return y;
}

function showActualdate(){
    date.textContent = `${getDay()} : ${getMonth()} : ${getYear()}`
}

function showActualTime(){
    parag.textContent = `${getHours()} :${getMinutes()} : ${getSeconds()}`;
}

setInterval(showActualTime, 1000);

showActualdate();