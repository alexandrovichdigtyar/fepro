function Hamburger(size){
  this.size = size;
  this.addTopping = function(name){
    size.price = name.price + size.price;
    size.calories = name.calories + size.calories;
  }
  this.getPrice = function(){
    return size.price;
  }
  this.getCallories = function(){
    return size.calories;
  }
 
  
}


Hamburger.SIZE_SMALL = {
  cprice: 50,
  calories: 20};
Hamburger.SIZE_MEDIUM = {
  price: 75,
  calories: 30
}
Hamburger.SIZE_BIG = {
  price:100,
  calories:40
}

Hamburger.TOPPING_MAYO = {
  price:20,
  calories:5
}
Hamburger.TOPPING_POTATO = {
  price: 15,
  calories: 10
}
Hamburger.TOPPING_CHEESE = {
  price: 10,
  calories: 20,
}
Hamburger.TOPPING_SALAD = {
  price: 20,
  calories: 5
}
Hamburger.TOPPING_SEASONING = {
  price: 15,
  calories:0
}


const hamburger = new Hamburger(Hamburger.SIZE_MEDIUM);













/* const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log("Price with sauce: “ + hamburger.getPrice());
console.log("Callories with sauce: “ + hamburger.getCallories());
 */