"use strict";

window.addEventListener("DOMContentLoaded", (event) => {
    const input = document.getElementById('answer');
    input.addEventListener('keydown', function(event){
        if (event.which == 13){
            event.preventDefault();
            let answer = input.value;
            if (answer == "Да")
                alert("Круто!");
            else
                alert("Попробуй еще раз");
            input.value = "";
        }
    });
    // input.addEventListener('keydown', function(event){
    //     if (event.which == 27);
    //         alert("Отмена");
    // });

    let login = prompt("Введите логин:");
    if (login == "Админ"){
        let password = prompt("Введите пароль:");
        if (password == "Я главный")
            alert("Здравствуйте!");
        else if (password == null)
            alert("Отмена");
        else
            alert("Неверный пароль");
    }
    else if (login == null)
        alert("Отмена");
    else
        alert("Я вас не знаю");

    const likeButton = document.querySelector('.like-button');
    const likeCount = document.querySelector('.like-count');
    const likeContainer = document.querySelector('.like-container img');
    let flag = true;
    likeButton.addEventListener('click', function(){
        const obl = document.querySelector('main');
        obl.addEventListener('mousemove', function(event){
            if (flag){
                return;
            }
            let newImg = document.createElement('img');
            newImg.src = 'pictures/icons8.png';
            newImg.style.position = 'absolute';
            newImg.style.zIndex = -1
            newImg.className = 'new-img-del';
            newImg.style.left = event.clientX + 'px';
            newImg.style.top = event.clientY + 'px';
            obl.appendChild(newImg);
        });
        if (flag){
            likeContainer.style.backgroundColor = 'red'; 
            const currentCount = parseInt(likeCount.textContent, 10);
            likeCount.textContent = currentCount + 1;
        }
        else {
            likeContainer.style.backgroundColor = null; 
            const currentCount = parseInt(likeCount.textContent, 10);
            likeCount.textContent = currentCount - 1;
            while (obl.querySelector('.new-img-del')) {
                obl.removeChild(obl.querySelector('.new-img-del'));
            }
        }
        flag = flag == false ? true: false;
    });

});
 