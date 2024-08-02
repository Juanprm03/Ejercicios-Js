document.addEventListener('DOMContentLoaded', function(){
    const menu = document.getElementById('menu');
    const navMenu = document.getElementById('nav-menu');

    menu.addEventListener('click', () =>{
        navMenu.classList.toggle('active')
    })
})