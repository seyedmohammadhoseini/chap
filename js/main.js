$(".acc-click").click(function () { 
  $(".acc-none").slideToggle();
   $("#a1").toggleClass("arrow-btn");
   $(".acc-2").slideUp();
   $(".acc").slideUp();
   $("#a2").removeClass("arrow-btn");
   $("#a3").removeClass("arrow-btn");
});
$("#acc2").click(function () { 
  $(".acc-2").slideToggle();
   $("#a2").toggleClass("arrow-btn");
   $(".acc-none").slideUp();
   $(".acc").slideUp();
   $("#a1").removeClass("arrow-btn");
   $("#a3").removeClass("arrow-btn");
});
$("#acc3").click(function () { 
  $(".acc").slideToggle();
   $("#a3").toggleClass("arrow-btn");
   $(".acc-2").slideUp();
   $(".acc-none").slideUp();
   $("#a1").removeClass("arrow-btn");
   $("#a2").removeClass("arrow-btn");
});

// maberger menu

  $("#menu").click(function () { 
    var header =$('.header-moblie');
    header.show();
    header.animate({width :"220px",right :"0"},400);
    header.animate({height :"100%"},500);
    $(".bg-continer").show();
    
  });

  $(".bg-continer").click(function(){
    var header =$('.header-moblie');
    header.show();
    header.animate({height :"40px"},600);
    header.animate({width :"-220px",right :"-220px"},500);
     $(this).hide();

  });
