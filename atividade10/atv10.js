// Adiciona o listener de clique ao botão
document.getElementById('botao').addEventListener('click', calcularPrimos);

function calcularPrimos() {
    let primos = 0;
    let tabelaPrimos = ''; // Variável para armazenar as células da tabela com números primos

    // Limpa o conteúdo atual da tabela de primos
    document.getElementById('tabela-primos').innerHTML = '';

    // Loop para encontrar números primos entre 2 e 200
    for (let dividendo = 2; dividendo <= 200; dividendo++) {
        let primo = true;

        // Verificação se o número é primo
        for (let dividido = 2; dividido <= Math.sqrt(dividendo); dividido++) {
            if (dividendo % dividido === 0 && dividido !== dividendo) {
                primo = false;
                break;
            }
        }

        // Se o número for primo, adiciona à variável tabelaPrimos
        if (primo) {
            tabelaPrimos += `<td style="background-color: #00FF00;">${dividendo}</td>`;
            primos++;
        } else {
            tabelaPrimos += `<td>${dividendo}</td>`;
        }

        // Adiciona uma nova linha a cada 20 números
        if (dividendo % 20 === 0) {
            tabelaPrimos += '</tr><tr>';
        }
    }

    // Atualiza o conteúdo da tabela com os números primos
    document.getElementById('tabela-primos').innerHTML = `<tr>${tabelaPrimos}</tr>`;

    // Atualiza o número de primos encontrados
    document.getElementById('numeros').textContent = `Número de primos encontrados: ${primos}`;
}
