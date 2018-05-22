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
