let carrinho = [];

let cartUni = document.querySelector(".cartUni");
let valorTotalCarrinho = 0
function addCart (id){
    let produtoProcurado;
    for(let categoria of Object.values(categorias)){
        for(let produto of categoria){
            if (produto.id == id){
                itemTotal.innerHTML++
                valorTotalCarrinho = valorTotalCarrinho + produto.preco
                valorTotal.innerHTML = valorTotalCarrinho;
                produtoProcurado = produto;
                cartUni.innerHTML += `<div class="cartProd">
                <div class="quant2">
                <button class="subtract21" produto-id="${produto.id}" onclick="subtract2(${carrinho.length - 1}, ${produto.preco})">-</button>
                <span class="valueQuant2${carrinho.length - 1}">1</span>
                <button class="add21" produto-id="${produto.id}" onclick="add2(${carrinho.length - 1}, ${produto.preco})">+</button>
                </div>
                <div class="cartName">${produto.nome}</div>
                <div class="cartPrice${carrinho.length - 1}">R$: ${produto.preco}</div>
                </div>`

               /* let add21 = document.querySelectorAll(".add21");
                let subtract21 = document.querySelectorAll(".subtract21");
                for(let adds of add21){
                    adds.onclick = add2(`${produto.preco}`)
                }
                for(let subtracts of subtract21){
                    subtracts.onclick = subtract2(`${produto.preco}`)
                }*/
                
            }
            
        }
    }
    
    
    if(produtoProcurado){
        carrinho.push(produtoProcurado);
    }
    
    let soma = somarPrecos();
}

function removeFromCart (id) {
    let i = 0;
    let indexToRemove = 0;
    
    for (let produto of carrinho){
        if (produto.id == id){
            indexToRemove = i;
        }
        
        i++;
    }
    
    carrinho.splice(indexToRemove, 1);
    
    let soma = somarPrecos();
}

function somarPrecos () {
    let soma = 0;
    
    for (let produto of carrinho){
        soma += produto.preco;
    }
    
    return soma;
}


let cartUp = document.querySelector('.myCart');
let cartHeader = document.querySelector('.cartHeader')
function cartShow(){
    if (!cartUp.classList.contains('displayed3')){
        cartUp.classList.add('displayed3');
    }
    else{
        if(cartUp.classList.contains('displayed3')) {
            cartUp.classList.remove('displayed3');        
        }
    }

} 

cartHeader.onclick = cartShow;
let pgOne = document.querySelector(".pgOne");

function changePage12(){
    pgOne.style = "display: none";
    pgTwo.style = "display: block";
    pgThree.style = "display: none";
}
function changePage1(){
    pgOne.style = "display: block";
    pgTwo.style = "display: none";
    pgThree.style = "display: none";
}
let pgTwo = document.querySelector(".pgTwo");
let pgThree = document.querySelector(".pgThree");
let prodImage = document.querySelector(".prodImg");
let prodName = document.querySelector(".prodName");
let cartFive = document.querySelector(".cartFive");

function changePage23(){
    console.log(this.getAttribute('data-id-produto'));
    prodImage.src = this.getAttribute('data-img-produto');
    prodValue.innerHTML = `R$: ${this.getAttribute('data-value-produto')}`;
    prodName.innerHTML = this.getAttribute('data-nome-produto');
    prodPrice = this.getAttribute('data-value-produto');
    pgTwo.style = "display: none";
    pgThree.style = "display: block";
    cartFive.onclick = `addCart(${this.getAttibute('data-id-produto')})`;
}

let imagens = [];

function createFunc(produto){
    produtosSection.innerHTML += `<div class="product">
    <img class="imagePage2" src="${produto.img}" alt="" data-id-produto="${produto.id}" data-img-produto="${produto.img}"
    data-value-produto="${produto.preco}" data-nome-produto="${produto.nome}">
    <div class="price">
    ${produto.nome}
    </div>
    <div class="cart">
    <div class="preco">
    R$${produto.preco}
    </div>
    <button onclick="addCart(${produto.id})"></button>
    </div>
    </div>`;
    imagens = document.querySelectorAll(".imagePage2");
    
    for (let imagem of imagens) {
        imagem.onclick = changePage23;
    }
}
let produtosSection = document.querySelector(".products");
let imagemFeature = document.querySelector(".imagemFeature");

function filter(categoria){
    let produtos = categorias[categoria];
    produtosSection.innerHTML = null;
    imagemFeature.src = `imgs/${categoria}.jpg`
    for(let produto of produtos){
        createFunc(produto);
    }
}

let loginBtn = document.querySelector('#login');

function signIn(){
    let formLogIn = document.querySelector('.log');
    let menu = document.querySelector("nav");
    if (!formLogIn.classList.contains('displayed2')){
        formLogIn.classList.add('displayed2');
    }
    else{
        if(formLogIn.classList.contains('displayed2')) {
            formLogIn.classList.remove('displayed2');        
        }
    }

} 

loginBtn.onclick = signIn;
let mainBanheiro = document.querySelector(".mainBanheiro")
function changePageCreate(){
    changePage12();
    filter();
}


let menuBtn = document.querySelector('.menuBtn');

function menuToogle() {
    let menu = document.querySelector("nav");
    let formLogIn = document.querySelector('.log');
    
    if (!menu.classList.contains('displayed')){
        menu.classList.add('displayed');
    }
    else {
        if(menu.classList.contains('displayed')) {
            menu.classList.remove('displayed');        
        }
        
        formLogIn.classList.remove('displayed2')
    }
}

menuBtn.onclick = menuToogle;
let categorias = {
    food: [
        {
            nome:"Lasanhas Sabores - Sadia",
            preco: 15,
            img: "imgs/lasanha-sadia.jpg",
            id: 1
        },
        {
            nome:"Nuggets com queijo - Sadia",
            preco: 15,
            img: "imgs/nuggets-queijo-sadia.jpg",
            id: 2
        },
        {
            nome:"Pratos Congelados - Sadia",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 3
        },
        {
            nome:"Pratos Congelados - Marca Fitness",
            preco: 15,
            img: "imgs/congelados-sadia.jpg",
            id: 4
        },
    ],
    
    bebidas: [
        {
            nome:"Água mineral Garrafa - 600ml - Pack com 6",
            preco: 15,
            img: "imgs/agua-mineral-garrafa-pack6.jpg",
            id: 5
        },
        {
            nome:"Água mineral Copo - 180ml - Pack com 3",
            preco: 15,
            img: "imgs/agua-mineral-copo-pack6.jpg",
            id: 6
        },
        {
            nome:"Coca-cola latas - Pack com 6",
            preco: 15,
            img: "imgs/coca-cola-lata-pack6.jpg",
            id: 7
        },
        {
            nnome:"Sucos Del Valle - Cx - 1l - Pack com 5",
            preco: 15,
            img: "imgs/suco-del-valle-pack5.jpg",
            id: 8
        },
    ],

    alcoolicos: [
        {
            nome:"Vinho Chileno - 750ml - Cx com 6",
            preco: 15,
            img: "imgs/vinho-chileno.jpg",
            id: 9
        },
        {
            nome:"Champagne - Cx com 6",
            preco: 15,
            img: "imgs/champagne.jpg",
            id: 10
        },
        {
            nome:"Smirnoff Ice - Pack com 6",
            preco: 15,
            img: "imgs/smirnoff-ice-pack6.jpg",
            id: 11
        },
        {
            nome:"Cerveja Bohemia - Pack com 6",
            preco: 15,
            img: "imgs/cerveja-bohemia-pack6.jpg",
            id: 12
        },
    ],

    guloseimas: [
        {
            nome:"Trufas Cacau show",
            preco: 15,
            img: "imgs/trufas-cacau-show.jpg",
            id: 13
        },
        {
            nome:"Caixa de bombom - Nestlé",
            preco: 15,
            img: "imgs/caixa-bombom-nestle.jpg",
            id: 14
        },
        {
            nome:"Ruffles média",
            preco: 15,
            img: "imgs/rufles-media.jpg",
            id: 15
        },
        {
            nome:"Amendoim descascado",
            preco: 15,
            img: "imgs/amendoim-descascado-yoki.jpg",
            id: 16
        },
    ],

    cafe: [
        {
            nome:"Capsulas café - Ristreto - Nespresso - Cx com 16",
            preco: 15,
            img: "imgs/capsulas-nespresso.jpg",
            id: 17
        },
        {
            nome:"Capsulas café - Ristreto - Nespresso",
            preco: 15,
            img: "imgs/capsulas-nespresso.jpg",
            id: 18
        },
        {
            nome:"Capsulas café - Ristreto - Nespresso - Cx com 16",
            preco: 15,
            img: "imgs/capsulas-nespresso.jpg",
            id: 19
        },
        {
            nome:"Capsulas café - Ristreto - Nespresso",
            preco: 15,
            img: "imgs/capsulas-nespresso.jpg",
            id: 20
        },
    ],

    banho: [
        {
            nome:"Secador de cabelos - Taiff",
            preco: 15,
            img: "imgs/secador-taiff.jpg",
            id: 21
        },
        {
            nome:"Conj. Toalhas - Buddemeyer",
            preco: 15,
            img: "imgs/toalhas-buddemeyer.jpg",
            id: 22
        },
        {
            nome:"Kit L'Occitane",
            preco: 15,
            img: "imgs/kit-loccitane.jpg",
            id: 23
        },
        {
            nome:"Kit L'Óreal Paris",
            preco: 15,
            img: "imgs/kit-loreal.jpg",
            id: 24
        },
    ],

    banheiro: [
        {
            nome:"Papel higiênico - Pack 24",
            preco: 15,
            img: "imgs/papel-higienico-pack24.jpg",
            id: 25
        },
        {
            nome:"Sabonete líquido",
            preco: 15,
            img: "imgs/sabonete-liquido-natura.jpg",
            id: 26
        },
        {
            nome:"Sabonete - Lux",
            preco: 15,
            img: "imgs/sabonete-lux.jpg",
            id: 27
        },
        {
            nome:"Bom Ar - Spray",
            preco: 15,
            img: "imgs/bom-ar-spray.jpg",
            id: 28
        },
    ],

    quarto: [
        {
            nome:"Jogo de Cama - Padrão",
            preco: 15,
            img: "imgs/jogo-de-cama.jpg",
            id: 29
        },
        {
            nome:"Jogo de Cama - Hercovitch",
            preco: 15,
            img: "imgs/jogo-de-cama-hercovitch.jpg",
            id: 30
        },
        {
            nome:"Travesseiros",
            preco: 15,
            img: "imgs/travesseiros.jpg",
            id: 31
        },
        {
            nome:"Edredom",
            preco: 15,
            img: "imgs/edredom.jpg",
            id: 32
        },
    ],

}
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
    let valueQuant2 = document.querySelector(`.valueQuant2${selector}`);
    let cartPrice = document.querySelector(`.cartPrice${selector}`);
    let quantity2 = Number.parseInt(valueQuant2.innerHTML);
    let price = Number.parseInt(valorTotal.innerHTML);
    quantity2--;
    itemTotal.innerHTML--
    valueQuant2.innerHTML = quantity2;
    valorTotal.innerHTML = price - preco;
    cartPrice.innerHTML = `R$: ${preco * quantity2}`;
}

const textSearch = document.querySelector(".textSearch");
let counter = 0;

function lookFor(){
    const nome = textSearch.value;
    const regex = new RegExp(`${nome}.*`, 'i');
    produtosSection.innerHTML = "";
    counter = 0;
    
    for (let categoria of Object.values(categorias)){
        for (let produto of categoria) {
            if (regex.test(produto.nome) && counter <= 3){
                counter++;
                createFunc(produto);
            }
        }
    }
}

