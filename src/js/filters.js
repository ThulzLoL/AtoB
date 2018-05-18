let comidaImgOne = document.querySelector(".imgOne");
let nameOne = document.querySelector(".priceOne");

function filterComida(){
    comidaImgOne.src = categorias.food[2].img;
    nameOne.innerHTML = categorias.food[2].nome;


}