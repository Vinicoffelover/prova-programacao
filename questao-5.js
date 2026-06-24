// Questão 5
// Nome: Vinicius Borges Oliveira
// Matrícula: 579247

function destacarTexto(texto, termo) {
  if (typeof texto !== "string" || typeof termo !== "string") {
    return null;
  }

  return texto.split(termo).join(`<mark>${termo}</mark>`);
}

// testes
console.log(destacarTexto("eu gosto de programar", "programar"));
// eu gosto de <mark>programar</mark>
