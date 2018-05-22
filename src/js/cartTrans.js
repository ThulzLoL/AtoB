let cartUp = document.querySelector('.myCart');
let cartHeader = document.querySelector('.cartHeader')
function cartShow(){
    if (!cartUp.classList.contains('displayed3')){
        cartUp.classList.add('displayed3');
    }
    else{
        if(cartUp.classList.contains('displayed3')) {
            cartUp.classList.remove('displayed3');        
        }
    }

} 

cartHeader.onclick = cartShow;