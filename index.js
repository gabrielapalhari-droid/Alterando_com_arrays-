//Lista materiais

let materiais = ['Caderno', 'Lápis', 'Borracha'];
materiais.push('Caneta', 'Régua');
//console.log(materiais);


//Lista nomes
let nomes = ["Ana", "Carlos", "João", "Maria"]
//console.log('A aluna', nomes[0], 'foi retirada da lista'),
nomes.shift();
//console.log(nomes);


//Lista alimentos
let alimentos = ["Arroz", "Feijão", "Macarrão", "Leite", "Açúcar", "Café"];
let comida = alimentos.slice(2, 5);
//console.log(alimentos);
//console.log(comida);


//Lista loja
let loja = ["Mouse", "Teclado", "Monitor", "Impressora"];
loja[2] = "Notebook";
//console.log(loja);

//Lista mista 
let frutas = ["Maçã", "Banana"];
let verduras = ["alface", "Cenoura"]
let combinada = frutas.concat(verduras);
//console.log(frutas);
//console.log(verduras);
//console.log(combinada);


//Lista notas
let notas = [
    [8,7,9],
    [10,6,8],
    [7,9,10]
    ]
//console.log('Primeiro aluno',notas[1]);
//console.log('Terceiro aluno',notas[2][0]);