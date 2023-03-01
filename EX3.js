const {readFileSync} = require("fs")

const json = readFileSync("dados.json")
const data = JSON.parse(json)
let vlrs = []
let diasDoMes = []
let somaValores = 0

data.forEach(element => {
    vlrs.push(element.valor)
    somaValores += element.valor
});

const mediaMensal = somaValores / vlrs.length

data.forEach(element => {
    if(element.valor > mediaMensal){
        diasDoMes.push(element.dia)
    }
});

const quantDias = diasDoMes.length
const menorValor = Math.min(...vlrs)
const maiorValor = Math.max(...vlrs)

console.log(`Menor valor de faturamento do mês: ${menorValor}`);
console.log(`Maior valor de faturamento do mês: ${maiorValor}`);
console.log(`Dias que o faturamento foi maior que a média mensal: ${quantDias}`);
console.log(`Dias: ${String(diasDoMes)}`);
