// task 1
document.getElementById('contents').addEventListener('click', function(event) {
    if (!confirm('Вы уверены, что хотите покинуть страницу?')) {
        event.preventDefault();
    }
});

// task 2
const hero = document.querySelector('.hero');

function activate(e) {
  if (e.target.matches('.hero') || !e.target.matches('img')) return;
  [hero.src, e.target.src] = [e.target.src, hero.src];
}

window.addEventListener('click', activate, false);

// task 3
const list = document.getElementById('list');

list.addEventListener('click', (event) => {
    if (event.ctrlKey) {
        event.target.classList.toggle('selected');
    } 
    else {
        let items = list.getElementsByTagName('li');
        for (let item of items) {
            if (item !== event.target) {
                item.classList.remove('selected');
            }
        }
        event.target.classList.add('selected');
    }
});

list.addEventListener('mousedown', (event) => {
    event.preventDefault();
});

// task 4
const slider = document.querySelector('.slider');
const track = document.querySelector('.track');
const thumb = document.querySelector('.thumb');

let isDragging = false;

thumb.addEventListener('mousedown', () => {
  isDragging = true;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    let position = e.clientX - slider.getBoundingClientRect().left;
    if (position < 0) {
      thumb.style.left = '0px';
    } 
    else if (position > slider.offsetWidth) {
      thumb.style.left = `${slider.offsetWidth - thumb.offsetWidth}px`;
    } 
    else {
      thumb.style.left = `${position - thumb.offsetWidth / 2}px`;
    }
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

// task 6
const element = document.getElementById('animated-element');

function fadeInAndOut() {
    element.classList.add('fade-in-out');
    setTimeout(function() {
        element.classList.remove('fade-in-out');
    }, 2000);
}

document.getElementById('animate-button').addEventListener('click', fadeInAndOut);

const resizableElement = document.getElementById('resizable-element');
let isExpanded = false;

resizableElement.addEventListener('click', function() {
    if (isExpanded) {
        resizableElement.style.width = '100px';
        resizableElement.style.height = '100px';
        resizableElement.textContent = 'Инфлэтус';
    } 
    else {
        resizableElement.style.width = '200px';
        resizableElement.style.height = '200px';
        resizableElement.textContent = 'Редуцио';
    }
    isExpanded = !isExpanded;
});

// task 5
function drag(event) {
    event.dataTransfer.setData("img", event.target.id);
}
  
function allowDrop(event) {
    event.preventDefault();
}
  
function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("img");
    let draggedItem = document.getElementById(data);
    event.target.appendChild(draggedItem);
}
  
