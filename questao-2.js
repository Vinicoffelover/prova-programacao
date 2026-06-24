// Questão 2
// Nome: Vinicius Borges Oliveira
// Matrícula: 579247

function minhaIncludes(arr, valor) {
  if (!Array.isArray(arr)) return null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valor) {
      return true;
    }
  }

  return false;
}

// testes
console.log(minhaIncludes([1, 2, 3], 2)); // true
console.log(minhaIncludes([1, 2, 3], 5)); // false
console.log(minhaIncludes("erro", 2)); // null
