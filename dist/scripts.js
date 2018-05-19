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
            nome:"Lasanha congelada Sadia",
            preco: 15,
            id: 1
        },
        {
            nome:"",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
            img: "imgs/lasanha_a_bolonhesa.jpg"
        },
        {
            nome:"lasanha",
            preco: 15,
        },
    ],
    
    bebidas: [
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
    ],

    alcoolicos: [
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
    ],

    guloseimas: [
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
    ],

    cafe: [
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
    ],

    banho: [
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
    ],

    banheiro: [
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
    ],

    quarto: [
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
        {
            nome:"lasanha",
            preco: 15,
        },
    ],

}
const textSearch = document.querySelector(".textSearch");

function lookFor(){
    const nome = textSearch.value;
    produtosSection.innerHTML = "";

    for (let categoria of Object.values(categorias)){
        for (let produto of categoria) {
                if (produto.nome.includes(nome)){
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
