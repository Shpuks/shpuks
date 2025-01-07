document.querySelector(".mobile_button").addEventListener("click", function (event) {
    document.querySelector(".mobile_menu").classList.toggle("hide");
});

let menu = document.querySelector(".fixed_menu");
menu.addEventListener('click', function (event) {
    let clickTarget = event.target;
    let activeBtn = document.querySelector('.active');
    if (clickTarget.classList.contains('nav_link')) {
        clickTarget.classList.add('active');
        activeBtn.classList.remove('active');

        let mobile = document.querySelector('.mobile_menu');
        if (!mobile.classList.contains('hide')) {
            mobile.classList.add('hide');
        }
    }
    let body = document.querySelector("body");
    let mobileMenu = document.querySelector(".mobile_menu");
    if (!body.classList.contains("off-scroll") && !mobileMenu.classList.contains('hide')) {
        body.classList.add("off-scroll");
    }
    else {
        body.classList.remove("off-scroll");
    }
});

let classLink = '.main_link';
window.onscroll = function () {
    let h = document.documentElement.clientHeight;
    if (window.scrollY >= h * 4) {
        classLink = '.comments_link';
    }
    else if (window.scrollY >= h * 3) {
        classLink = '.works_link';
    }
    else if (window.scrollY >= h * 2) {
        classLink = '.skills_link';
    }
    else if (window.scrollY >= h) {
        classLink = '.about_link';
    }
    else {
        classLink = '.main_link';
    }
    let activeBtn = document.querySelector('.active');
    let newActiveBtn = document.querySelector(classLink);
    if (!newActiveBtn.classList.contains('active')) {
        newActiveBtn.classList.add('active');
        activeBtn.classList.remove('active')
    }
};