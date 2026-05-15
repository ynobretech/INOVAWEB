// vetores (Arrays) - SEMPRE SERÁ CONST
const listacompras = ["tomate", "cebola", "batata"]

// Um Array pode conter vários tipos de dados diferentes
const misturado = ["tomate", 8, true]

// Consultado um vetor
console.log(listacompras)

// Usando o push, é acrescentado um novo elemento no vetor. 
listacompras.push("limão") // Acrescenta no final

// Consulta um vetor específico dentro da lista
console.log(listacompras[2])

// Modifica elemento específico
listacompras[0] = "Laranja"

// Acrescenta na posição específica
listacompras[4] = "uva"

// Lista atualizada até a adição de uva
console.log(listacompras)

// Exibe a quantidade de itens da lista
console.log(listacompras.length)

// Pop remove o último elemento e o exibe
let pop = listacompras.pop()

console.log(pop)
console.log(listacompras)
listacompras.push("amora")
listacompras.push("maçã")
listacompras.push("laranja")
listacompras.push("banana")
listacompras.push("uva")

//for(começo; quando termina; acréscimo)
for(let i = 0; i < 4;i++) {
    console.log(listacompras[i])
}

for(let i = 0; i < listacompras.length;i++) {
    console.log(listacompras[i])
}

for(const item of listacompras) {
    console.log([item])
}

console.log(listacompras.indexOf("laranja"))

let x = 0
while (x < 10){
    console.log(x)
    x++
}