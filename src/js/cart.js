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