let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function isLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !isLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = (`Valor ${num.value} adicionado`)
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Número fora do intervalo ou já adicionado')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de Finalizar')
    } else {
        let total = valores.length
        let soma = 0

        for(let pos in valores){
            soma += valores[pos]
        }

        let media = soma / total
        valores.sort()
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} numeros cadastrados</p>`
        res.innerHTML += `<p> O menor valor é ${valores[0]}</p>`
        res.innerHTML += `<p> O maior valor é ${valores[total-1]}</p>`
        res.innerHTML += `<p> A soma de todos os números é igual a ${soma}</p>`
        res.innerHTML += `<p> A média dos números é igual a ${media}</p>`

        
    }
}
    