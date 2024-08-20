//ESCREVER FUNÇÃO QUE RECEBE 2 NÚMEROS E RETORNE O MAIOR DELES

//FEITO POR MIM
console.log(`Maior número é ${retornaMaior(32, 33)}`);

function retornaMaior(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

//FEITO PELO PROFESSOR
function retornaMaiorP1(num1, num2) { 
    return num1 > num2 ? num1 : num2;
}

const retornaMaiorP2 = (num1, num2) => num1 > num2 ? num1 : num2;
console.log(retornaMaiorP2(3,4));