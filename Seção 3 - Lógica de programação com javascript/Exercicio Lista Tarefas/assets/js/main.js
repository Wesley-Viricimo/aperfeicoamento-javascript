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
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); //OBTENDO TODOS OS ELEMENTOS DE TAG LI DENTRO DO ELEMENTO TAREFAS(UL)
    const listaDeTarefas = [];

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

