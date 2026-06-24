// Questão 1 - minhaSlice
// Nome: Vinicius Borges Oliveira
// Matrícula: 579247

function minhaSlice(arr, inicio, fim) {
  // validar se é array
  if (!Array.isArray(arr)) return [];

  // verificar se todos são números
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return [];
    }
  }

  let resultado = [];

  for (let i = inicio; i < fim; i++) {
    resultado.push(arr[i]);
  }

  return resultado;
}

// testes
console.log(minhaSlice([1, 2, 3, 4, 5], 0, 2)); // [1,2]
console.log(minhaSlice([1, "a", 3], 0, 2)); // []