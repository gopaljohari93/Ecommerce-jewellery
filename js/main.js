// navbar active position fixed 
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scrollon");
    } else {
        nav.classList.remove("scrollon");
    }
}

// nav hide li menu
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})