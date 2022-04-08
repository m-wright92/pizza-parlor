<!-- Tests -->
Describe: Pizza(topping, size)

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
Code: newPizza = new Pizza(['peperoni', 'jalapeno', 'olives'], "large", 0);
      newPizza.sizePriceCalc();
Expected output: 20

Describe: Order();

Test: "This will create an order object to hold the pizza objects"
Code: newOrder = new Order("Pizza1);
      newOrder;
Expected Output: Order {pizza: 'Pizza1'}


Describe: Order.prototype.addPizza();

Test: "This will add a pizza object to the order"
Code: newPizza = new Pizza(['peperoni', 'jalapeno', 'olives'], "large", 0);
      newOrder = new Order();
      newOrder.addPizza(newPizza);
      newOrder;
Expected Output: pizzas: {1: Pizza}


Describe: Order.prototype.assignId();

Test: "This will give an ID for pizzas"
Code: newOrder = new Order("Pizza1");
      Pizza1.assignID();
      newOrder;
Expected Output: {pizzas: {...}m currentId1}