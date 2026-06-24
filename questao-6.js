// Questão 6
// Nome: Vinicius Borges Oliveira
// Matrícula: 579247

function minhaFlat(arr) {
  if (!Array.isArray(arr)) return null;

  let resultado = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      resultado = resultado.concat(minhaFlat(item));
    } else {
      resultado.push(item);
    }
  }

  return resultado;
}

// testes
console.log(minhaFlat([1,[2,[3,4],5],6])); // [1,2,3,4,5,6]
console.log(minhaFlat("teste")); // null
