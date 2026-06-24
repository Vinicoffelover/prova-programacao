// Questão 3
// Nome: Vinicius Borges Oliveira
// Matrícula: 579247

function intersecao(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return null;
  }

  let resultado = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !resultado.includes(arr1[i])) {
        resultado.push(arr1[i]);
      }
    }
  }

  return resultado;
}

// testes
console.log(intersecao([1, 2, 3], [2, 3, 4])); // [2,3]
console.log(intersecao([1, 2], "erro")); // null
