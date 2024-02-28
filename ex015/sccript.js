function verificar(){

    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    res.innerHTML = `Funfou, você digitou ${Number(fano.value)}`

    if(fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1900){
        alert(`[ERRO]: o ano de ${Number(fano.value)} é inválido! O nao deve ser no mínimo 1900`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Masculino'
            img.setAttribute('src', 'imagens/male.png')
            img.setAttribute('width', '300px')
            img.setAttribute('height', '300px')
        } else {
            genero = 'Feminino'
            img.setAttribute('src', 'imagens/female.png')
            img.setAttribute('width', '300px')
            img.setAttribute('height', '300px')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `O sexo escolhido foi ${genero} com ${idade} ano    `
        res.appendChild(img)
    }
}
        
        
       
