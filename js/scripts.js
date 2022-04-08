// Business logic
function Order() {
  this.pizzas = {};
  this.currentId = 0;
};

function Pizza(topping, size, price) {
  this.topping = topping;
  this.size = size;
  this.price = price;
};

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Pizza.prototype.topPriceCalc = function() {
  this.topping.forEach(function(topping) {
    newPizza.price += 1;
  })
  return(this.price)
};

Pizza.prototype.sizePriceCalc = function() {
  if(this.size === "large") {
    this.price += 20;
  }else if(this.size === "medium") {
    this.price += 15;
  }else if(this.size === "small") {
    this.price += 12;
  }else {
    this.price += 10;
  }
  return(this.price);
};

// UI Logic

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
  })

  let toppings = [];
  let size = "";
  
})

