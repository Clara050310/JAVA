for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let numeroTabuada = Number(prompt("Digite um número para a tabuada:"));

for (let i = 1; i <= 10; i++) {
  console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
}

let contagem = 10;

while (contagem >= 1) {
  console.log(contagem);

  contagem--;
}

console.log("Feliz Ano Novo!");

function boasVindas(nome) {
  return `Olá, ${nome}! Seja bem-vindo(a)!`;
}
