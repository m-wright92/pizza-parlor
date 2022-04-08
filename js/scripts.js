function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.priceCalc = function() {
  let price = 0;
  this.topping.forEach(function(topping) {
    console.log(price += 1)
  })
}