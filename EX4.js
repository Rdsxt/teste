function rep (vlrEstado, vlrTotal){
    return (vlrEstado / vlrTotal) * 100
}

const sp = 67.836
const rj = 36.678
const mg = 29.229
const es = 27.165
const outros = 19.849

const vlrTotalMensal = sp + rj + mg + es + outros

const repSp = rep(sp, vlrTotalMensal).toFixed(2)
const repRj = rep(rj, vlrTotalMensal).toFixed(2)
const repMg = rep(mg, vlrTotalMensal).toFixed(2)
const repEs = rep(es, vlrTotalMensal).toFixed(2)
const repOutros = rep(outros, vlrTotalMensal).toFixed(2)

console.log(`Valor total: R$ ${vlrTotalMensal.toFixed(3)}`);
console.log(`Representação SP: % ${repSp}`);
console.log(`Representação RJ: % ${repRj}`);
console.log(`Representação MG: % ${repMg}`);
console.log(`Representação ES: % ${repEs}`);
console.log(`Representação Outros: % ${repOutros}`);