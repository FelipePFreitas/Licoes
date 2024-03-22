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

let nome = prompt("Insira seu nome")
let sobrenome = prompt("Insira seu sobrenome")
let anoNascimento = parseInt(prompt("Insira o Ano de nascimento"))
let nomeCompleto = nome +" "+ sobrenome
let idade = 2024 - anoNascimento
alert("Nome completo e sua idade é:" +" "+ nomeCompleto +" "+ idade+"Anos")
