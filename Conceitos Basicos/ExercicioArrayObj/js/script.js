function meuEscopo () {
    /*Adicionando para dentro da constante formulário e resultado o documento html pelo nome da classe*/
    const formulario = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoFormulario (evento) {
      /*Método para previnir o funcionamento padrão do formulário*/
        evento.preventDefault();
        
        /*Atribuindo às constantes o valor que for digitado no formulario html*/
        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const idade = formulario.querySelector('.idade');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');

        /*Adicionando dentro do array pessoas os valores que forem obtidos no formulário digitado pelo usuário*/
       pessoas.push({
        nome : nome.value,
        sobrenome : sobrenome.value,
        idade : idade.value,
        peso : peso.value,
        altura : altura.value
       });

       /*Adicionando dentro da constante resultado os valores passados para o Array*/
       resultado.innerHTML += `<p> Olá ${nome.value} ${sobrenome.value}, ` +
       `você tem ${idade.value} anos, pesa ${peso.value} quilos e mede ${altura.value} de altura.</p>`
    }

    /*Adicionando um evento "Escutador" após ser enviado o formulário */
    formulario.addEventListener('submit', recebeEventoFormulario);
}

meuEscopo();