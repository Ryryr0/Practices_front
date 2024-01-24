// task 1-2
const notifyContainer = document.querySelector("aside .base");
    notifyList = document.querySelector("aside .base ul"),
    notifyElem = document.querySelector("aside .base ul li"),
    counter = document.querySelector("aside .noti_count");

function addNotify(){
    let newNotify = notifyElem.cloneNode(true);
    notifyList.appendChild(newNotify);
    counter.textContent = Number(counter.textContent) + 1;
}

let timerId = setInterval(addNotify, 3000);

notifyContainer.addEventListener("mouseover", function(e){
    setTimeout(() => {clearInterval(timerId);}, 10000);
});
// task 3
const UList = document.querySelector(".container-list ul");

function creatUList(){
    let liText = prompt("Введите текст:");
    if (liText){
        let newElem = document.createElement("li");
        newElem.textContent = liText;
        UList.append(newElem);
    }
    else{
        clearInterval(timerId2)
        showNotification("Вы создали список!");
    }
}

let timerId2 = setInterval(creatUList, 1000);
// task 4
function showNotification(option){
    let newNotify = document.createElement("div");
    newNotify.innerHTML = `<strong>${option}</strong>`;
    newNotify.style.width = "10em";
    newNotify.style.height = "4em";
    newNotify.style.backgroundColor = "bisque";
    newNotify.style.textAlign = "center";
    document.body.append(newNotify);
    setTimeout(() => {newNotify.remove();}, 1500);
}