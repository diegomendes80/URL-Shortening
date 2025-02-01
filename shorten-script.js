
const ListaLinks = JSON.parse(localStorage.getItem("links")) || [];


async function encurtaURL(){
    const urlOriginal = document.querySelector('.action__input').value.trim();
    
    // const urlComProxy = `https://api.allorigins.win/get?url=${encodeURIComponent("https://cleanuri.com/api/v1/shorten")}`;


    if(!urlOriginal){
        alert("Por favor, insira uma URL válida!");
        return;
    }


    try {
        const resposta = await fetch(`https://is.gd/create.php?format=json&url=${encodeURIComponent(urlOriginal)}`);


        const dados = await resposta.json();
        console.log(dados)
        const urlEncurtada  = dados.shorturl;

        const par = {original: urlOriginal, encurtado: urlEncurtada};
        ListaLinks.push(par);
    
        localStorage.setItem("links", JSON.stringify(ListaLinks));
    

        document.querySelector('.action__input').value = "";

    } catch (erro) {
        alert("Erro ao encurtar a URL. Tente novamente!");
    }

    // ListaLinks = JSON.parse(localStorage.getItem("links")) || [];
    

   atualizaTela();


}


function atualizaTela(){
    //  ListaLinks= JSON.parse(localStorage.getItem("links")) || [];
    
    const Results = document.querySelector('.action__results');
    Results.innerHTML = "";

    if(ListaLinks.length !== 0){
        
       ListaLinks.forEach((par) => {
                const divResultado  = `
                    <div class="results__result">
                        <p class="result__original">${par.original}</p>
                        <div class="result__shortened">
                            <p class="shortened__link">${par.encurtado}</p>
                            <button class="link__copy green-button">Copy</button>
                        </div>
                    </div>`;

            Results.innerHTML += divResultado;

            document.querySelectorAll('.link__copy').forEach( (botao, ind) => {
                botao.addEventListener('click', () => {
                    botao.textContent = 'Copied!';
                    botao.style.backgroundColor = "hsl(260, 8%, 14%)";
                    const linkEncurtado = document.querySelectorAll('.shortened__link')[ind].textContent;
                    navigator.clipboard.writeText(linkEncurtado);
                })
            })
});
    }
    

}


document.addEventListener("DOMContentLoaded", atualizaTela);
document.querySelector('.action__button').addEventListener('click', encurtaURL);




