function Pizza(size, toppings1,toppings2,toppings3){
  this.size = size;
  this.toppings1 = toppings1;
  this.toppings2 = toppings2;
  this.toppings3 = toppings3;
 };
 
 Pizza.prototype.price = function(){
  var total = this.toppings1 + this.toppings2 + this.toppings3  + this.size;
  return total;
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

$(function () {
    $("#sizes").click(function (e) { 
        e.preventDefault();
        var sizes = $("").val();
        var pizza = new pizza()
        
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
    $("#pizzaOrder").submit(function(event){
      event.preventDefault();
      var size = parseFloat($("#size").val());
      var toppings1 = parseFloat($("#toppings1").val());
      var toppings2 = parseFloat($("#toppings2").val());
      var toppings3 = parseFloat($("#toppings3").val());
   
      var userPizza = new Pizza(size,toppings1,toppings2,toppings3);
   
      $("#customerOrder").slideToggle(500);
      $("ul").append("<li>" + "$" + userPizza.price().toFixed(2) + "</li>");
      $("li").remove();
      $("ul").append("<li>" + "$" + userPizza.price().toFixed(2) + "</li>");
    });
   });