let seqFibonacci = []
const valor = 510
let ult = 0 
let penultimo = 1 
let term = 0 

while (valor > term){
    term = ult + penultimo
    ult = penultimo
    penultimo = term

    seqFibonacci.push(term)
}

if(valor === 0 || seqFibonacci.includes(valor)){
    console.log(`O número ${valor} está dentro da sequência Fibonacci`);
    console.log(`Sequência ${String(seqFibonacci)}`);
}else{
    console.log(`O número ${valor} não está dentro da sequência Fibonacci`);
    console.log(`Sequeência ${String(seqFibonacci)}`);
}