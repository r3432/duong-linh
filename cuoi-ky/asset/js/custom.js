
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
 autoplay:true,
 autoplayTimeout:1000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})



$(document).ready(function(){
    // Kích hoạt Owl Carousel ....
    $(".owl-carousel").owlCarousel();
  
    // Xử lý sự kiện click cho mũi tên chevron
    $(".fa-chevron-left").click(function(){
      $(".owl-carousel").trigger("prev.owl.carousel"); // Chuyển đến slide trước đó
    });
  
    $(".fa-chevron-right").click(function(){
      $(".owl-carousel").trigger("next.owl.carousel"); // Chuyển đến slide tiếp theo
    });
  });
  