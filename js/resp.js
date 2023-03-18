// hamburger = document.getElementById('toggle')
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
// navbarJustify =document.querySelector('.navbar-justify-content');


const toggle = document.getElementById('toggle');



toggle.onclick = function(){
    toggle.classList.toggle('active');
}


toggle.addEventListener('click',()=>{
    navList.classList.toggle('visibility-class-resp');
    navbar.classList.toggle('h-nav-resp');
    navbar.classList.toggle('navbar-justify-content');
});


document.addEventListener('click', (element)=>{
    if(element.target.id !== 'toggle' && element.target.classList !== 'navbar'){
        navbar.classList.remove('h-nav-resp');
        toggle.classList.remove('active');
        navList.classList.remove('visibility-class-resp');
        navbar.classList.remove('navbar-justify-content');
    }
})

