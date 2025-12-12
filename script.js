const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,

  
  slidesPerView: 'auto',


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

 


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//Side Bar
const wrappersd = document.querySelector('.wrapper__side-bar');
  if(wrappersd){

  }

function readMore() {
  var more = document.getElementById("more");
  var more1 = document.getElementById("more1");
  var more2 = document.getElementById("more2");
  var more3 = document.getElementById("more3");
  var more4 = document.getElementById("more4");
  var btn = document.getElementById("btn");

  if (more.style.display === "none") {
       more.style.display = "flex";
       more1.style.display = "flex";
       more2.style.display = "flex";
       more3.style.display = "flex";
       more4.style.display = "flex";
       btn.innerHTML = "Скрыть";
  } else {
       more.style.display = "none";
       more1.style.display = "none";
       more2.style.display = "none";
       more3.style.display = "none";
       more4.style.display = "none";
       btn.innerHTML = "Показать все";
   
  }
}

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const header = document.querySelector('.header');

  
    if (!burger || !header) return;

    // Следим за тем, как должно выглядеть меню при разных ширинах
    function updateMenuState() {
        if (window.innerWidth >= 1120) {
            // На компьютере меню всегда "открыто"
            header.classList.add('open');
        } else {
            // На мобильных/планшетах изначально закрыто
            header.classList.remove('open');
        }
    }

  
    burger.addEventListener('click', function () {
        if (window.innerWidth < 1120) {
            header.classList.toggle('open');
        }
    });

    
    updateMenuState();

   
    window.addEventListener('resize', updateMenuState);
});


function readMoreDevices() {
  var none_3 = document.getElementById("none_3");
  var none_4 = document.getElementById("none_4");
  var btn_2 = document.getElementById("btn_2");

  if (none_3.style.display === "none") {
       none_3.style.display = "flex";
       none_4.style.display = "flex";
       btn_2.innerHTML = "Скрыть";
  } else {
       none_3.style.display = "none";
       none_4.style.display = "none";
       btn_2.innerHTML = "Показать все";
   
  }
}

function readMoreDetails() {
  var text4 = document.getElementById("text4");
  var btn_3 = document.getElementById("btn_3");

  if (text4.style.display === "none") {
       text4.style.display = "flex";
       btn_3.innerHTML = "Скрыть";
  } else {
       text4.style.display = "none";
       btn_3.innerHTML = "Читать далее";
   
  }
}

