// task 1
const image = document.querySelector('.container .image');
const container = document.querySelector('.container');

function centerImage() {
    const x = (container.offsetWidth - image.width) / 2;
    const y = (container.offsetHeight - image.height) / 2;
    image.style.left = x + 'px';
    image.style.top = y + 'px';
}

window.addEventListener('resize', centerImage);
centerImage();

container.addEventListener('click', function(event) {
    const x = event.clientX - container.offsetLeft;
    const y = event.clientY - container.offsetTop;
    console.log('Координаты клика: x = ' + x + ' px, y = ' + y + ' px');
});

// task 2
const notifContainer = document.getElementById('notification-container');

notifContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('close-button')) {
        let notification = event.target.parentNode;
        notification.remove();
    }
});

// task 3
window.addEventListener('scroll', function() {
    let parallaxContainer = document.querySelector('.parallax-container');
    let scrollPosition = window.scrollY;
    
    parallaxContainer.style.backgroundPosition = '50% ' + (scrollPosition * 4) + 'px';
});

// task 4
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

window.addEventListener('scroll', function() {
    let parallaxContainer = document.querySelector('.parallax-container');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition % 5 == 0){
        parallaxContainer.style.backgroundColor = getRandomColor();
    }
});