let pgTwo = document.querySelector(".pgTwo");
let pgThree = document.querySelector(".pgThree");
let prodImage = document.querySelector(".prodImg");
let prodName = document.querySelector(".prodName");
let cartFive = document.querySelector(".cartFive");
let cart3Page;
function onclickCart3 (){
    addCart(cart3Page);
}
function changePage23(){
    cart3Page = this.getAttribute('data-id-produto');
    prodImage.src = this.getAttribute('data-img-produto');
    prodValue.innerHTML = `R$: ${this.getAttribute('data-value-produto')}`;
    prodName.innerHTML = this.getAttribute('data-nome-produto');
    prodPrice = this.getAttribute('data-value-produto');
    pgTwo.style = "display: none";
    pgThree.style = "display: block";
    cartFive.onclick = onclickCart3;
    console.log(cart3Page)
}