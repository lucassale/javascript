function adicionar(){
    let num = document.getElementById('numero')
    let n = Number(num.value)
    let res = document.getElementById('resultado')
    let select = document.createElement('option')
    select.text = `O valor ${n} foi adicionado.`
    let v = select
    res.appendChild = (`${n}`)
}