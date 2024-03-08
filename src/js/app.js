const menuBtn = document.querySelector('.menu__button');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--open');
    menuShadow.classList.toggle('menu--open');
    console.log("open");
});

menuClose.addEventListener('click', () => {
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open');
    console.log("close");
});

menuShadow.addEventListener('click', (event) => {
    if (!menuList.contains(event.target)) {
        menuList.classList.remove('menu__list--open');
        menuShadow.classList.remove('menu--open');
        console.log("close");
    }
});

//navigation

document.addEventListener('DOMContentLoaded', function () {
   
    var currentUrl = window.location.href;
    var menuLinks = document.querySelectorAll('.menu__link');

    menuLinks.forEach(function (link) {
      
      if (link.href === currentUrl) {
        link.classList.add('active');
      }
    });
  });




//Modal PopUp



document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider input');
  const img = document.querySelector('.images .img-2');
  const dragLine = document.querySelector('.slider .drag-line');

  if (slider) {
    slider.oninput = () => {
      let sliderVar = slider.value;
      dragLine.style.left = sliderVar + "%";
      img.style.width = sliderVar + "%";
    };
  }
});












// slider



document.addEventListener('DOMContentLoaded', function() {
  var openModalBtn = document.getElementById('openModalBtn');
  var nameInput = document.getElementById('name');
  var phoneInput = document.getElementById('phone');
  var cityInput = document.getElementById('city');
  var modal = document.getElementById('modalPopUp');
  var closeModalBtn = document.getElementById('closeModalBtn');

  openModalBtn.addEventListener('click', function(event) {
    event.preventDefault(); 

   
    if (nameInput.value.trim() !== '' && phoneInput.value.trim() !== '' && cityInput.value !== '') {
      modal.style.display = 'block';
    } else {
      
      alert('Please fill in all required fields.');
    }
  });

  closeModalBtn.onclick = function() {
    modal.style.display = 'none';
  };

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
});