function Pizza(topping, size, price) {
  this.topping = topping;
  this.size = size;
  this.price = price;
}

Pizza.prototype.topPriceCalc = function() {
  let price = 0;
  this.topping.forEach(function(topping) {
    price += 1
  })
  console.log(price)
}

Pizza.prototype.sizePriceCalc = function() {
  let price;
  if(this.size === "large") {
    price = 20;
  }
  console.log(price);
}