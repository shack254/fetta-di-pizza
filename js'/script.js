function pizza(size,crust,topping){
    this.size = size;
    this.crust = crust;
    this.topping = topping;
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