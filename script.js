const form = document.getElementById('form');
const produtosTable = document.querySelector('#produtos tbody');
const novoProdutoBtn = document.getElementById('novoProduto');

form.addEventListener('submit', function(event) {
event.preventDefault();

const nome = document.getElementById('produto').value;
const descricao = document.getElementById('descricao').value;
const valor = document.getElementById('valor').value;
const disponivel = document.getElementById('disponivel').value;

const newRow = produtosTable.insertRow();
const cell1 = newRow.insertCell(0);
const cell2 = newRow.insertCell(1);

cell1.innerHTML = nome;
cell2.innerHTML = valor;

form.reset();

produtosTable.innerHTML = [...produtosTable.rows].sort((a, b) => a.cells[1].innerHTML - b.cells[1].innerHTML).map(row => row.outerHTML).join('');

});

novoProdutoBtn.addEventListener('click', function() {
produtosTable.innerHTML = '';
});
