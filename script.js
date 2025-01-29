
// --------------------------------------------------------------------------------------------------
// Função que esconde/mostra menu nav do cabecalho:
const buttonNavMenu = document.querySelector('.header__menu-hamburguer');

buttonNavMenu.addEventListener('click', function (){
    const NavMenu = document.querySelector('.header__mobile-navigation');  

    if(NavMenu.style.display == "none"){
        NavMenu.style.display = "flex";

    }
    else{
        NavMenu.style.display = "none";
    }
})

// ------------------------------------------------------------------------------------------------------

