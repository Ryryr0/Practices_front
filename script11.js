// basket
const basket = document.querySelector('.basket-container'),
    basketItem = document.querySelector('.basket-item'),
    basketCost = document.querySelector('.basket-cost');

function Basket(){
    this.itemList = [];

    this.add = function(name){
        for (let i = 0; i < this.itemList.length; i++){
            if (this.itemList[i].firstChild.textContent == name){
                let sum = Number(prompt("Сколько добавить?"));
                this.itemList[i].children[1].textContent = Number(this.itemList[i].children[1].textContent) + sum;
                basketCost.firstChild.textContent = Number(this.itemList[i].firstChild.textContent.slice(-2)) * sum + Number(basketCost.firstChild.textContent);
                return;
            }
        }   
        let newItem = basketItem.cloneNode(true);
        newItem.firstChild.textContent = name;
        let sum = prompt("Сколько добавить?");
        newItem.children[1].textContent = sum;
        basketCost.firstChild.textContent = newItem.firstChild.textContent.slice(-2) * sum + Number(basketCost.firstChild.textContent);
        newItem.style.display = 'flex';
        newItem.children[2].onclick = function(){
            basket.basketItems.add(this.parentNode.firstChild.textContent);
        };
        newItem.children[3].onclick = function(){
            basket.basketItems.delItem(this.parentNode.firstChild.textContent);
        };
        this.itemList.push(newItem);
        basket.appendChild(newItem);
    }

    this.delItem = function(name){
        for (let i = 0; i < this.itemList.length; i++){
            if (this.itemList[i].firstChild.textContent == name){
                let sum = Number(prompt("Сколько убрать?"));
                if (Number(this.itemList[i].children[1].textContent) <= sum){
                    basket.removeChild(this.itemList[i]);
                    basketCost.firstChild.textContent = Number(basketCost.firstChild.textContent) - Number(this.itemList[i].children[1].textContent) * Number(this.itemList[i].firstChild.textContent.slice(-2));
                    this.itemList.splice(i, 1);
                    return
                }
                this.itemList[i].children[1].textContent = Number(this.itemList[i].children[1].textContent) - Number(sum);
                basketCost.firstChild.textContent = Number(basketCost.firstChild.textContent) - Number(this.itemList[i].firstChild.textContent.slice(-2)) * sum;
            }
        }
    }
}


basket.basketItems = new Basket();

// catalog
function Catalog(){
    this.itemList = [];

    this.sortContetnt = function(how){
        let newItemList1;
        if (how == 'minmax'){
            newItemList1 = sortItemMinMax(this.itemList);
        }
        else{
            newItemList1 = sortItemMaxMin(this.itemList);
        }
        for (let i = 0; i < newItemList1.length; i++){
            catalog.append(newItemList1[i]);
        }
    }

    this.sortAB = function(a, b){
        if (b == 0){
            b = 10000000;
        }
        for (let i = 0; i < this.itemList.length; i++){
            if (Number(this.itemList[i].firstChild.textContent.slice(-2)) < a || Number(this.itemList[i].firstChild.textContent.slice(-2)) > b){
                this.itemList[i].style.display = 'none';
            }
            else{
                this.itemList[i].style.display = 'flex';
            }
        }
    }
}

const catalog = document.querySelector('.catalog-container'),
    catalogItem = document.querySelector('.catalog-item');

catalog.catalogItems = new Catalog;

let colors = ["Красный", "Зеленый", "Розовый", "Желтый"],
    shapes = ["квадрат", "круг", "треугольник"],
    nums = ['12', '42', '54', '32', '8', '9', '4', '5', '21', '76', '34', '55', '90'];

for (let i = 0; i < nums.length; i++){
    let newItem = catalogItem.cloneNode(true);
    newItem.firstChild.textContent = colors[Math.floor(Math.random() * colors.length)] + " " + shapes[Math.floor(Math.random() * shapes.length)] + " " + nums[i];
    newItem.style.display = 'flex';
    newItem.children[2].onclick = function(){
        basket.basketItems.add(this.parentNode.firstChild.textContent);
    };
    catalog.catalogItems.itemList.push(newItem);
    catalog.appendChild(newItem);
}

// sort
const sortBtnMinMax = document.querySelector('.catalog-filter .catolog-sort-minmax');
const sortBtnMaxMin = document.querySelector('.catalog-filter .catolog-sort-maxmin');
const sortBtnab = document.querySelector('.catalog-filter .catolog-sort-ab'),
    filterA = document.querySelector('.catalog-filter .filter-a'),
    filterB = document.querySelector('.catalog-filter .filter-b');

function sortItemMinMax (itemList){
    let newItemList = [];
    newItemList.push(itemList[0]);
    for (let i = 1; i < itemList.length; i++){
        for (let j = 0; j < newItemList.length; j++){
            if (Number(itemList[i].firstChild.textContent.slice(-2)) < Number(newItemList[j].firstChild.textContent.slice(-2))){
                newItemList.splice(j, 0, itemList[i]);
                break;
            }
            if (j == newItemList.length - 1){
                newItemList.push(itemList[i]);
                break;
            }
        }
    }
    return newItemList;
}

function sortItemMaxMin (itemList){
    let newItemList = [];
    newItemList.push(itemList[0]);
    for (let i = 1; i < itemList.length; i++){
        for (let j = 0; j < newItemList.length; j++){
            if (Number(itemList[i].firstChild.textContent.slice(-2)) > Number(newItemList[j].firstChild.textContent.slice(-2))){
                newItemList.splice(j, 0, itemList[i]);
                break;
            }
            if (j == newItemList.length - 1){
                newItemList.push(itemList[i]);
                break;
            }
        }
    }
    return newItemList;
}

sortBtnMinMax.onclick = function(){
    catalog.catalogItems.sortContetnt("minmax");
}

sortBtnMaxMin.onclick = function(){
    catalog.catalogItems.sortContetnt("maxmin");
}

sortBtnab.onclick = function(){
    catalog.catalogItems.sortAB(Number(filterA.value), Number(filterB.value));
}