let produtosSection = document.querySelector(".products");
let imagemFeature = document.querySelector(".imagemFeature");
function filter(categoria){
    let produtos = categorias[categoria];
    produtosSection.innerHTML = null;
    imagemFeature.src = `imgs/${categoria}.jpg`
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
