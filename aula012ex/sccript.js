function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src = 'imagens/dia.png'
        document.body.style.background = '#cfed75'
    }else if(hora >= 12 && hora <= 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#e9a76e'
    }else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#706ee9'
    }
}
        
        
        
       
