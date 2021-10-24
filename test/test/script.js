const inputFirstProduct = document.getElementById("amount-first-product");
const priceFristProduct = document.getElementById("price-first-product");
const totalCostFirstProduct = document.getElementById("total-cost-first-product");

const inputSecondProduct = document.getElementById("amount-second-product");
const priceSecondProduct = document.getElementById("price-second-product");
const totalCostSecondProduct = document.getElementById("total-cost-second-product");

const inputThirdProduct = document.getElementById("amount-third-product");
const priceThirdProduct = document.getElementById("price-third-product");
const totalCostThirdProduct = document.getElementById("total-cost-third-product");

const totalCostAllProducts = document.getElementById("total-cost-all-products");


function getTotalCostByFirstProduct (){
  isValueNum(inputFirstProduct, priceFristProduct, totalCostFirstProduct)
}

function getTotalCostBySecondProduct () {
   isValueNum(inputSecondProduct, priceSecondProduct, totalCostSecondProduct)
}

function getTotalCostByThirdProduct () {
   isValueNum(inputThirdProduct, priceThirdProduct, totalCostThirdProduct)
}

 function getTotalCostByAllProducts () {
    totalCostAllProducts.innerHTML = +totalCostThirdProduct.innerHTML + +totalCostSecondProduct.innerHTML + +totalCostFirstProduct.innerHTML;

} 

function isValueNum (firstValue, secondValue, totalCost) {
    if(parseInt(firstValue.value * secondValue.value)){

       totalCost.innerHTML = firstValue.value * secondValue.value;
        getTotalCostByAllProducts ()
        } 
}

inputFirstProduct.oninput = getTotalCostByFirstProduct;
priceFristProduct.oninput = getTotalCostByFirstProduct;

inputSecondProduct.oninput = getTotalCostBySecondProduct;
priceSecondProduct.oninput = getTotalCostBySecondProduct;

inputThirdProduct.oninput = getTotalCostByThirdProduct;
priceThirdProduct.oninput = getTotalCostByThirdProduct;
