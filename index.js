const openNav = document.getElementById('open');
const closeNav = document.getElementById('close');
const popUpMenu = document.getElementById('pop-up-menu');


openNav.addEventListener('click', () => {
    openNav.style.display = 'none';
    popUpMenu.style.display = 'block';
    popUpMenu.classList.add("animate__fadeIn");
    

});

closeNav.addEventListener('click', () => {
    openNav.style.display = 'block';
    popUpMenu.style.display = 'none';
    popUpMenu.classList.remove('animate__fadeIn');
  
    

});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) {
        popUpMenu.style.display = 'none';
        openNav.style.display = 'block';
    }
    }   
    );

    window.addEventListener()