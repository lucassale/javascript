function tabuada(){
    var v = document.getElementById('num')
    var s = document.getElementById('tab')
    if(v.value.length == 0){
        alert ('Não encontrei nenhum número...')
    }else{
        var n = Number(v.value)
        var c = 1
        s.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.text = (`${n} x ${c} = ${n*c}`)
            s.appendChild (item)
            c++
        }

        }
    }
