let actualDate = new Date();
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
