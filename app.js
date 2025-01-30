//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];

function adicionarAmigos() {
    const nomeInput = 
    document.getElementById('amigo');
    const nome = nomeInput.value;    

    if (nome.trim() === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    nomes.push(amigo);
    atualizarListaAmigos();
    nomeInput.value = '';
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    nomes.forEach(nome => {const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
     });
}

function sortearAmigo() {
    if (nomes.length < 2) {
        alert('É necessário no mínimo 2 participantes para o sorteio.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const amigoSorteado = nomes[indiceSorteado];
    
    document.getElementById('resultado').textContent = `O amigo secreto é: ${amigoSorteado}!`;
}