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








const slider = document.querySelector('.slider input');
const img = document.querySelector('.images .img-2');
const dragLine = document.querySelector('.slider .drag-line');
slider.oninput = () => {
  let sliderVar = slider.value;
  dragLine.style.left = sliderVar + "%";
   img.style.width = sliderVar + "%";
}

// const container = document.querySelector('.container-slider');

// document.querySelector('.slider').addEventListener('input', (e) => {
//   const value = e.target.value;
//   const percentage = `${value}%`;
//   container.style.setProperty('--position', percentage);
// });







//Modal PopUp
document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('modalPopUp');
  var openModalBtn = document.getElementById('openModalBtn');
  var closeModalBtn = document.getElementById('closeModalBtn');

  if (modal && openModalBtn && closeModalBtn) {
    openModalBtn.onclick = function() {
      modal.style.display = 'block';
    }

    closeModalBtn.onclick = function() {
      modal.style.display = 'none';
    }

    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    }
  } else {
    console.error('One or more elements not found.');
  }
});

// var modal = document.getElementById('modalPopUp');
// var openModalBtn = document.getElementById('openModalBtn');
// var closeModalBtn = document.getElementById('closeModalBtn');

// console.log(modal, openModalBtn, closeModalBtn);

// openModalBtn.onclick = function() {
//   modal.style.display = 'block';
// }

// closeModalBtn.onclick = function() {
//   modal.style.display = 'none';
// }

// window.onclick = function(event) {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
// }

// slider

// const container = document.querySelector('.container-slider');

// document.querySelector('.slider').addEventListener('input', (e) => {
//   const value = e.target.value;
//   const percentage = `${value}%`;
//   container.style.setProperty('--position', percentage);
// });

// const container = document.querySelector('.container-slider');

// document.querySelector('.slider').addEventListener('input', (e) => {
//   const value = e.target.value;
//   const percentage = `${value}%`;
//   container.style.setProperty('--position', percentage);
// });

