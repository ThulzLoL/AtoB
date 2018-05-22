let carrinho = [];

let cartUni = document.querySelector(".cartUni");

function addCart (id){
    let produtoProcurado;
    for(let categoria of Object.values(categorias)){
        for(let produto of categoria){
            if (produto.id == id){
                produtoProcurado = produto;
                cartUni.innerHTML += `<div class="cartProd">
                <div class="quant2">
                        <button class="subtract2" onclick="subtract2()">-</button>
                        <span class="valueQuant2">1</span>
                        <button class="add2" onclick="add2()">+</button>
                    </div>
                    <div class="cartName">1</div>
                    <div class="cartPrice">3</div>
                </div>`
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

