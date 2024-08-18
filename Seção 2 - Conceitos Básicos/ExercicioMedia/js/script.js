const nome = prompt("Informe o seu nome: ")

alert("Olá " + nome + ", seja bem vindo(a)!");

alert("Iremos calcular sua média de notas!");

alert("Tudo pronto?");

let num1 = prompt("Informe a primeira nota: ");

let num2 = prompt("Informe a segunda nota: ");

num1 = Number(num1);

num2 = Number(num2);

let confirma = confirm("Você confirma que suas notas são " + num1 + " e " + num2 + "?");

if(confirma == true){
    const resultado = (num1 + num2) / 2;

    if(resultado > 8){
        alert(nome + ", a sua média é de " + resultado + ", você está aprovado com honras!");
    } else if (resultado > 6 && resultado < 8){
        alert(nome + ", a sua média é de " + resultado + ", você está aprovado!");
    } else {
        alert(nome + ", a sua média é de " + resultado + ", você está reprovado!");
    }

} else {
    num1 = 0;
    num2 = 0;
    num1 = prompt("Informe a primeira nota: ");
    num2 = prompt("Informe a segunda nota: ");
    num1 = Number(num1);
    num2 = Number(num2);
    const resultado = (num1 + num2) / 2;
    
    if(resultado > 8){
        alert(nome + ", a sua média é de " + resultado + ", você está aprovado com honras!");
    } else if (resultado > 6 && resultado < 8){
        alert(nome + ", a sua média é de " + resultado + ", você está aprovado!");
    } else {
        alert(nome + ", a sua média é de " + resultado + ", você está reprovado!");
    }
}