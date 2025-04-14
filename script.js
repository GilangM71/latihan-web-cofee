// MEMBUAT TOGGEL ACTIVE UNTUK HAMBURGER
const menuHamburger = document.querySelector('#hamburger-menu');
const nav = document.querySelector('.navbar-nav');
menuHamburger.addEventListener('click', function(){
    nav.classList.toggle('active')
})

// MEMBUAT TOGGLE ACTIVE HILANG JIKA DI KLIK DI LUAR SELAIN MENU
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !nav.contains(e.target)){
        nav.classList.remove('active')
    }
})

// MEMBUAT TOGGEL ACTIVE UNTUK SEARCH
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
document.querySelector('#search').onclick = (i) => {
    searchForm.classList.toggle('active')
    searchBox.focus()
    i.preventDefault()
}

const search = document.querySelector('#search')
    document.addEventListener('click', function(e){
        if(!search.contains(e.target) && !searchBox.contains(e.target)){
            searchBox.classList.remove('active')
        }
    })

    