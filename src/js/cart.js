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

