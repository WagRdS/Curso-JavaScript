let num = [5, 8 , 2, 9, 3]

console.log(`O vetor é ${num}`)
num.push(1)
console.log(`Meu vetor contem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort()
console.log(`Colocando o vetor em órdem ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for(i = 0; i < num.length; i++){
    console.log(`A posição ${i} do vetor tem o valor ${num[i]}`)
}

let pos = num.indexOf(45)
if(pos == -1){
    console.log('O valor não foi localizado')
} else {
    console.log(`O valor esta na posição ${pos}`)
}