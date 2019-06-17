function Pizza(size, toppings1,crust){
  this.size = size;
  this.toppings1 = toppings1;
  this.crust = crust;
 };
 
 Pizza.prototype.price = function(){
  var total = this.toppings1 + this.size + this.crust;
  return total;
 }
 Pizza.prototype.
 function listTopping(prods) {
  let Pizza.size = [];
  for (let i=0; i<prods.length; i+=1) {
   product_names.push(prods[i].name);
  }
  return product_names;
}




$(function () {
    $(".c").click(function () { 
        $("#show-top").fadeToggle();
        $("#hide-top").fadeToggle();
    });
    $(".b").click(function () { 
        $("#show-menu").fadeToggle();
        $("#hide-menu").fadeToggle();
    });
    $(".a").click(function () { 
        $("#show-crust").fadeToggle();
        $("#hide-crust").fadeToggle();
    });
});
$(document).ready(function() {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
  
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
  
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    // If element is scrolled into view, fade it in
    $(window).scroll(function() {
      $('.scroll-animations .animated').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).addClass('fadeInLeft');
        }
        $(window).trigger(scroll);
      });
    });
  });

   
   $(document).ready(function(){
    $("#cost").submit(function(event){
      event.preventDefault();
      var size = parseFloat($("#size").val());
      var toppings1 = parseFloat($("#toppings1").val());
      var toppings1 = parseFloat($("#toppings1").val());
      var userPizza = new Pizza(size,toppings1,crust);
   
      $("#customerOrder").slideToggle(500);
      $("ul").append("<li>" + "$" + userPizza.price().toFixed(2) + "</li>");
      $("li").remove();
      $("ul").append("<li>" + "$" + userPizza.price().toFixed(2) + "</li>");
    });
   });