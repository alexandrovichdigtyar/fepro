const table = document.getElementById("table");
const buttonAddProduct = document.getElementById("buttonAddProduct");
const inputName = document.getElementById("inputName");
const inputAmount = document.getElementById("inputAmount");
const inputPrice = document.getElementById("inputPrice");
 

buttonAddProduct.addEventListener('click', onClickAddProduct)

function onClickAddProduct(e){
    e.preventDefault();
    
    inputName.value = inputName.value.trim();
    inputAmount.value = inputAmount.value.trim();
    inputPrice.value = inputPrice.value.trim();
    
    doValidation();
 
}

function doValidation (){

    if(parseInt(inputName.value) || !parseInt(inputAmount.value) || !parseInt(inputPrice.value) ){
        alert("Дорогой друг, название состоит из букв, количество - из цифр, цена - число. Проверь данные, пожалуйста")
        makeClearInput();
    }
    else {
        createRow(); 
    }
}


function createRow(e) {
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdAmount = document.createElement('td');
    let tdPrice = document.createElement('td');
    const buttonDelete = document.createElement('button');

    table.append(tr);
    tr.append(tdName);
    tr.append(tdAmount);
    tr.append(tdPrice);
    tr.append(buttonDelete);

    tdName.textContent = inputName.value;
    tdAmount.textContent = inputAmount.value;
    tdPrice.textContent = inputPrice.value;
    buttonDelete.textContent = "delete";
    
    buttonDelete.addEventListener('click', onClickDeleteRow);
    
    makeClearInput();
}

function onClickDeleteRow(e){
    e.target.parentElement.remove();
}

function makeClearInput(){
    inputName.value = "";
    inputAmount.value = "";
    inputPrice.value = "";
}

