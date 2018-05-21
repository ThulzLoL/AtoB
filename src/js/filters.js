let produtosSection = document.querySelector(".products");
let imagemFeature = document.querySelector(".imagemFeature");

function filter(categoria){
    let produtos = categorias[categoria];
    produtosSection.innerHTML = null;
    imagemFeature.src = `imgs/${categoria}.jpg`
    ids = [];
    for(let produto of produtos){
        createFunc(produto);
    }
}
