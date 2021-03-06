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
  let cost = 0;
  this.topping.forEach(function() {
    cost += 1;
  })
  return(this.price += cost)
};

Pizza.prototype.sizePriceCalc = function() {
  if(this.size === "Large") {
    this.price += 20;
  }else if(this.size === "Medium") {
    this.price += 15;
  }else if(this.size === "Small") {
    this.price += 12;
  }else {
    this.price += 10;
  }
  return(this.price);
};

// UI Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
  })
  let newOrder = new Order();

  $("select#size-select").change(function() {
    let size = $("#size-select").val();
    let img = "img/" + size + ".jpg" 
    $("img#za-size").attr('src', img);
  })

  $("select").change(function() {
    $(this).nextAll('select:first:disabled').prop('disabled',false)
  })
  
  $("form").submit(function() {
    let size = $("#size-select").val();
    let toppings = [];
    let top1 = $("#meat1").val();
    let top2 = $("#meat2").val();
    let top3 = $("#meat3").val();
    let top4 = $("#veg1").val();
    let top5 = $("#veg2").val();
    let top6 = $("#veg3").val();
    if(top1 != 1) {
      toppings.push(top1);
      if(top2 != 1) {
        toppings.push(top2);
        if(top3 != 1) {
          toppings.push(top3);
        }
      }
    }
    if(top4 != 1) {
      toppings.push(top4);
      if(top5 != 1) {
        toppings.push(top5);
        if(top6 != 1) {
        toppings.push(top5);
        }
      }
    }
    let newPizza = new Pizza(toppings, size, 0);
    newPizza.sizePriceCalc();
    newPizza.topPriceCalc();
    newOrder.addPizza(newPizza);
    $("#total").text("$" + newPizza.price);
  })
})
