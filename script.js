function calcular(n1,n2) {
    n1 = document.getElementById('n1').value
    n2 = document.getElementById('n2').value

    selector = document.getElementById('selector').value

if (selector == '+') {
    calculo = (Number(n1) + Number(n2))
    document.getElementById('resultado').innerHTML = `o resultado de ${n1} + ${n2} é ${calculo}`

} else if (selector == '-' ){
    
    calculo = (n1 - n2)
    document.getElementById('resultado').innerHTML = `O resultado de ${n1} - ${n2} é ${calculo}`

} else if (selector == '*') {
    calculo = (n1 * n2)
    document.getElementById('resultado').innerHTML = `O resultado de ${n1} x ${n2} é ${ calculo}`
} else if (selector == '/') {
    calculo = (n1 / n2)
     if(Number.isNaN(calculo)) {
       document.getElementById('resultado').innerHTML = `A não ser que você seja Deus, divisão por zero nao existe`
     }
    document.getElementById('resultado').innerHTML = `O resulatdo de ${n1} ÷ ${n2} é ${calculo} `
}

} 


