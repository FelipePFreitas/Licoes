// function maca (cor, forma, temSemente, estacao)
// { 
//     this.cor = cor;
//     this.forma = forma;
//     this.temSemente = temSemente;
//     this.estacao = estacao;
//  }
// const maca1 = new maca ("Vermelha", "Arrendondado", "Sim", "Outono");
// // console.log(maca1)
// // console.log(maca1.cor.length);
// // console.log(maca1.forma.toUpperCase())
// // console.log(maca1.estacao.toLowerCase())
// // maca1.completo()

// for(const propriedade in maca1){
//     console.log(maca1[propriedade])
// }

class carro {
    constructor(marca, cor, modelo, ano){
        this.marca = marca;
        this.cor = cor;
        this.modelo = modelo;
        this.ano = ano;
    }
    Apresentar(){
        console.log(`A marca do carro é: ${this.marca+" "+this.cor+" "+this.modelo +" "+ this.ano}`)
    }
}
const Meucarro = new carro ("Volks", "Preto", "Polo", "2007")
const Meucarro2 = new carro ("Volks", "Cinza", "Voyage", "2017")
Meucarro.Apresentar()
Meucarro2.Apresentar()