function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nas = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(nas.value <= 0 || nas.value >= ano){
        window.alert('[ERRO] Valor inválido! Por favor digite o ano de nascimento com 4 digitos.')
    }else
        var idade = ano - nas.value
        var sexo = document.getElementsByName('rsexo')
        var genero = ''
        var img = document.createAttribute('img')
        
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('images/cmas.png')
            }
        }else if(sexo[1].checked){
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Sua idade é ${idade} e seu sexo é ${genero}`
        res.appendChild(img)
        
}