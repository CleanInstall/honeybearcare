const menu = document.querySelector('.menu_bar');
const navItems = document.querySelector('.nav_items');
const closeBtn = document.querySelector('.close_btn');

menu.addEventListener('click', () => {
   navItems.classList.add('nav_show');
   
});

closeBtn.addEventListener('click', () => {
   navItems.classList.remove('nav_show');
   
});
