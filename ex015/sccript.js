function verificar(){

    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    res.innerHTML = `Funfou, você digitou ${Number(fano.value)}`

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert(`[ERRO]: o ano de ${ano} é inválido!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `A idade é ${idade}`
    }
}
        
       
