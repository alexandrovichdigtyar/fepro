 class Hamburger {
  constructor(size){
  this.size = size;
  this.addTopping = function (name){
    size.price = name.price + size.price;
    size.calories = name.calories + size.calories;
  }
  this.getPrice = function(){
    return size.price;
  }
  this.getCalories = function(){
    return size.calories;
  }
  }
  
  static SIZE_SMALL = {
    price: 50,
    calories: 20
  }
  static SIZE_MEDIUM = {
    price: 75,
    calories: 30
  }
  static SIZE_BIG = {
    price:100,
    calories:40
  }
  static TOPPING_MAYO = {
    price:20,
    calories:5
  }
  static TOPPING_POTATO = {
    price: 15,
    calories: 10
  }
  static TOPPING_CHEESE = {
    price: 10,
    calories: 20,
  }
  static TOPPING_SALAD = {
    price: 20,
    calories: 5
  }
  static TOPPING_SEASONING = {
    price: 15,
    calories:0
  }

}

const hamburger = new Hamburger(Hamburger.SIZE_MEDIUM);

hamburger.addTopping(Hamburger.TOPPING_SEASONING);
 


