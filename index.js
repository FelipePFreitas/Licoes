let quantidadeParcelas = parseInt(prompt("Digite a quantidade de parcelas:"));

if (isNaN(quantidadeParcelas) || quantidadeParcelas <= 0) {
    alert("Quantidade de parcelas inválida.");
} else {
    let valorTotal = parseFloat(prompt("Digite o valor total a ser parcelado:"));

    if (isNaN(valorTotal) || valorTotal <= 0) {
        alert("Valor total inválido.");
    } else {
        let valorParcela = valorTotal / quantidadeParcelas;

        let parcelas = "";
        for (let i = 1; i <= quantidadeParcelas; i++) {
            parcelas += `Parcela ${i}: R$ ${valorParcela.toFixed(2)}\n`;
        }
        alert(`Valor de cada parcela (em ${quantidadeParcelas}x):\n${parcelas}`);
    }
}