const menuBtn = document.querySelector('.menu__button');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close')

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__list--open');
    menuShadow.classList.toggle('menu--open');
    console.log("open");
});

menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open');
    console.log("close");
});

// document.addEventListener('DOMContentLoaded', function () {
//   const menuBtn = document.querySelector('.menu__button');
//   const menuList = document.querySelector('.menu__list');

//   menuBtn.addEventListener('click', function () {
//     menuList.classList.toggle('menu__list--open');
//   });
// });

