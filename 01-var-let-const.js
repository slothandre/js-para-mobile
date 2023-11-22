// 01-var-let-const.js

var idade = 18; // ESCOPO GLOBAL
if( idade >= 18){
    // let mensagem = "É adulto!"; // ESCOPO DE BLOCO
} else {
    // let mensagem = "É menor"; // ESCOPO DE BLOCO
}

console.log(idade);

/* Dará erro pois mensagem só existe dentro
do bloco if/else */
// console.log(mensagem);

const meuNome = "Tiago";
console.log(meuNome);

// Reatribuição NÃO É possível em constantes
// meuNome = "Tiago B. dos Santos";
console.log(meuNome);

// Constantes sempre são declaradas com algum valor
// E este valor NÃO PODE SER modificado
const escola = "Senac";
