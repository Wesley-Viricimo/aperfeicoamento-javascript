//MESMO QUE O VALOR NÃO SEJA RECEBIDO OS VALORES COMO ARGUMENTO NA FUNÇÃO, COM A PALAVRA RESERVADA ARGUMENTS, É POSSÍVEL ACESSAR OS ELEMENTOS
function soma() {
    let total = 0;
    for(let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}

soma(1, 2, 3, 4, 5, 6, 7);