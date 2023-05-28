// Criando a matriz

let matriz = new Array(4);

// Preenchendo a matriz com os múltiplos

for(let i = 0; i < 4; i++) {

 matriz[i] = new Array(5);

 for(let j = 0; j < 5; j++) {

   matriz[i][j] = (i + 2) * (j + 1);

 }

}

// Imprimindo a matriz

console.table(matriz);