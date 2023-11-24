// 10-reduce.js
import cursos from "./modulos/cursos.js";

/* reduce (reduzir, redução)
Passa por elementos de um array (usando uma função
callback com parâmetros, e um parâmetro com valor inicial)
e retorna um único valor/resultado. Pode ser útil para operações
matemáticas que geram um único resultado */

// Exemplo 1
const valores = [10, 5, 50, 200, 1000];
const total = valores.reduce((acumulador, valor) => {
    return acumulador + valor;
}, 0);

console.log(valores);
console.log(total);

// Sem reduce
let acumuladora1 = 0;
for(let i = 0; i < valores.length; i++) {
    acumuladora1 += valores[i];    
};
console.log(acumuladora1);

// Sem reduce e com for/of
let acumuladora2 = 0;
for(let valor of valores) {
    acumuladora2 += valor;
}
console.log(acumuladora2);

console.log("--------------");
console.log(cursos);

/* Exercício: faça a soma dos preços de todos os cursos */
const somaPrecos = cursos.reduce((acumulador, curso) => {
    return acumulador + curso.preco;
}, 0);
console.log(`A soma do valor de todos os cursos é ${somaPrecos}`);

/* Desafio: faça a soma dos preços dos cursos de Front e Back-End */
const somaPrecosFB = cursos
                        .filter(curso => curso.categoria === "Front-End" || curso.categoria === "Back-End")
                        .reduce((acumulador, curso) => (acumulador + curso.preco), 0)
console.log(`A soma do valor dos cursos de Front e Back-End é ${somaPrecosFB}`);