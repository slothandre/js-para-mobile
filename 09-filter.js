import cursos from "./modulos/cursos.js";

/* filter (filtrar) 
Passa por elementos de um array (usando uma função callback) e retornar valores de acordo com uma ou mais condições gerando um novo array. */

// Exemplo 1
const vendas = [1500, 3000, 1000, 500, 750, 5000, 2000];
const meta = 1000;
console.log(vendas);

// Gerando um array com os valores que bateram a meta
const vendasAcimaDaMeta = vendas.filter( (venda) => {
    return venda >= meta
} );

console.log(vendasAcimaDaMeta);

// Exemplo 2
const alunos = [
    "Nicolas", "Eliel", "André", "Kaue", "Barbosa",
    "Aline", "Melissa", "Marina", "Mônica", "Marcelo"
];

console.log(alunos);

// Filtrando alunos que começam com "M" e terminam com "o"
// Obs.: faz diferença usar maiúsculas ou minúsculas
const resultados = alunos.filter(aluno => aluno.startsWith("M") && aluno.endsWith("o"));

console.log(resultados);

console.log("--------------------");

/* Filtrando cursos */

// Filtrando por cursos da categoria Design
const cursosDesign = cursos.filter(curso => curso.categoria === "Design");
console.log(cursosDesign);

// Filtrando por cursos que NÃO SÃO da categoria Design
const cursosMenosDesign = cursos.filter(curso => curso.categoria !== "Design");
console.log(cursosMenosDesign);