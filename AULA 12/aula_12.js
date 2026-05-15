  const numeroConta = 1
  let titular = "Alexandre"
  let saldo = 1000
  let contaAtiva = false
  let statusConta
  const historico = []

  const elSaldo = document.querySelector('#saldo')
  const elMensagem = document.querySelector('#mensagem')
  const btnDepositar = document.querySelector('#btn-depositar')
  const btnSacar = document.querySelector('#btn-sacar')
  const btnBloquear = document.querySelector('#btn-bloquear')
  const elTotalDepositos = document.querySelector('#total-depositos')
  const elTotalSaques = document.querySelector('##total-saques')
  const elTotalTransacoes = document.querySelector('##total-transacoes')
btnDepositar.addEventListener('click', () => {
    const campValor = document.querySelector('#campo-valor')
    const valor = Number(campValor.value)
    depositar(valor)
})

btnSacar.addEventListener('click', () => {
    const campValor = document.querySelector('#campo-valor')
    const valor = Number(campValor.value)
    sacar(valor)
})

btnBloquear.addEventListener('click', bloquearConta)

  function verExtrato() {
      if (contaAtiva) {
          statusConta = "Ativa"
      } else {
          statusConta = "Bloqueado"
      }
  
      console.log(" ======= BANCO INOVABANK =======")
      console.log(`conta: ${numeroConta}`)
      console.log(`Titular: ${titular}`)
      console.log(`Saldo: R$ ${saldo.toFixed(2)}`)
      console.log(`Status: ${statusConta}`)
  }

  
  
  function depositar(valor) {
  
      if (valor > 0) {
          saldo = saldo + valor
          historico.push(`Depósito: R$ ${valor}  | Saldo: R$ ${saldo}`)
          exibirMensagem(`\nDepósito de R$ ${valor.
              toFixed(2)} realizado com sucesso!`)
              verExtrato()
          exibirMensagem(`Novo saldo: R$ ${saldo.
              toFixed(2)}`)
      } else {
          exibirMensagem("\nValor de depósito inválido. O valor deve ser maior que zero.")
      }
  }
  
  
  function sacar(valor) {
      if (valor > 0 && valor <= saldo) {
          saldo -= valor
          historico.push(`sacar: R$ ${valor}  | Saldo: R$ ${saldo}`)
          exibirMensagem    (`\nSaque de R$ ${valor.toFixed(2)} realizado com sucesso!
          \nNovo saldo: R$ ${saldo.toFixed(2)}`)
          verExtrato()
      } else {
        exibirMensagem("\nValor de saque inválido. o valor deve ser maior que zero e menor ou igual ao saldo.")
      }
    }

function bloquearConta (){
    if(contaAtiva) {
        contaAtiva = false
        exibirMensagem('\nConta bloqueada com sucesso!', 'sucesso')
        btnBloquear.textcontent = 'Desbloquear Conta'
    } else {
        contaAtiva = true
        exibirMensagem('\nConta desbloqueada com sucesso!', 'sucesso')
btnBloquear.textcontent = 'Bloquear Conta'
}
}

  function atualizarSaldo(){
    elSaldo.textContent = `R$ ${saldo.toFixed(2)}`
  }

  function exibirMensagem(texto, tipo){
    elMensagem.textContent = texto
    elMensagem.style.display = 'block'
    elMensagem.className = tipo === 'sucesso' ? 'msg-sucesso' : 'msg-erro'
  }

  function verResumo() {
    let totalDepositos = 0
    let totalSaques = 0
    let totalTransacoes = 0

    for (const transacao of historico) {
        if (transacao.includes('Depósito')) {
            totalDepositos++;
        } elseif (transacao.includes('Saque')) {
        totalSaques++;
        }
        totalTransacoes++;
  }

  elTotalDepositos.textContent = totalDepositos
  elTotalSaques.textContent =  totalSaques
  elTotalTransacoes.textContent = totalTransacoes

}
  