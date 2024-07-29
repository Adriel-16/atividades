let anuncio = document.getElementById("btn");

// Adiciona um ouvinte de evento para o evento de clique no elemento 'anuncio', que chama a função 'mostra'
anuncio.addEventListener("click", mostra);

// Definição da função 'mostra'
function mostra() {
    // Seleciona novamente o elemento com o ID "btn" e atribui à variável 'botao'
    let botao = document.getElementById("btn");

    // Verifica se o estilo de exibição do elemento 'botao' é "block" ou vazio ("")
    if (botao.style.display === "block" || botao.style.display === "") {
       
        alert("jasdfbjasdbfjasf");

    } else {
       
    }
}