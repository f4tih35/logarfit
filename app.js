function myFunction() {
  const x = document.getElementById("myLinks");
  document.getElementById('menuButon').classList.toggle('active-btn');
  document.getElementById('ust-resim').classList.toggle('active-navbar');
  document.getElementById('mobile-content').classList.toggle('active-navbar');
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

window.onscroll = function() {scrollFunction()};
const usteCik = document.getElementById("uste-cik");

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    usteCik.style.display = "block";
    document.getElementById('xasd').classList.add('topnav-asagi');
  } else {
    usteCik.style.display = "none";
    document.getElementById('xasd').classList.remove('topnav-asagi');
  }
}

function duzelt(yy) {
  if (yy.matches) { 
    document.getElementById('ust-resim').classList.remove('active-navbar');
    document.getElementById('mobile-content').classList.remove('active-navbar');
  }
}

var yy = window.matchMedia("(min-width: 1080px)");
duzelt(yy);
yy.addListener(duzelt);


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:900,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
          items:3
        },
        1000:{
          items:4
        }
    }
})
});

$(document).ready(function(){
  $('.kart-img').hover(function() {
      $(this).addClass('transition');

  }, function() {
      $(this).removeClass('transition');
  });
});