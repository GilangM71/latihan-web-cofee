const menuHamburger = document.querySelector('#hamburger-menu');
const nav = document.querySelector('.navbar-nav');
menuHamburger.addEventListener('click', function(){
    nav.classList.toggle('active')
})


const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !nav.contains(e.target)){
        nav.classList.remove('active')
    }
})