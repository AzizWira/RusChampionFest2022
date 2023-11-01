var items = document.querySelectorAll('.timeline li')

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if (!items[i].classList.contains('in-view')) {
        items[i].classList.add('in-view')
      }
    } else if (items[i].classList.contains('in-view')) {
      items[i].classList.remove('in-view')
    }
  }
}

window.addEventListener('load', callbackFunc)
window.addEventListener('scroll', callbackFunc)

$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  })
})

// Navbar ------
const menuToggle = document.querySelectorAll('.menu-toggle input');
const nav = document.querySelector('#navbar-1 ul');

menuToggle.forEach(function(toggle) {
  toggle.addEventListener('click', function(){
        nav.classList.toggle('slide');
        //close navbar when click outside
        document.addEventListener('click', function(e){
            if(e.target !== nav && e.target !== toggle){
                nav.classList.remove('slide');
                toggle.checked = false;
            }
        });
    });
})
// end Navbar ------

// BUTTON TO TOP --------
$(window).on('scroll', function () {
  if (window.scrollY > window.outerHeight) {
    $('#scrollToTop').addClass('active')
    setTimeout(function () {
      var theta =
        ($(window).scrollTop() -
          (window.outerHeight + window.outerHeight / 5)) /
        500
      $('#scrollToTop').css({ transform: 'rotate(' + theta + 'rad)' })
    })
  } else {
    $('#scrollToTop').removeClass('active')
  }
})

$('#scrollToTop').on('click', function () {
  $('html, body').animate({ scrollTop: 0 }, 100)
})

// NAVBAR MELAYANG -----
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("navbar").style.padding = "10px 50px";
      document.getElementById("navbar").style.borderRadius = "40px";
      document.getElementById("navbar").style.width = "90%";
      document.getElementById("navbar").style.margin= "25px 71px 0 71px";
      document.getElementById("navbar").style.backgroundColor = "#220C61";
      matchMedia("(max-width: 1280px)").matches ? document.getElementById("navbar").style.margin = "30px 0 0 0" : null;
      matchMedia("(max-width: 1280px)").matches ? document.getElementById("navbar").style.width = "100%" : null;
    } else {  
      document.getElementById("navbar").removeAttribute("style");
      document.getElementById("navbar").style.margin = "0 0 0 0";
    };
    matchMedia("(max-width: 576px)").matches ? document.getElementById("navbar").removeAttribute("style") : null;
    matchMedia("(max-width: 720px)").matches ? document.getElementById("navbar").removeAttribute("style") : null;
    matchMedia("(max-width: 800px)").matches ? document.getElementById("navbar").removeAttribute("style") : null;
    matchMedia("(max-width: 1092px)").matches ? document.getElementById("navbar").removeAttribute("style") : null;
    matchMedia("(max-width: 1440px)").matches ? document.getElementById("navbar").style.padding = "0 24px 0 24px" : null;
  };

// END NAVBAR MELAYANG -----

// SLIDER ------
var testimonialItems = document.querySelectorAll('.item label')
var timer
function cycleTestimonials(index) {
  timer = setTimeout(function () {
    var evt
    if (document.createEvent) {
      evt = document.createEvent('MouseEvent')
      evt.initMouseEvent(
        'click',
        true,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null,
      )
    } else {
      evt = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: 20,
      })
    }
    var ele = '.' + testimonialItems[index].className
    var ele2 = document.querySelector(ele)
    ele2.dispatchEvent(evt)
    index++
    if (index >= testimonialItems.length) {
      index = 0
    }
    cycleTestimonials(index)
    document
      .querySelector('.testimonials')
      .addEventListener('click', function () {
        clearTimeout(timer)
      })
  }, 5000)
}

//menjalankan function
cycleTestimonials(0)

// END SLIDER ------

// POPUP --------
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const modal4 = document.querySelector(".modal4");
const modal5 = document.querySelector(".modal5");
const btnclose1 = document.querySelector(".btn-close");
const btnclose2 = document.querySelector(".btn-close2");
const btnclose3 = document.querySelector(".btn-close3");
const btnclose4 = document.querySelector(".btn-close4");
const btnclose5 = document.querySelector(".btn-close5");
const closeButton = document.querySelector(".close-button");
const closeButton2 = document.querySelector(".close-button2");
const closeButton3 = document.querySelector(".close-button3");
const closeButton4 = document.querySelector(".close-button4");
const closeButton5 = document.querySelector(".close-button5");
const navbar = document.querySelector(".navbar-1");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function toggleModal2(){
    modal2.classList.toggle("show-modal");
}

function toggleModal3(){
    modal3.classList.toggle("show-modal");
}

function toggleModal4(){
    modal4.classList.toggle("show-modal");
}

function toggleModal5(){
    modal5.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    } if (event.target === modal2){
        toggleModal2();
    } if (event.target === modal3){
        toggleModal3();
    } if (event.target === modal4){
        toggleModal4();
    } if (event.target === modal5){
        toggleModal5();
    }
}


btnclose1.addEventListener("click", toggleModal);
btnclose2.addEventListener("click", toggleModal2);
btnclose3.addEventListener("click", toggleModal3);
btnclose4.addEventListener("click", toggleModal4);
btnclose5.addEventListener("click", toggleModal5);
closeButton.addEventListener("click", toggleModal);
closeButton2.addEventListener("click", toggleModal2);
closeButton3.addEventListener("click", toggleModal3);
closeButton4.addEventListener("click", toggleModal4);
closeButton5.addEventListener("click", toggleModal5);
window.addEventListener("click", windowOnClick);