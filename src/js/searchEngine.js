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