const menu = document.querySelector('.header__wrapper');
const toggle = document.querySelector('.header__toggle');

const headerMenu = () => {
  menu.classList.add('header__wrapper--closed');
  toggle.addEventListener('click', function () {
    if (menu.classList.contains('header__wrapper--closed')) {
      menu.classList.remove('header__wrapper--closed');
      menu.classList.add('header__wrapper--opened');
    } else {
      menu.classList.add('header__wrapper--closed');
      menu.classList.remove('header__wrapper--opened');
    }
  });
};

export {headerMenu};
