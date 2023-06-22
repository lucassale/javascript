var num = document.getElementById('numero')
var sel = document.getElementById('lista')
var item = document.createElement('option')
var res = document.getElementById('resultado')
var valores = []


function adicionar(){
    if ( num.value >= 1 && num.value <= 100){  
        item.text += `Valor ${num.value} adicionado.`
        sel.appendChild (item)
        valores.push(num.value)
    }else{
        alert(`[ERRO] Valor inválido ou já encontrado.`)
    }
    num.focus()
    alert(valores)
}

