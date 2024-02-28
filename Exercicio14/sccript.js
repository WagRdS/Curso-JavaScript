function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')
    let ind = document.getElementById('ind')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossível Contar'
        ind.innerHTML = '....'
        pas.innerHTML = '1'
    } else {
        res.innerHTML = 'Contando \u{021D2} '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        let aux = 1
        if(p <= 0 ){
            alert('Impossível usar passo 0, precisa ser no mínimo 1')
            p = 1
        }

        if (i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{021D2} `
                aux++
            }
        } else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{021D2}`
                aux++
            }
        }
        res.innerHTML += `\u{1F3C1}`
        ind.innerHTML = `Foram contados ${aux} números`
    }
}