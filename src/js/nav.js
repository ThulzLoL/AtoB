let menuBtn = document.querySelector('.menuBtn');

function menuToogle() {
    let menu = document.querySelector("nav");
    let formLogIn = document.querySelector('.log');
    if (menu.style.display === "none") {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.width = "40%";
    }
    else {
        menu.style.display = "none";
        menu.style.width = "0px;";
        formLogIn.style.diplay = "none";
        formLogIn.style.width = "0";
    }
}

menuBtn.onclick = menuToogle;