function Order(pizza) {
  this.pizza = pizza;
  this.currentId = 1;
}

function Pizza(topping, size, price) {
  this.topping = topping;
  this.size = size;
  this.price = price;
  
}

Pizza.prototype.topPriceCalc = function() {
  this.topping.forEach(function(topping) {
    newPizza.price += 1;
  })
  return(this.price)
}

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
}