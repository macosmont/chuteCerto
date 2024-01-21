
//Função textos
function campo(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//Mensagem
function mensagemInicial(){
    campo('h1', 'Chute Certo')
    campo('p', `Escolha um número de 1 a ${Nescolha}`)
}

//Verificar o chute
function verificarChute() { 
    let chute = document.querySelector ('input').value;
    if (chute == numero){
        let palavraS = tentativa > 1 ? 'tentativas' : 'tentativa';
        campo(`p` , `Você Acertou com ${tentativa} ${palavraS}` );
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else if (chute > numero){
        campo (`p` , `O número é menor que ${chute} `);
    } else{
        campo (`p` , `O número é maior que ${chute} `); 
    }
    tentativa++
    limpar()    
}

//Limpar o campo de texto
function limpar() {
    chute = document.querySelector ('input');
    chute.value = ''
}

//Reiniciar o jogo
function reiniciarJogo() {
    numero = gerarNumeroChute()
    tentativa = 1;
    limpar()
    mensagemInicial()
}

///Numero novo
function gerarNumeroChute() {
    let numeroEscolhido =  parseInt(Math.random()*Nescolha+1);  
    let quantidadeLista = lista.length
    if (quantidadeLista == Nescolha){
        lista = []
    }

    if (lista.includes(numeroEscolhido)){
        return gerarNumeroChute()
    } else {
        lista.push(numeroEscolhido)
        return (numeroEscolhido)
    }
}

let lista = []
let Nescolha = prompt ("Escolha até qual número vai o jogo (De 1 a Quanto?)")
mensagemInicial()
let numero = gerarNumeroChute();
let tentativa = 1;
