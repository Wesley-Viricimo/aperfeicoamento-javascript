/**
 * Created by
 * Wesley Viricimo
 */

const form = document.querySelector('#formulario'); // => Capturar evento de submit do formulário

form.addEventListener('submit', function (evento) {
    evento.preventDefault(); // => Evitando envio do formulário
    const inputPeso = evento.target.querySelector('#peso'); // => Recebendo imputs de peso e altura relacionando com o id da classe HTML
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value); // => Conversão dos imputs para o tipo number
    const altura = Number(inputAltura.value);

    if (!peso) { // => Se o valor recebido for inválido será exibido um alerta ao usuário, passando false como argumento se o valor for inválido
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura); // => Chamada da função getImc passando como argumento o peso e altura digitados pelo usuário e retornando o valor final para a constante
    const nivelImc = getNivelImc(imc); // => Pega o resultado obtido na constante passando como argumento para retornar ao usuário uma mensagem exibindo o nível IMC que o mesmo se encontra
    const msgTitulo = getTituloImc(imc);// => Retorna uma mensagem baseada no cálculo IMC obtido

    const msg = `Seu IMC é ${imc} (${nivelImc}).`; // => Adicionando na constante msg o resultado do cálculo do IMC e o nível em que o mesmo se encontra 


    setTituloResultado(msgTitulo, imc);
    setResultado(msg, true); // => Chamada da função passando como argumento a mensagem  
});

function getNivelImc(imc) { // => Função para retornar o nível do IMC em que o usuário se encontra
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) { // => Função que recebe como parâmetro o peso e altura informados pelo usuário e realiza o cálculo, retornando o valor cálculado e formatado com 2 casas decimais
    const imc = peso / altura ** 2;
    return imc.toFixed(2); // => Retorna valor com 2 casas decimais
}

function getTituloImc(imc) {
    const nivel = ['Requer atenção', 'Peso ideal',
    'Requer muita atenção', 'Cuidado, você corre risco de saúde'];

    if (imc >= 39.9) return nivel[3];
    if (imc >= 34.9) return nivel[2];
    if (imc >= 29.9) return nivel[2];
    if (imc >= 24.9) return nivel[0];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function criaP() { // => Função criando o elemento de parágrafo
    const p = document.createElement('p');
    return p;
}

function setTituloResultado(msgTitulo, imc){
    const resultado = document.querySelector('#titulo-resultado');
    resultado.innerHTML = '';

    const p = criaP();

    const resultImc = imc; 

    if(resultImc >= 39.9){
        p.classList.add('bad');
    } else if (resultImc > 29.9 && resultImc <= 34.9){
        p.classList.add('muita-atencao');
    } else if (resultImc > 24.9 && resultImc <= 29.9){
        p.classList.add('atencao');
    } else if (resultImc >= 18.5 && resultImc <= 24.9){
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('atencao');
    }

    p.innerHTML = msgTitulo;
    resultado.appendChild(p);
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado'); // => Passando para a constante resultado a informação da DIV criada na classe HTML 
    resultado.innerHTML = ''; // => Limpar a constante após ser exibido o resultado

    const p = criaP();

    if(isValid) { // => Verifica se a variável é verdadeira, se for, adiciona ao parágrafo a formatação da classe CSS
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg; // => Adicionando ao parágrafo a mensagem recebida como parâmetro
    resultado.appendChild(p); // => Adicionando ao resultado o resultado obtido no parágrafo
}