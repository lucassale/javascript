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
        var imagem = document.createAttribute('figure')
        imagem.setAttribute = ('id', 'foto')
        res.style.textAlign = 'center'
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                imagem.src = 'imagens/cmas.png'
                imagem.alt = 'Imagem de criança masculina'
                res.innerHTML = `Sua idade é ${idade} e seu sexo é ${genero}` + '<img src="imagens/cmas.png" alt="imagem de criança masculina">'
            }else if(idade >= 10 && idade < 21){
                imagem.src = 'imagens/jmas.png'
                imagem.alt = 'Imagem de jovem masculina'
                res.innerHTML = `Sua idade é ${idade} e seu sexo é ${genero}` + '<img src="imagens/jmas.png" alt="imagem de jovem masculina">'
            }else if(idade >= 21 && idade < 50){
                imagem.src = 'imagens/amas.png'
                imagem.alt = 'Imagem de adulto masculina'
                res.innerHTML = `Sua idade é ${idade} e seu sexo é ${genero}` + '<img src="imagens/amas.png" alt="imagem adulto masculina">'
            }else{
                imagem.src = 'imagens/imas.png'
                imagem.alt = 'Imagem de idoso masculina'
                res.innerHTML = `Sua idade é ${idade} e seu sexo é ${genero}` + '<img src="imagens/imas.png" alt="imagem idoso masculina">'
            }
        }else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                imagem.src = 'imagens/cfem.png'
                imagem.alt = 'Imagem de criança feminina'
                res.innerHTML = `Sua idade é ${idade} e seu sexo é ${genero}` + '<img src="imagens/cfem.png" alt="imagem de criança feminina">'
            }else if(idade >= 10 && idade < 21){
                imagem.src = 'imagens/jfem.png'
                imagem.alt = 'Imagem de jovem feminina'
                res.innerHTML = `Sua idade é ${idade} e seu sexo é ${genero}` + '<img src="imagens/jfem.png" alt="imagem de jovem feminina">'
            }else if(idade >= 21 && idade < 50){
                imagem.src = 'imagens/afem.png'
                imagem.alt = 'Imagem de adulto feminina'
                res.innerHTML = `Sua idade é ${idade} e seu sexo é ${genero}` + '<img src="imagens/afem.png" alt="imagem adulto feminina">'
            }else{
                imagem.src = 'imagens/ifem.png'
                imagem.alt = 'Imagem de idoso feminina'
                res.innerHTML = `Sua idade é ${idade} e seu sexo é ${genero}` + '<img src="imagens/ifem.png" alt="imagem idoso feminina">'
            }
        }
        
}