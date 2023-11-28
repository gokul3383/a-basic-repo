$(document).ready(function(){
    $('.product-carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<button class="prev-button">&#10094;</button>',
      nextArrow: '<button class="next-button">&#10095;</button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  });
  
  setInterval(()=>{
    console.log('this scrit is runnign on a specific time basis.')
  },5000)