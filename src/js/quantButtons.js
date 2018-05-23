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

let itemTotal = document.querySelector(".itensTotal");
let valorTotal = document.querySelector(".valorTotal2");

let prodPrice2;

function add2(selector, preco){
    let valueQuant2 = document.querySelector(`.valueQuant2${selector}`);
    let cartPrice = document.querySelector(`.cartPrice${selector}`);
    let quantity2 = Number.parseInt(valueQuant2.innerHTML);
    let price = Number.parseInt(valorTotal.innerHTML);
    quantity2++;
    itemTotal.innerHTML++
    valueQuant2.innerHTML = quantity2;
    valorTotal.innerHTML = price + preco;
    cartPrice.innerHTML = `R$: ${preco * quantity2}`;
}

function subtract2(selector, preco){
    let control = document.querySelector(`.cartProd${selector}`)
    let valueQuant2 = document.querySelector(`.valueQuant2${selector}`);
    let cartPrice = document.querySelector(`.cartPrice${selector}`);
    let quantity2 = Number.parseInt(valueQuant2.innerHTML);
    let price = Number.parseInt(valorTotal.innerHTML);
    quantity2--;
    itemTotal.innerHTML--
    valueQuant2.innerHTML = quantity2;
    valorTotal.innerHTML = price - preco;
    cartPrice.innerHTML = `R$: ${preco * quantity2}`;
    if(quantity2 <= 0){
        control.parentNode.removeChild(control);
        Number.parseInt(valorTotal.innerHTML) - preco;
    }
}
