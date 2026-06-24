// Questão 4
// Nome: Vinicius Borges Oliveira
// Matrícula: 579247

function produtoMatriz(matriz) {
  if (!Array.isArray(matriz)) return null;

  let produto = 1;

  for (let i = 0; i < matriz.length; i++) {
    if (!Array.isArray(matriz[i])) return null;

    for (let j = 0; j < matriz[i].length; j++) {
      if (typeof matriz[i][j] !== "number") return null;

      produto *= matriz[i][j];
    }
  }

  return produto;
}

// testes
console.log(produtoMatriz([[1, 2], [3, 4]])); // 24
console.log(produtoMatriz([[1, 2], ["a", 4]])); // null
