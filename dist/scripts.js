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
let produtosSection = document.querySelector(".products");
function filter(categoria){
    let produtos = categorias[categoria];
    produtosSection.innerHTML = null;
    for(let produto of produtos){
        produtosSection.innerHTML += `<div class="product">
            <img src="${produto.img}" alt="">
            <div class="price">
                ${produto.nome}
            </div>
            <div class="cart">
            <div class="preco">
            R$${produto.preco}
            </div>
                <button onclick="addCart()"></button>
            </div>
        </div>`
    }
}

let loginBtn = document.querySelector('#login');

function signIn(){
    let formLogIn = document.querySelector('.log');
    let menu = document.querySelector("nav");
    if (formLogIn.style.display === "none"){
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
    if (menu.style.display === "none") {
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
const textSearch = document.querySelector(".textSearch");

function lookFor(){
    const nome = textSearch.value;
    const regex = new RegExp(`${nome}.*`, 'i');
    produtosSection.innerHTML = "";

    for (let categoria of Object.values(categorias)){
        for (let produto of categoria) {
                if (regex.test(produto.nome)){
                    produtosSection.innerHTML += `<div class="product">
            <img src="${produto.img}" alt="">
            <div class="price">
                ${produto.nome}
            </div>
            <div class="cart">
            <div class="preco">
            R$${produto.preco}
            </div>
                <button onclick="addCart()"></button>
            </div>
        </div>`
                }
        }
    }
}
