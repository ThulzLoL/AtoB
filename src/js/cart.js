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

