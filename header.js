// header menu
const header = document.querySelector("header"),
    checkScroll = document.querySelector(".check-scroll");

let scrollLast = 0;
window.addEventListener('scroll', () => { 
    let scrollNow = window.scrollY;
    if (scrollLast < scrollNow){
        header.style.marginTop = "-4.5em";
        header.style.transition = "margin 0.1s ease-out";
    }
    else {
        header.style.marginTop = "0";
        header.style.transition = "margin 0.1s ease-out";
    }
    scrollLast = scrollNow;
});