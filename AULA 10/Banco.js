const numeroConta = 1
let titular = "Yuri Nobre"
let saldo = 1312
let contaAtiva = true
let statusConta

/* if (contaAtiva === true) {
    statusConta = "Ativa"

} 

console.log(" ======= BANCO INOVABANK =======")
console.log (`Número da conta: ${numeroConta}`)
console.log (`Titular: ${titular}`)
console.log (`Saldo: R$ ${saldo.toFixed(2)}`)
console.log (`Status: ${statusConta}`) */

function depositar(valor) {
    if (valor > 0) {
        saldo = saldo + valor
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso! \nNovo saldo: R$ ${saldo.toFixed(2)}`)
    } else {
    console.log("Valor inválido para depósito. O valor deve ser maior que zero.")
}
}

/* depositar(768)
depositar(500)
depositar(-1000)
depositar(0) */

function sacar(valor) {
    if (valor > 0 && valor <= saldo) {
        saldo -= valor
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso! \nNovo saldo: R$ ${saldo.toFixed(2)}`)
    } else if (valor > saldo) {
        console.log("Saldo insuficiente para realizar o saque.")
    } else {
        console.log("Valor inválido para saque. O valor deve ser maior que zero.")
    }
}

/* sacar(480)
sacar(330)
sacar(1800) */


function verExtrato(){
    if (contaAtiva === true) {
        statusConta = "Ativa"
    
    } else {  
        statusConta = "Bloqueada"

    }
    
    console.log(" ======= BANCO INOVABANK =======")
    console.log (`Número da conta: ${numeroConta}`)
    console.log (`Titular: ${titular}`)
    console.log (`Saldo: R$ ${saldo.toFixed(2)}`)
    console.log (`Status: ${statusConta}`)
}

/* verExtrato();


depositar(500)
depositar(-100)
sacar(200)
sacar(10000)
verExtrato() */


function bloquearConta() {
    contaAtiva = false
    console.log("Conta bloqueada com sucesso!")
}


verExtrato()
bloquearConta()
verExtrato()