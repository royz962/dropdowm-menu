const parentMenus = document.querySelectorAll('.parent-menu');
const header = document.querySelector('header');


parentMenus.forEach(parentMenu => {
    parentMenu.addEventListener('mouseenter', function() {
    
        header.classList.add('header-hover');
    });

    parentMenu.addEventListener('mouseleave', function() {
       
        header.classList.remove('header-hover');
    });
});