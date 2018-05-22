let valueQuant = document.querySelector(".valueQuant");
let prodValue = document.querySelector(".prodValue");

let prodPrice;
let quantity = 1;

function add(){
    quantity++;
    valueQuant.innerHTML = quantity;
    prodValue.innerHTML = `R$: ${prodPrice * quantity}`;
}
function subtract(){
    quantity--;
    valueQuant.innerHTML = quantity;
    prodValue.innerHTML = `R$: ${prodPrice * quantity}`;
}

let valueQuant2 = document.querySelector(".valueQuant2");
let cartPrice = document.querySelector(".cartPrice");

let prodPrice2;
let quantity2 = 1;

function add2(){
    quantity2++;
    valueQuant2.innerHTML = quantity2;
    cartPrice.innerHTML = `R$: ${cartPrice * quantity2}`;
}
function subtract2(){
    quantity2--;
    valueQuant2.innerHTML = quantity2;
    cartPrice.innerHTML = `R$: ${cartPrice * quantity2}`;
}
