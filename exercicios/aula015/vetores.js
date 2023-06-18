let vetor = [4, 9, 2, 4, 8]
vetor.sort()
for(let c = 0; c <= 4; c++){
    console.log(vetor[c])
}

console.log('-------------')

for(v in vetor){
    console.log(vetor[v])
}

console.log('-------------')

let c = 0
while(c <= vetor.length){
    console.log(vetor[c])
    c++
}