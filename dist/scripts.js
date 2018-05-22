let carrinho = [];

function addCart (id){
    let produtoProcurado;
    for(let categoria of Object.values(categorias)){
        for(let produto of categoria){
            if (produto.id == id){
                produtoProcurado = produto;
            }

        }
    }


    if(produtoProcurado){
        carrinho.push(produtoProcurado);
    }
    
        
}
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
let prodImage = document.querySelector(".prodImg")
let prodName = document.querySelector(".prodName")


function changePage23(){
    console.log(this.getAttribute('data-id-produto'));
    prodImage.src = this.getAttribute('data-img-produto');
    prodValue.innerHTML = this.getAttribute('data-value-produto');
    prodName.innerHTML = this.getAttribute('data-nome-produto');
    prodPrice = prodValue.innerHTML;
    pgTwo.style = "display: none";
    pgThree.style = "display: block";

}

let imagens = [];
let ids = [];

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
    <button onclick="addCart()"></button>
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
    ids = [];
    for(let produto of produtos){
        createFunc(produto);
    }
}

let loginBtn = document.querySelector('#login');

function signIn(){
    let formLogIn = document.querySelector('.log');
    let menu = document.querySelector("nav");
    if (formLogIn.style.display !== "block"){
        formLogIn.style.display = "block";
        formLogIn.style.width = "60%";
    }
    else{
        formLogIn.style.display = "none";
        formLogIn.style.width = "0";
    }

}

loginBtn.onclick = signIn;
let menuBtn = document.querySelector('.menuBtn');

function menuToogle() {
    let menu = document.querySelector("nav");
    let formLogIn = document.querySelector('.log');
   
    if (menu.style.display !== "flex") {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.width = "40%";
    }
    else {
        menu.style.display = "none";
        menu.style.width = "0px;";
        formLogIn.style.diplay = "none";
        formLogIn.style.width = "0";
    }
}

menuBtn.onclick = menuToogle;
let categorias = {
    food: [
        {
            nome:"Lasanha Bolonhesa - Sadia",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 1
        },
        {
            nome:"Nuggets com queijo - Sadia",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
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
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 4
        },
    ],
    
    bebidas: [
        {
            nome:"Água mineral Garrafa - 600ml - Pack com 6",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 5
        },
        {
            nome:"Água mineral Copo - 180ml - Pack com 6",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 6
        },
        {
            nome:"Coca-cola latas - Pack com 6",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 7
        },
        {
            nnome:"Sucos Del Valle - Cx - 1l - Pack com 6",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 8
        },
    ],

    alcoolicos: [
        {
            nome:"Vinho Chileno - 750ml - Cx com 6",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 9
        },
        {
            nome:"Champagne - Cx com 6",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 10
        },
        {
            nome:"Smirnoff Ice - Pack com 6",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 11
        },
        {
            nome:"Cerveja Bohemia - Pack com 6",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 12
        },
    ],

    guloseimas: [
        {
            nome:"Trufas Cacau show",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 13
        },
        {
            nome:"Caixa de bombom - Nestlé",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 14
        },
        {
            nome:"Ruffles média",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 15
        },
        {
            nome:"Amendoim descascado",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 16
        },
    ],

    cafe: [
        {
            nome:"Capsulas café - Ristreto - Nespresso - Cx com 16",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 17
        },
        {
            nome:"Capsulas café - Ristreto - Nespresso",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 18
        },
        {
            nome:"Capsulas café - Ristreto - Nespresso - Cx com 16",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 19
        },
        {
            nome:"Capsulas café - Ristreto - Nespresso",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 20
        },
    ],

    banho: [
        {
            nome:"Secador de cabelos - Taiff",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 21
        },
        {
            nome:"Conj. Toalhas - Buddemeyer",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 22
        },
        {
            nome:"Kit L'Occitane",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 23
        },
        {
            nome:"Kit L'Óreal Paris",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 24
        },
    ],

    banheiro: [
        {
            nome:"Papel higiênico - Pack 24",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 25
        },
        {
            nome:"Sabonete líquido",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 26
        },
        {
            nome:"Sabonete - Lux",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 27
        },
        {
            nome:"Bom Ar - Spray",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 28
        },
    ],

    quarto: [
        {
            nome:"Jogo de Cama - Padrão",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 29
        },
        {
            nome:"Jogo de Cama - Hercovitch",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 30
        },
        {
            nome:"Travesseiros",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
            id: 31
        },
        {
            nome:"Edredom",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg",
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
    prodValue.innerHTML = `R$ ${prodPrice * quantity}`;
}
function subtract(){
    quantity--;
    valueQuant.innerHTML = quantity;
    prodValue.innerHTML = `R$ ${prodPrice * quantity}`;
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

