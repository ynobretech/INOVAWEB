const numeroConta = 1
let titular = "Yuri Nobre"
let saldo = 50000
let contaAtiva = true
let statusConta
const historico = []

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
        saldo = saldo + valor;
        historico.push(`depositar: R$ ${valor} | Saldo: R$ ${saldo}`)
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso! \nNovo saldo: R$ ${saldo.toFixed(2)}`)
    } else {
        console.log("Valor inválido para depósito. O valor deve ser maior que zero.")
    }
}

/* depositar(768)
depositar(500)
depositar(-1000)
depositar(0) */


 //const ultimastransacoes = historico


function sacar(valor) {
    if (valor > saldo) {
        console.log("Saldo insuficiente para realizar o saque.")
    } else if (valor > 0 && valor <= saldo) {
        saldo -= valor
        historico.push(`sacar: R$ ${valor} | Saldo: R$ ${saldo}`)
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso! \nNovo saldo: R$ ${saldo.toFixed(2)}`)
    } else {
        console.log("Valor inválido para saque. O valor deve ser maior que zero.")
    }

}

/* sacar(480)
sacar(330)
sacar(1800) */


function verExtrato() {
    if (contaAtiva === true) {
        statusConta = "Ativa"

    } else {
        statusConta = "Bloqueada"

    }

    console.log(" ======= BANCO INOVABANK =======")
    console.log(`Número da conta: ${numeroConta}`)
    console.log(`Titular: ${titular}`)
    console.log(`Saldo: R$ ${saldo.toFixed(2)}`)
    console.log(`Status: ${statusConta}`)
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



/* function depositar(valor) {
    if (valor > 0) {
        saldo = saldo + valor
        console.log(`depositar de R$ ${valor.toFixed(2)} realizado com sucesso! \nNovo saldo: R$ ${saldo.toFixed(2)}`)
    }
} */

depositar(300)
sacar(2200)
sacar(5000)
depositar(7800)

console.log(historico)

for(let i = 1; i<6; i++) {
    const indiceatual = historico.length -i
    console.log(`${[i]}. ${historico[indiceatual]}`)
}

function verResumo(){
    let nDepositos
    let nSaques
    let totalTransacoes

for(let i=0; i < historico.length;i++){
    if(historico[i].includes("Depósito", "Sacar")){
        nDepositos++
        } else { 
        nSaques++
        }
        totalTransacoes++
}
   console.log("Resumo de Transações")
   console.log(`Depósitos: ${nDepositos}`) 
   console.log(`Saques: ${nSaques}`)
   console.log(`Total: ${totalTransacoes} transações`)
}

function simularTentativasSaque(valor, maxTentativas){
    let tentativa = 0
    let 
    while(tentativa < maxTentativas) {
        if(valor < 1000000){

        }
        console.log()
    }
}