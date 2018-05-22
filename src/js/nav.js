let menuBtn = document.querySelector('.menuBtn');

function menuToogle() {
    let menu = document.querySelector("nav");
    let formLogIn = document.querySelector('.log');
    
    if (!menu.classList.contains('displayed')){
        menu.classList.add('displayed');
    }
    else {
        if(menu.classList.contains('displayed')) {
            menu.classList.remove('displayed');        
        }
        
        formLogIn.classList.remove('displayed2')
    }
}

menuBtn.onclick = menuToogle;