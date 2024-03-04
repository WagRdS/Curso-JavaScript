function soma(n1=0, n2=0){
    return n1 + n2
}

function parimp(n){
    if(n%2==0){
        return 'Par'
    } else {
        return 'Ímpar'
    }
}
let res = soma(24)
console.log(res)
console.log(parimp(res))