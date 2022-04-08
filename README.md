<!-- Tests -->
Describe: Pizza()

Test: "It should return a pizza object with an array of toppings and size"
Code: newPizza = new Pizza(['peperoni', 'jalapeno', 'olives'], "large");
Expected output: pizza {toppings: ['peperoni', 'jalapeno', 'olives'], size:'large'}


Describe: Pizza.prototype.topPriceCalc()

Test: "It should return a value based off # of toppings in the pizza object array"
Code: newPizza = new Pizza(['peperoni', 'jalapeno', 'olives'],   "large", 0)
      newPizza.topPriceCalc();
Expected output: 3


Describe: Pizza.prototype.sizePriceCalc()
Test: "It should return a value based off size of pizza"
Code: newPizza = new Pizza(['peperoni', 'jalapeno', 'olives'],   "large", 0);
      newPizza.sizePriceCalc();
Expected output: 20
