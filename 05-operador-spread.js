// 05-operador-spread.js

/* ...spread -> espalhar
Copiar elementos/dados de um array/objeto
para dentro de outro array/objeto */

const bandas = ["Pink Floyd", "Rush", "Yes"];
const maisBandas = [...bandas, "Slayer", "Nightwish"];

console.log(bandas);
console.log(maisBandas);
console.log(maisBandas[0]);

// Spread com objetos
const cliente = {
    nome: "Seu Madruga",
    cidade: "São Paulo",
    idade: 55
};

const novosDados = {
    ...cliente, // Copiando as props. do cliente pra cá
    estado: "SP",
    pedido: "123xyz",
    total: 5000.88,
    idade: 60 // sobreescrevendo valores de propriedades
};

console.log(novosDados);