const express = require('express')
const app = express()

const estudantes = [
    {id: 1, nome: "Joao Paz", idade: 16, materiaFav: "Desenvolvimento web"},
    {id: 2, nome: "Matheus Luciano", idade: 16, materiaFav: "Física"},
    {id: 3, nome: "Renan Aprigio", idade: 17, materiaFav: "Química"},
    {id: 4, nome: "João Guilherme", idade: 17, materiaFav: "Matemática"},
    {id: 5, nome: "Artur Tomé", idade: 17, materiaFav: "Português"},
    {id: 6, nome: "Davi Gleristone", idade: 17, materiaFav: "Programação"},
    {id: 7, nome: "Pedro Henrique", idade: 17, materiaFav: "A de Amanda"},
    {id: 8, nome: "Amanda tacielly", idade: 17, materiaFav: "Geografia"},
    {id: 9, nome: "Rômulo siqueira", idade: 16, materiaFav: "Biologia"},
    {id: 10, nome: "Matheus Henrique", idade: 17, materiaFav: "Inglês"},
    {id: 11, nome: "Arthur Marcelino", idade: 17, materiaFav: "Sociologia"},
    {id: 12, nome: "Juan Vila Nova Rojas Moreno", idade: 17, materiaFav: "Ed. Física"} 
];

app.get('/', (req,res) =>{
    res.send('Busque pelos alunos usando http://localhost:3000/estudante/(insira o id)')
});

app.get('/estudante/:id', (req,res) =>{
    let id= req.params.id;
    let estudante = estudantes[id - 1];
    if (estudante) {
        res.send('Nome: ' + estudante.nome + '<br>' + 'Idade: ' + estudante.idade + '<br>' + 'Matéria Favorita : ' + estudante.materiaFav) ;   
    }else {
        res.send('Não foi encontrado o estudante com o ID: ' +id)
    }
    
})

app.listen(3000, () => {
    console.log ("Servidor em execução...")
})
