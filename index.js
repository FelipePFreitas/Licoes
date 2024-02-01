// Correção de exercício - Atividade Extra

// Solicita um número através do prompt

var numero = prompt("Digite um número:");

// Converte o input para um número
var numeroInt = parseInt(numero);


// Verifica se está entre 10 e 50
    if(numeroInt >= 10 && numero <= 50) {
        alert("O número está entre 10 e 50!");
    } else {
        console.log("O número não está entre 10 e 50");
    }