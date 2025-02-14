let idadeUsuario = Number(prompt("Digite sua idade:"));

if (idadeUsuario < 16) {
  console.log("Não pode votar.");
} else if (idadeUsuario >= 16 && idadeUsuario < 18) {
  console.log("Voto opcional.");
} else {
  console.log("Voto obrigatório e pode tirar CNH.");
}
