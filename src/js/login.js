let loginBtn = document.querySelector('#login');

function signIn(){
    let formLogIn = document.querySelector('.log');
    let menu = document.querySelector("nav");
    if (!formLogIn.classList.contains('displayed2')){
        formLogIn.classList.add('displayed2');
    }
    else{
        if(formLogIn.classList.contains('displayed2')) {
            formLogIn.classList.remove('displayed2');        
        }
    }

} 

loginBtn.onclick = signIn;