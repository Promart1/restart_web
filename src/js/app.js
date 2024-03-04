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



//Modal PopUp


var modal = document.getElementById('modalPopUp');
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');

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
