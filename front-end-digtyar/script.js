const btnRemove = document.getElementById("removeAttrBtn");
const btnRemoveRow = document.getElementById("removeSecondRowBtn");
const btnAddRow = document.getElementById("addRowBtn");
const btnSetGrn = document.getElementById("setGreenBtn");
const dataElems = document.querySelectorAll(`[data-id="revenue-value"]`);
let firsCell = document.querySelectorAll(`tr`);

btnRemove.addEventListener('click', removeElem, true);
btnRemoveRow.addEventListener('click', removeRow);
btnAddRow.addEventListener('click', onClickAddRow);
document.addEventListener("DOMContentLoaded", onloadChangeText);
btnSetGrn.addEventListener('click', onClickSetGreen, false)

function removeElem(){
    document.body.querySelector(`[my-attribute]`).removeAttribute(`my-attribute`);
}

function removeRow(){
    firsCell[1].remove(firsCell);
}

function onClickAddRow(){
    const table = document.querySelector(`tbody`);
    const cell = document.createElement(`tr`);
    const tdFirst = document.createElement(`td`);
    const tdSecond = document.createElement(`td`);
    const tdThird = document.createElement(`td`);

    cell.appendChild(tdFirst);
    cell.appendChild(tdSecond);
    cell.appendChild(tdThird);
    table.appendChild(cell);
    tdFirst.textContent = `first cell`;
    tdSecond.textContent = `second cell`;
    tdThird.textContent = `third cell`;
}

function onloadChangeText(){
   document.getElementById('title').style.fontSize = "24px";
}

function onClickSetGreen(e){
    for(let i = 0; i < dataElems.length; i++){
        dataElems[i].bgColor = "green";
    }
    e.stopPropagation();
    
}

