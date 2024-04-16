const form = document.getElementById('form-atividade')
const nomes = [];
const telefones = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinhas();
    atualizarTabela();
})

function adicionarLinhas(){
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    nomes.push(inputNome.value);
    telefones.push(inputTelefone.value);

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}