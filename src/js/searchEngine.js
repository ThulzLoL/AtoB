const textSearch = document.querySelector(".textSearch");
let counter = 0;

function lookFor(){
    const nome = textSearch.value;
    const regex = new RegExp(`${nome}.*`, 'i');
    produtosSection.innerHTML = "";
    counter = 0;
    
    for (let categoria of Object.values(categorias)){
        for (let produto of categoria) {
            if (regex.test(produto.nome) && counter <= 3){
                counter++;
                createFunc(produto);
            }
        }
    }
}
