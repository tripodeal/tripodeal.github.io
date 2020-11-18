var slider_array;
var lineup_array;
var active;
var next;
var prev;
var index = 1;
var limit;

var timer;

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(CallNext, 5000);
}

function CallNext() {
    index++;

    active.style.left = "-100vw";
    next.style.left = "0vw";

    next.classList.add('active');
    active.classList.add('prev');
    slider_array[(index + 1) % limit].classList.add('next');

    active.classList.remove('active');
    prev.classList.remove('prev');
    next.classList.remove('next');

    prev = active;
    active = next;
    next = slider_array[(index + 1) % limit];
    resetTimer();
}

function CallPrev() {
    index--;
    if (index < 0) {
        index += limit;
    }

    active.style.left = "100vw";
    prev.style.left = "0vw";

    prev.classList.add('active');
    active.classList.add('next');
    slider_array[(index - 1 + limit) % limit].classList.add('prev');

    active.classList.remove('active');
    prev.classList.remove('prev');
    next.classList.remove('next');

    next = active;
    active = prev;
    prev = slider_array[(index - 1 + limit) % limit];
    resetTimer();
}

window.addEventListener('DOMContentLoaded', function () {
    slider_array = document.querySelectorAll('.slider-cont');
    limit = slider_array.length;
    active = document.querySelector('.active');
    prev = document.querySelector('.prev');
    next = document.querySelector('.next');

    timer = setInterval(CallNext, 5000);

    document.querySelector('img[alt="left"]').addEventListener('click', CallNext);
    document.querySelector('img[alt="right"]').addEventListener('click', CallPrev);

    lineup_array = document.querySelectorAll('.lineup-child-cont  .fixed');
})

window.onscroll = function (e) {
    document.querySelector('#navbar').classList.add('scrolled');
    document.querySelector('#mob-nav').classList.add('scrolled');
    if (isElementInViewport(document.querySelector('#psuedo'))) {
        document.querySelector('#navbar').classList.remove('scrolled');
        document.querySelector('#mob-nav').classList.remove('scrolled');
    }
}

function isElementInViewport(el) {

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

var open_menu = 0;

function toggleOpaque() {
    var list = document.querySelectorAll('body > div');
    console.log(list);
    list[5].classList.toggle('opacity');
    list[6].classList.toggle('opacity');

    // toggle scrolling too
    document.querySelector('html').classList.toggle('no-scroll');
}



document.querySelector('#right-link').addEventListener('click', function () {
    if (open_menu == 0) {
        document.querySelector('#right-menu').classList.add('right-slide');
        open_menu = 2;
        toggleOpaque();
    } else if (open_menu == 2) {
        document.querySelector('#right-menu').classList.remove('right-slide');
        open_menu = 0;
        toggleOpaque();
    } else if (open_menu == 1) {
        // document.querySelector('#left-menu').classList.remove('left-slide');
        document.querySelector('#right-menu').classList.add('right-slide');
        open_menu = 2;
    }
});

// Psuedo Hyperlinks
function clickWA() {
    window.open('https://wa.me/918867265789', '_blank');
}

function clickIG() {
    window.open('https://www.instagram.com/tripodeal1/', '_blank');
}

function clickFB() {
    window.open('https://www.facebook.com/tripodeal1/', '_blank');
}

function clickEmail() {
    window.open('mailto:tripodeal@gmail.com', '_blank');
}

function clickCall() {
    window.open('tel:+918867265789', '_blank');
}

(() => {
  'use strict';

  const objects = document.getElementsByClassName('asyncImage');
  Array.from(objects).map((item) => {
    const img = new Image();
    img.src = item.dataset.src;
    img.onload = () => {
      item.classList.remove('asyncImage');
      return item.nodeName === 'IMG' ? 
        item.src = item.dataset.src :        
        item.style.backgroundImage = `url(${item.dataset.src})`;
    };
  });
})();

window.addEventListener('load',function(){
    document.querySelector('.preloader').style.display="none";
})