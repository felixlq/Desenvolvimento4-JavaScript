
const cliente = {
    nome: 'Fernando Euzebio',
    quarto: 405,
    condicao: 'sob observação',
    frigobar: ['coca', 'agua', 'frutas', 'refrigerante']
}    
function checkStatus() {
    for(const status in cliente) {
        console.log(`${status}: ${cliente[status]}`)
    }
    console.log()
}

function checkFrigobar() {
    console.log('Encontrado no Frigobar: ')
    for (const check of cliente.frigobar) {
        console.log(check)
    }
}



checkStatus()
checkFrigobar()
