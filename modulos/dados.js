// modulos/dados.js

const pessoa = {
    nome: 'Jon Oliva',
    idade: 66,
    cidade: 'São Paulo'
};

const livro = {
    titulo: "O Senhor dos Anéis",
    volume: "As Duas Torres",
    ano: 1954
}

const alunos = [
    "Tanaka",
    "Victor",
    "ELiel",
    "ALine"
];

/* Se for exportação de somente UM recurso
usamos export default nomeDoRecurso */
// export default pessoa;

/* Se for exportação de VÁRIOS recursos,
use somente export { entre chaves os recursos } */
export {pessoa, livro, alunos};