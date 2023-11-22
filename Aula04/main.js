// Inicializar o array para armazenar os filmes
var filmes = [];

function adicionarFilme() {
    var nomeFilme = document.getElementById("filmeNome").value;
    var imagemFilme = document.getElementById("filmeImagem").value;

    // Verificar se ambos os campos foram preenchidos
    if (nomeFilme.trim() !== '' && imagemFilme.trim() !== '') {
        // Adicionar o filme ao array
        filmes.push({ nome: nomeFilme, imagem: imagemFilme });

        // Atualizar a lista de filmes na tela
        atualizarListaFilmes();
        
        // Limpar os campos de input após adicionar o filme
        document.getElementById('filmeNome').value = '';
        document.getElementById('filmeImagem').value = '';
    } else {
        alert('Por favor, preencha ambos os campos!');
    }
}

function removerFilme(index) {
    // Remover o filme do array pelo índice
    filmes.splice(index, 1);

    // Atualizar a lista de filmes na tela após remoção
    atualizarListaFilmes();
}

function atualizarListaFilmes() {
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = ''; // Limpar a lista antes de atualizar

    // Percorrer o array de filmes e adicionar na tela
    filmes.forEach(function (filme, index) {
        var filmeHTML = `
            <div class="filme-item">
                <img src="${filme.imagem}" alt="${filme.nome}">
                <p>${filme.nome}</p>
                <button onclick="removerFilme(${index})">Remover</button>
            </div>
        `;
        elementoListaFilmes.innerHTML += filmeHTML;
    });
}
