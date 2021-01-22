//foreach
//map
//filter
//find
//every
//some
//reduce

let nomes = ['andressa', 'miki'];
nomes.forEach(function(nome){
    console.log(nome);
});


let numeros = [1 , 1, 2, 3, 5, 8, 13];

let dobro = numeros.map(function(numero){
    return numero*2;
});

let alunos = [
    {   nome : 'Jose',
        idade : 16
    },
    {   nome : 'Andressa',
        idade : 18
    },
    {   
        nome : 'Maria',
        idade : 30
    },{   
        nome : 'Andressa',
        idade : 12
    }];

let alunosMaiores = alunos.filter(function(aluno){
    return aluno.idade >= 18;
});

let maria = alunos.find(function(aluno){
    aluno.nome === 'Maria';
});

let alunosMaioresBoolean = alunos.every(function(aluno){
    return alunos.idade > 18
});

let pesoDasMalasBoolean = [12, 32, 21, 29];
let temMalaAcimaDoPeso = pesoDasMalas.some(function(peso){
    return peso > 30;
});

let soma  = 0;
soma = numeros.reduce(function(soma,numero){
    return soma + numero;
} , 0);