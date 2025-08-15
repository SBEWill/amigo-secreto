//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let adicionar = document.querySelector('input').value;
   if ( adicionar == ''){
    alert('Por favor, insira um nome.');
       }else{
        amigos.push(adicionar);
        console.log(amigos);
        limparCampo();
        exibirAmigos();

       }
}

function limparCampo() {
    let adicionar = document.querySelector('input');
    adicionar.value = '';
}

function exibirAmigos() {
    let exibir = document.getElementById('listaAmigos');
    exibir.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let amigo = document.createElement('li');
        amigo.textContent = amigos[i];
        exibir.appendChild(amigo);
    }
}

function sortearAmigo(){
    let amigoEscolhido = parseInt(Math.random() * amigos.length);

if (amigos.length == 0){
    alert('Por favor, insira um nome.')
}else{
 limparLista();
 let exibirAmigoEscolhido = document.getElementById('resultado');
 exibirAmigoEscolhido.textContent = 'O amigo sorteado foi: ' + amigos[amigoEscolhido];
}

}
function limparLista(){
    exibir = document.getElementById('listaAmigos');
    exibir.innerHTML = '';

}
  