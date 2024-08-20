const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros) {
    if(numero === 2) {
        continue;           //QUANDO O CONTINUE ESTÁ DENTRO DE UM LAÇO DE REPETIÇÃO, AO CHEGAR NO CONTINUE O CÓDIGO QUE ESTÁ PARA BAIXO DO CONTINUE NÃO É EXECUTADO, PULANDO PARA O PRÓXIMO ITEM DO LOOP
    }                       //NESTE EXEMPLO, QUANDO O NUMERO FOR IGUAL A 2, O MESMO NÃO SERÁ IMPRESSO
    console.log(numero);
}


for(let numero of numeros) {
    if(numero === 7) {
        console.log(numero);
        break;             //QUANDO O BREAK ESTÁ DENTRO DE UM LAÇO DE REPETIÇÃO, AO CHEGAR NO BREAK IRÁ INTERROMPER A EXECUÇÃO DO LAÇO, E MESMO QUE HAJAM OUTROS ITENS A SEREM PERCORRIDOS NO LOOP, O BREAK IRÁ INTERROMPER A EXECUÇAO
    }
}