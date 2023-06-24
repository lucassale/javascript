let num = document.getElementById('numero')
let sel = document.getElementById('lista')
let res = document.getElementById('resultado')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1 ){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        sel.appendChild(item)
        res.innerHTML = ''    
    }else{
        alert('[ERRO] Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function analisar(){
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    if (valores.length == 0){
        alert('[ERRO] adicione algum número antes de finalizar.')
    }else{
        for ( let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo foram adicionados ${total} valores.</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores adicionado é de: ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores adicionados é de: ${media}.</p>`
    }
    
}