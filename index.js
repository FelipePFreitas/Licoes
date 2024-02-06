function inserirPrecoDeCusto() {
    let precoCusto = parseFloat(prompt("Insira o preço de custo:"));
    return precoCusto;
}
function somarICMS(precoCusto) {
    let taxaICMS = 0.18;
    let icms = precoCusto * taxaICMS;
    return icms;
}
function mostrarPrecoCalculado(precoCusto, icms) {
    let precoCalculado = precoCusto + icms;
    console.log("O preço calculado com ICMS é:", precoCalculado);
}
let precoCusto = inserirPrecoDeCusto();
let icms = somarICMS(precoCusto);
mostrarPrecoCalculado(precoCusto, icms);