$(document).ready(function(){
  $('.slick').slick({
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  });
  $('.slick-2').slick({
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  });
});

(function(){
  var togglers = document.querySelectorAll('.toggler'),
    img = document.querySelector('.menu'),
    navbars = document.querySelector('.navbar')

function transformFormat(){
  togglers[0].classList.toggle('animation0');
  togglers[1].classList.toggle('hide');
  togglers[2].classList.toggle('animation2');
  navbars.classList.toggle('show');
}
img.addEventListener('click', transformFormat);
})()
