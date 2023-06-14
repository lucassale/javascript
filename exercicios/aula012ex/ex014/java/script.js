function carregar(){
    var m = document.getElementById('msg')
    var i = document.getElementById('imagem')
    var h = new Date()
    var hora = h.getHours()
    m.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        i.src = 'imagens/dia.png'
        document.body.style.background = '#f1d7be'
    }else if(hora >= 12 && hora < 18){
        i.src = 'imagens/tarde.png'
        document.body.style.background = '#cc8251'
    }else{
        i.src = 'imagens/noite.png'
        document.body.style.background = '#42365a'
    }
}