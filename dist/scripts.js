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
console.log('hello');