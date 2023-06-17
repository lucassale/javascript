function contar(){
    var ini = document.getElementById('ini')
    var fim = document.querySelector('input#fim')
    var pas = document.querySelector('input#pas')
    var res = document.querySelector('div#res')
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        alert('[ERRO] Faltam valores...')
    }else{
        res.innerHTML = 'Contando: '
        var i = ini.value
        var f = fim.value
        var p = pas.value
        for(var c = i; c <= f; c += p){
            res.innerHTML += ` ${c}`
        }
    }
    
}