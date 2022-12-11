let wokingTaskItem = document.querySelector("#working_circle")
let projectPictures = document.querySelectorAll(".project-picture")
let progressBar = document.querySelector("#progress-bar")
let scrollPath = document.querySelector("#scroll-path")
let totalHeight = document.body.scrollHeight - window.innerHeight
const menuHamburger = document.querySelector('.menu-hamburger')
const navLinks = document.querySelector('.nav-links')
let linkNavs = document.querySelectorAll('.link-nav')

menuHamburger.addEventListener('click', function(){
    navLinks.classList.toggle('mobile-menu')
})

linkNavs.forEach((link, i) => {  
    setTimeout(() => {
        link.classList.add('visible')
    }, i * 100)    
});

linkNavs.forEach(link => {    
    link.addEventListener('click', function(){
        navLinks.classList.remove('mobile-menu')
    })
});

linkNavs.forEach(link => {
    link.addEventListener('click', function(){
        navLinks.classList.remove('mobile-menu')
    })
});

window.onscroll = function(){
    let progressHeight = window.pageYOffset * scrollPath.clientHeight / totalHeight
    progressBar.style.height = progressHeight + "px"
}

setInterval(function(){
    wokingTaskItem.classList.toggle('hidden')
},1000)

