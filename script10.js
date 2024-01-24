const captcha = document.querySelector(".captcha-cods"),
    randomBtn = document.querySelector(".random-btn"),
    inputField = document.querySelector(".input-item input"),
    enterBtn = document.querySelector(".enter-btn"),
    statusText = document.querySelector(".status-item"),
    form = document.querySelector(".input-item");

let allAlphCharacters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'O', 
    'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 
    'C', 'V', 'B', 'N', 'M', 'q', 'w', 'e', 'r', 't', 'y', 'u', 
    'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 
    'z', 'x', 'c', 'v', 'b', 'n', 'm'];

function isEmpty(strIn)
{
    if (strIn === undefined)
    {
        return true;
    }
    else if(strIn == null)
    {
        return true;
    }
    else if(strIn == "")
    {
        return true;
    }
    else
    {
        return false;
    }
}

function getCaptcha(){
    for (let i = 0; i < 5; i++) {
        let randomChar = allAlphCharacters[Math.floor(Math.random() * allAlphCharacters.length)];
        captcha.textContent += randomChar;
    }
}

function getCaptchaNum(){
    captcha.textContent = (String)(Math.floor(Math.random() * 30 + 10)) + 
        "+" +(String)(Math.floor(Math.random() * 30 + 10));
}

getCaptcha();
randomBtn.addEventListener("click", ()=>{
    captcha.textContent = "";
    getCaptchaNum();
});

enterBtn.addEventListener("click", e =>{
    e.preventDefault();
    let inputValue = inputField.value;
    if (Number(captcha.textContent.slice(0, 2)) + Number(captcha.textContent.slice(3, 5)) == Number(inputValue)){
        form.submit();
        return;
    }
    else {
        if (inputValue == captcha.textContent){
            form.submit();
            return;
        }
    }
    if (isEmpty(inputValue)){
        statusText.textContent = "Pleas, enter somthing!";
        statusText.style.color = "red";
        statusText.style.display = "block"
    }
    else{
        getCaptchaNum();
        statusText.textContent = "Captcha not matched. Please try again!";
        statusText.style.color = "red";
        statusText.style.display = "block"
    }
});

//task 2
function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.value += Number(prompt("Enter the number to add."));
    }
}

const basketContaner = document.querySelector(".basket-container"),
    basketElem = document.querySelector(".basket-container .basket-item"),
    addBtn = document.querySelector(".basket-container .basket-add-btn"),
    addBasketBtn = document.querySelector(".basket-container .add-basket");

basketContaner.children[1].style.display = "none";

addBasketBtn.onclick = function(){
    let newObj = basketElem.cloneNode(true);
    newObj.MyData = new Accumulator(0);
    newObj.style.display = "block";
    newObj.children[0].onclick = function(){
        this.parentNode.MyData.read();
        this.parentNode.children[1].textContent = this.parentNode.MyData.value;
    };
    basketContaner.appendChild(newObj);
};

//task 3

const cardText = document.querySelectorAll(".card-text");

function truncate(str, maxlength){
    if (str.length > maxlength){
        return str.slice(0, maxlength) + "...";
    }
    return str;
}

for (let i = 0; i < cardText.length; i++){
    cardText[i].textContent = truncate(cardText[i].textContent, 100);
}