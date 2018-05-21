
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