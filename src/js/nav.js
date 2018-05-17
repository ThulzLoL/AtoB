let menuBtn = document.querySelector('.menuBtn');

function menuToogle() {
    let menu = document.querySelector("nav");
    if (menu.style.display === "none") {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.width = "200px";
    }
    else {
        menu.style.display = "none";
        menu.style.width = "0px;";
    }
}

menuBtn.onclick = menuToogle;