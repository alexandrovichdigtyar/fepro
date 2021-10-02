
/* let arr = [];
function arrayFill(elemValue, elemAmount){
    arr.push(elemValue);
    console.log(arr[1]);
    for(let i = 0; i < elemAmount - 1; i ++){
     arrayFill(elemValue);
    }
  
} */

//arrayFill(8,8);

//let arrSecond = [[1, 2, 3], [4, 5], [6]];
/* 
let sum = 0;
for(let first of arrSecond){
    for(let elem of first){
        sum = sum + elem;
    }
}

console.log(sum); */

/* let arrSecond = [[1, 2, 3], [4, 5], [6]];
let newArr = arrSecond.flat(Infinity)

let result = newArr.reduce(function(sum, current){
return sum + current;
},0);
alert(result); */

let countNumber = document.getElementById('input');
let btnCreateCount = document.getElementById('btnCreateCount')
let div = document.getElementById('div');
btnCreateCount.addEventListener('click', onClickCreateLet);

function onClickCreateLet(e){

e.preventDefault();
 
const counter = createCounterObject();
counter.counts = countNumber.value;

let span = document.createElement('span');
let score = document.createElement('span');
let btnCount = document.createElement('button');

score.textContent = counter.getValue();
span.textContent = "Counter value:";
div.append(span);
span.append(score);
span.append(btnCount);

btnCount.textContent = "Count";
btnCount.addEventListener('click', onClickCount);

function onClickCount(e){
    e.preventDefault();
    counter.increment();
    score.textContent = counter.getValue();

}
countNumber.value = "";
}

 
function createCounterObject(){
    
    return {
        counts:0,        
        increment: function () {
            this.counts++;
        },
        getValue: function () {
            return this.counts;
        } 
     }
}





 


 
