let palavra = "rodrigo"
let stringReversa = ""
const quantLetras = palavra.length - 1

for(let indice = quantLetras; indice >= 0; indice--){
    stringReversa += palavra[indice]
}

console.log(`Palavra ${palavra} reversa = ${stringReversa}`);