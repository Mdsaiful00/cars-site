
let barsBtn = document.querySelector('#bars-btn');
let searchBtn = document.querySelector('#search-btn');
let accountForm = document.querySelector('.account-form');
let searchBox = document.querySelector('.search-box');
let navBar = document.querySelector('.navbar');

barsBtn.addEventListener('click' , () => {
  barsBtn.classList.toggle('fa-times');
  navBar.classList.toggle('active');
  accountForm.classList.remove('active');
  searchBox.classList.remove('active');
})

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  searchBox.classList.toggle('active');
  accountForm.classList.remove('active');

});


document.querySelector('#user-btn').onclick = () => {
  accountForm.classList.add('active');
  searchBox.classList.remove('active');

};
document.querySelector('#colse-btn').onclick = () => {
  accountForm.classList.remove('active');
};

let loginBtn = document.querySelector(' .account-form  .login-btn');
let registerBtn = document.querySelector(' .account-form .register-btn');

loginBtn.onclick = () => {
  loginBtn.classList.add('active');
  registerBtn.classList.remove('active');
  document.querySelector('.account-form .login-form').classList.add('active');
  document.querySelector('.account-form .register-form').classList.remove('active');
};

registerBtn.onclick = () => {
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
  document.querySelector('.account-form  .register-form').classList.add('active');
  document.querySelector('.account-form .login-form ').classList.remove('active');

};

var swiper = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3200,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    768: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 3,
    },
  },

});

var swiper = new Swiper(".vehiclse-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,

  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    768: {
      slidesPerView: 2,

    },
    1080: {
      slidesPerView: 3,
    },
  },
});























document.querySelector('.home').onmousemove = (e) => {

  document.querySelectorAll('.home-parallax').forEach(elm => {

    let speed = elm.getAttribute('data-speed');


    let x = (window.innerWidth - e.pageX * speed) / 90;

    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });
};

document.querySelector('.home').onmouseleave = (e) => {

  document.querySelectorAll('.home-parallax').forEach(elm => {

    elm.style.transform = `translateX(0px) translateY(0px)`;
  });
};




