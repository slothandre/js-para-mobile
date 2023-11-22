// modulos/funcoes.js

function converteMaiusculas(texto) {
    return texto.toUpperCase();
}

function converteMinusculas(texto) {
    return texto.toLowerCase();
}

function formataMoeda(valor) {
    return valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });
}

export {converteMaiusculas, converteMinusculas, formataMoeda};