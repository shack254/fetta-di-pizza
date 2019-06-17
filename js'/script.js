function Placeorder(size, crust, topping) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.price = 0;
}
var totalOrderPrice = [];

var pizzaSize = ["small", "medium", "extralarge", "large"];
var pizzaCrust = ["FlatbreadCrust","ThickCrust","CustomCrusts","ThinCrust","StuffedCrusts"];
var pizzaTopping = ["Onions", "Extracheese", "Blackolives", "Pineapple"];


Placeorder.prototype.costOfPizza = function() {
  if (this.size === pizzaSize[0]) {
    this.price += 300;
  } else if (this.size === pizzaSize[1]) {
    this.price += 500;
  } else if (this.size === pizzaSize[2]) {
    this.price += 900;
  }else if (this.size === pizzaSize[3]) {
    this.price += 1200;
  }
  if (this.crust === pizzaCrust[0]) {
    this.price += 100;
  } else if (this.crust === pizzaCrust[1]) {
    this.price += 100;
  } else if (this.crust === pizzaCrust[2]) {
    this.price += 400;
  }else if (this.crust === pizzaCrust[3]) {
    this.price += 300;
  }else if (this.crust === pizzaCrust[4]) {
    this.price += 200;
  }
  if (this.topping === pizzaTopping[0]) {
    this.price += 100;
  } else if (this.topping === pizzaTopping[1]) {
    this.price += 200;
  } else if (this.topping === pizzaTopping[2]) {
    this.price += 300;
  } else if (this.topping === pizzaTopping[3]) {
    this.price += 50;
  }
  return this.price;
}

Placeorder.prototype.totalCost = function() {
  var shoppingCartTotal = 0;
  for (var order = 0; order < totalOrderPrice.length; order++) {
    shoppingCartTotal += totalOrderPrice[order];
  }
  return shoppingCartTotal;
}

$(document).ready(function () {
  $("input#cost").click(function(event) {
    event.preventDefault();
    var sizes = $("select#size").val();
    var crusts = $("select#crust").val();
    var toppings = $("select#topping").val();
    var newPizzauser = new Placeorder(sizes, crusts,toppings);
    newPizzauser.costOfPizza();
    totalOrderPrice.push(newPizzauser.price);
    $("#type").text("pizza :"+ sizes);
    $("#typ").text("crusts  :"+ crusts );
    $("#ty").text("topping  :"+ toppings);
    $("#t").text( "total cost  :"+newPizzauser.totalCost());
  });
});