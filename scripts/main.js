
function toggleMenu(toggleBtn, menu) {
    let sideMenu = document.querySelector(menu);
    let btnAttr = toggleBtn.getAttribute('src');
    console.log(btnAttr);

    if (btnAttr == "assets/images/icon-menu.svg") {
        toggleBtn.setAttribute('src', 'assets/images/icon-menu-close.svg');
    } else {
        toggleBtn.setAttribute('src', 'assets/images/icon-menu.svg');
    }


    sideMenu.classList.toggle('active');
}