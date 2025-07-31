let listaDeAmigos = []; 
let numerosSorteados = []; 
let quantidadeDeAmigos = 0;

// Função responsável por validar a entrada do campo
function validarEntrada(){
  let campo = document.querySelector('input').value;
  if (campo == ''){
    alert('O campo não pode ficar em branco, digite um nome válido: ');
  }
}

// Função responsável por adicionar amigos na lista
function adicionarAmigo(){
  let nome = document.querySelector('input').value; 

  if (nome == ''){
    validarEntrada();

  }else if (listaDeAmigos.includes(nome)){
    alert('Este nome já foi digitado, digite um nome que não esteja na lista'); 
  }
  else{
    listaDeAmigos.push(nome);
    quantidadeDeAmigos++;     
    exibirListaDeAmigos(); 
  }
  document.getElementById("resultado").textContent = '';   
  limparCampo();
  
  console.log(`Lista de amigos: ${listaDeAmigos}`);
  console.log(`Quantidade de amigos: ${quantidadeDeAmigos}`);
}

// Exibe a lista de amigos no hmtl
function exibirListaDeAmigos(){
  let elementoLista = document.getElementById("listaAmigos");

  elementoLista.innerHTML = ''; 

  listaDeAmigos.forEach(amigo => {
    let itemDaLista = document.createElement('li');
    itemDaLista.textContent = amigo; 
    elementoLista.appendChild(itemDaLista); 
  })

} 

// Exibe amigo que foi sorteado
function exibirAmigoSorteado(indice){
  return listaDeAmigos[indice];
}

// Sorteia um amigo e exibe o amigo sorteado 
function sortearAmigo(){
 
  let indiceDoAmigoSorteado = gerarIndice() - 1; // subtrai 1 porque  os  indices em listas começam em 0
  let quantidadeDeElementos = numerosSorteados.length;
  let amigoSorteado = exibirAmigoSorteado(indiceDoAmigoSorteado);
  let elementoResultado = document.getElementById("resultado");
  let elementoListaExibida = document.getElementById("listaAmigos"); 

  if (quantidadeDeElementos == quantidadeDeAmigos){
    numerosSorteados = []; 
  }

  if (numerosSorteados.includes(indiceDoAmigoSorteado)){
    return sortearAmigo();
  }else{
    numerosSorteados.push(indiceDoAmigoSorteado); 
    console.log(numerosSorteados);
    elementoResultado.textContent = `O amigo sorteado foi ${amigoSorteado}`; 
    elementoListaExibida.textContent = '';  // limpa a lista na tela conforme o botão de sortear é clicado 
    console.log(`O amigo sorteado foi ${amigoSorteado}`); 
  }
}

// Função que gera um indice aleatório da lista de amigos
function gerarIndice(){
  let indiceGerado = parseInt(Math.random() * quantidadeDeAmigos + 1);
  return indiceGerado;  
}

// Limpar campo de digitação
function limparCampo(){
  let nome = document.querySelector('input');
  nome.value = ''; 
}
