
// --------------------------------------------------------------------------------------------------
// Função que esconde/mostra menu nav do cabecalho:
const buttonNavMenu = document.querySelector('.header__menu-hamburguer');

buttonNavMenu.addEventListener('click', function (){
    const NavMenu = document.querySelector('.header__mobile-navigation');  

    if(NavMenu.style.display == "none"){
        NavMenu.style.display = "flex";
        document.querySelector('.presentation__text').style.marginTop = "2rem";

    }
    else{
        NavMenu.style.display = "none";
        document.querySelector('.presentation__text').style.marginTop = "0";

    }
})

// ------------------------------------------------------------------------------------------------------


// FUNÇÃO QUE MUDA O BG DA ACTION DE ACORDO COM O TAMANHO DA TELA: ------------------------------------------------------

window.addEventListener('resize', function(){
if(window.innerWidth < 850){
    document.querySelector('.action__bg').style.backgroundImage = "url('../../images/bg-shorten-mobile.svg')";
    this.document.querySelector('.boost__bg').style.backgroundImage = "url('../../images/bg-boost-mobile.svg')";
}else{
    document.querySelector('.action__bg').style.backgroundImage = "url('../../images/bg-shorten-desktop.svg')";
    this.document.querySelector('.boost__bg').style.backgroundImage = "url('../../images/bg-boost-desktop.svg')";


}

});

// -------------------------------------------------------------------------------------------------------------------------


const CopyButtons = document.querySelectorAll('.link__copy');


export function copiaLink(){
        button.textContent = 'Copied!';
        button.style.backgroundColor = "hsl(260, 8%, 14%)";
        const textToCopy = document.querySelector('shortened__link');
        textToCopy.select();
        textToCopy.setSelectionRange(0, 99999); // Para dispositivos móveis
  
        navigator.clipboard.writeText(textToCopy.value);
        
    }