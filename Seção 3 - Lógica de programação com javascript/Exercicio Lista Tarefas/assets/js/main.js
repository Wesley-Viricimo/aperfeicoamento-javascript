const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return; //SE NÃO HOUVER INFORMAÇÃO NO INPUT, A RXECUÇÃO DA FUNÇÃO SERÁ ENCERRADA
    criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function(evento){
    if(evento.keyCode === 13) { //KEY CODE DA 
        if(!inputTarefa.value) return; //SE NÃO HOUVER INFORMAÇÃO NO INPUT, A RXECUÇÃO DA FUNÇÃO SERÁ ENCERRADA
        criaTarefa(inputTarefa.value);
    }
});

function criaTarefa(textoInput) {
    const li = criaLi(); //QUANDO UMA TAREFA FOR CRIADA, SERÁ CRIADO UM ELEMENTO LI E SERÁ ATRIBUITO O TEXTO DO INPUT PARA O TEXTO DESTA LI
    li.innerText = textoInput;
    tarefas.appendChild(li); //ADICIONANDO O LI CRIADO DENTRO DA UL DO HTML
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' '; //IRÁ CONCATENAR UM ESPAÇO AO LADO DO TEXTO E ANTES DO BOTÃO DE APAGAR
    const botaoApagar = document.createElement('button'); //CRIANDO O ELEMENTO BOTÃO
    botaoApagar.innerText = 'Apagar'; //ADICIONANDO UM TEXTO AO ELEMENTO BOTÃO
    botaoApagar.setAttribute('class', 'apagar'); //ADICIONANDO O ATRIBUTO CLASS DE NOME APAGAR PARA O BOTÃO
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar); //ADICIONANDO O BOTÃO A LI
}

document.addEventListener('click', function(evento) { //ADICIONANDO UM ESCUTADOR DE EVENTOS DE CLICK PARA TODOS OS ELEMENTOS DA PÁGINA HTML
    const el = evento.target; //OBTENDO ELEMENTO QUE FOI CLICADO
    
    if(el.classList.contains('apagar')) { //SE O ELEMENTO CONTIVER A CLASSE 'APAGAR'
        el.parentElement.remove(); //REMOVENDO O ELEMENTO PAI DO ELEMENTO QUE FOI CLICADO, NESTE CASO O LI, QUE SERIA A TAREFA
        salvarTarefas(); //CHAMADA DA FUNÇÃO DE APAGAR TAREFAS PARA ATUALIZAR O LOCALSTORAGE CASO UMA TAREFA SEJA APAGADA
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); //OBTENDO TODOS OS ELEMENTOS DE TAG LI DENTRO DO ELEMENTO TAREFAS(UL)
    const listaDeTarefas = [];

    for(let tarefa of liTarefas) { //PERCORRER TODAS AS TAREFAS
        let tarefaTexto = tarefa.innerText; //OBTER O TEXTO DO ELEMENTO LI
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //SUBSTITUIR O TEXTO APAGAR QUE É DO BOTÃO E REMOVENDO OS ESPAÇOS EM BRANCO
        listaDeTarefas.push(tarefaTexto); //ADICIONANDO O TEXTO DA LI DENTRO DO ARRAY
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); //CONVERTE UM ELEMENTO JAVASCRIPT PARA UMA STRING NO FORMATO JSON
    localStorage.setItem('tarefas', tarefasJSON); //ADICIONANDO A STRING NO FORMATO JSON DE TAREFAS NO LOCALSTORAGE DO NAVEGADOR PARA MANTER A REFERÊNCIA DAS TAREFAS
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); //OBTENDO TAREFAS SALVAS NO LOCALSTORAGE
    const listaDeTarefas = JSON.parse(tarefas); //CONVERTENDO A MINHA STRING NO FORMATO JSON PARA ARRAY

    for (let tarefa of listaDeTarefas) { //PERCORRENDO CADA ELEMENTO DO ARRAY
        criaTarefa(tarefa); //PARA CADA TAREFA ENCONTRADA NO ARRAY DE TAREFAS
    }
}

adicionaTarefasSalvas();

