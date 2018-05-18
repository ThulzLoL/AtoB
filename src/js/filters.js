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
                <button onclick="addCart()"></button>
            </div>
        </div>`
    }
}