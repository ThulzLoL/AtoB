let pgTwo = document.querySelector(".pgTwo");
let pgThree = document.querySelector(".pgThree");
let prodImage = document.querySelector(".prodImg")
let prodName = document.querySelector(".prodName")


function changePage23(){
    console.log(this.getAttribute('data-id-produto'));
    prodImage.src = this.getAttribute('data-img-produto');
    prodValue.innerHTML = this.getAttribute('data-value-produto');
    prodName.innerHTML = this.getAttribute('data-nome-produto');
    pgTwo.style = "display: none";
    pgThree.style = "display: block";

}