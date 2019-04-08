
$(document).ready(function() {
  $('.img-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery:{
  enabled:true
}
  });
});
//owl carousel SECTION
$(document).ready(function() {
  $('#logo').owlCarousel({
      loop:true,
      margin:0,
      smartSpeed:2000,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })
});
//owl-work carousel SECTION
$(document).ready(function() {
  $('#owl-work').owlCarousel({
      loop:true,
      margin:0,
      smartSpeed:2000,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })
});
//quotes carousel SECTION
$(document).ready(function() {
  $('#customer').owlCarousel({
      loop:true,
      margin:0,
      smartSpeed:2000,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })
});
//code window SECTION
$(document).ready(function() {
$(window).scroll(function(){
  var location=$(this).scrollTop();
  if(location<70){
    $("nav").removeClass("transparent");
  }
  else {
      $("nav").addClass("transparent");
  }
})

});
