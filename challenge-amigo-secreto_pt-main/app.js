//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
document.addEventListener("DOMContentLoaded", function() {
    var entradaNome = document.getElementById("nome");
    var botaoAdicionar = document.getElementById("adicionar");
    var listaAmigos = document.getElementById("lista-nomes");
    var botaoSortear = document.getElementById("sortear");
    var resultadoSorteio = document.getElementById("resultado");
    var amigos = [];

    botaoAdicionar.addEventListener("click", function() {
        var nome = entradaNome.value;
        if (nome === "") {
            alert("Por favor, insira um nome válido.");
            return;
        }
        amigos.push(nome);
        atualizarLista();
        entradaNome.value = "";
    });

    botaoSortear.addEventListener("click", function() {
        if (amigos.length === 0) {
            alert("Adicione pelo menos um nome antes de sortear.");
            return;
        }
        var indice = Math.floor(Math.random() * amigos.length);
        var sorteado = amigos[indice];
        resultadoSorteio.innerHTML = "O amigo secreto é: " + sorteado;
    });

    function atualizarLista() {
        listaAmigos.innerHTML = "";
        for (var i = 0; i < amigos.length; i++) {
            var li = document.createElement("li");
            li.textContent = amigos[i];
            listaAmigos.appendChild(li);
        }
    }
});
