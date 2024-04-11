// let nome = "Felipe"
// let sobrenome = "Freitas"
// let ano = 2024
// let idade = 33

// console.log(nome + " " + sobrenome)
// console.log(ano - idade)

// let primeiroNumero = parseInt(prompt("Primeiro Numero"))
// let segundoNumero = parseInt(prompt("Segundo Numero"))
// // let soma = primeiroNumero + segundoNumero
// let multiplicação = primeiroNumero * segundoNumero
// // alert(soma)
// alert(multiplicação)

// let nome = prompt("Insira seu nome")
// let sobrenome = prompt("Insira seu sobrenome")
// let anoNascimento = parseInt(prompt("Insira o Ano de nascimento"))
// let nomeCompleto = nome +" "+ sobrenome
// let idade = 2024 - anoNascimento
// alert("Nome completo e sua idade é:" +" "+ nomeCompleto +" "+ idade+"Anos")


// var numero = parseInt(prompt("Digite um numero entre 1 e 5"))

// if(numero == 1){
//     alert("Numero: Um")
// } else if (numero == 2){
//     alert("Numero: Dois")
// }else if(numero == 3){
//     alert("Numero: Três")
// }else if (numero == 4){
//     alert("Numero: Quatro")
// }else if (numero == 5){
//     alert("Numero: Cinco")
// }else {
//     alert("Numero não encontrado")
// }

// function verificaFamilia30(numero) {
// if (numero >= 30 && numero < 40) {
//          console.log(numero, "-> Família numérica do 30");
// } else {
//          console.log(numero, "-> Família não identificada");
//         }
//     }
    
//     verificaFamilia30(30) 
//     verificaFamilia30(35)
//     verificaFamilia30(20)
//     verificaFamilia30(50)

// var numero = parseInt(prompt("Insira um numero"))
// if((numero >=10) && (numero <= 50)){
//     alert("Numero está entre 10 e 50")
// }else {
//     alert("Numero fora dos padrões")
// }

// function recebernumero(){
//     let numero = prompt("digite um numero");
//     if(numero % 2 == 0){
//         alert("Numero é Par")

//     }
//     else{
//         alert("Numero impar")
//     }
// }

// recebernumero();

// function subtrair(num1 , num2){
//     let resultado;
//     if(num1 > num2){
//         resultado = num1 - num2
//         console.log("O primeiro numero digitado é maior que o segundo e a subtração entre eles é " + resultado)
//     }
//     else{
//         resultado = num2 - num1
//         console.log("O segundo numero digitado é maior que o primeiro e a subtração entre eles é " + resultado)
//     }
// }
// let numero1 = prompt("Digite o primeiro número:")
// let numero2 = prompt("Digite o segundo número:")

// subtrair(numero1, numero2)

// var resultado = (a, b, op) =>{
//     if (op == "+") {
//         return a + b
//     }
//     else if (op == "-"){
//         return a - b
//     }
//     else if (op == "*"){
//        return a * b
//     }
//     else if (op == "/"){
//        return a / b
//     }
//     else{
//         return 0
//     }
// }
// console.log( resultado(10, 5, "/") )

// function ehMultiplo(numero1, numero2){
// 	if(numero1 % numero2 === 0){
// 		return `${numero1} é múltiplo de ${numero2}`
// 	} 
// 	else {
// 		return `${numero1} e ${numero2} não são múltiplos`
// 	}
// }

// let numero1 = parseFloat(prompt("Digite o primeiro número"))
// let numero2 = parseFloat(prompt("Digite o segundo número"))

// let resultado = ehMultiplo(numero1, numero2)

// alert(resultado)

// function exibirNumerosMenores(numero) {
//     if (numero < 1 || numero > 10) {
//       console.log("O numero deve estar entre 1 e 10")
//       return
//     }
//     for (let i = 1; i < numero; i++) {
//       console.log(i)
//     }
//   }
//   exibirNumerosMenores(4)


// let numero = parseInt(prompt("Digite um numero"))
// function calcfatorial(numero){
//     let fatorial = 1
//     let i = 1

//     while(i<=numero){
//     fatorial *= i;
//     i++
//     }
//     alert("O fatorial de"+""+ numero + "é" +""+ fatorial)

// }
// calcfatorial(numero)

// function teste(){
//     let numero = parseInt(prompt("digite um numero"))
// switch (numero != "sair"){
//     case numero <= 10:
//      console.log(numero + "numero entre 0 e 10");
//         break;
//     default:
//         console.log("nenhum");       
// }
// }
// teste()


let quantidadeParcelas = parseInt(prompt("Quantidade de parcelas ?"))
let valorCompra = parseInt(prompt("Qual o valor do produto ?"))
let valorParcela = valorCompra / quantidadeParcelas
for ( let i = 1; i <= quantidadeParcelas; i++){
    console.log(`Parcela ${i}: R$ ${valorParcela}`);
}