let loginBtn = document.querySelector('#login');

function signIn(){
    let formLogIn = document.querySelector('.log');
    let menu = document.querySelector("nav");
    if (formLogIn.style.display !== "block"){
        formLogIn.style.display = "block";
        formLogIn.style.width = "60%";
    }
    else{
        formLogIn.style.display = "none";
        formLogIn.style.width = "0";
    }

}

loginBtn.onclick = signIn;