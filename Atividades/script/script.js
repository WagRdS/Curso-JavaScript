let nome = document.getElementById('txtn')
let email = document.getElementById('txtem')
let sexo = document.getElementsByName('radsex')
let tab = document.getElementById('res')

function validar(){
    if(nome.value.lenght == '' || email.value.lenght == ''){
        alert('Preencha os campos acima!')
    } else {
        tab.style.background = 'blue'
        tab.innerHTML = `\u{021D2} ${nome.value} </br>`
        if(sexo[0].checked){
            tab.innerHTML += '\u{021D2} Masculino </br>'
        } else{
            tab.innerHTML += '\u{021D2} Feminino </br>'
        }
        tab.innerHTML += `\u{021D2} ${email.value} </br>`
    }
}

function limpa(){
    document.getElementById('txtn').value = ''
    document.getElementsByName('radsex')[0].checked
    document.getElementById('txtem').value = ''
    res.innerHTML = ''
    res.style.background = 'lightblue'
}
        