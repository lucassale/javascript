var idade = 80
if (idade < 16 ){
    console.log('Não Vota!')
} else if (idade >= 18 && idade < 65){
    console.log('Voto Obrigatório!')
} else if (idade >=16 || idade >= 65){
    console.log('Voto Opcional!')
}