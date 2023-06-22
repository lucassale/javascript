var num = document.getElementById('numero')
var sel = document.getElementById('lista')
var item = document.createElement('option')
var res = document.getElementById('resultado')
var valores = []

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
        alert('Tudo ok!')
        
    }else{
        alert('[ERRO] Valor inválido ou já encontrado na lista!')
    }
}