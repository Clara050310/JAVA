// Passo 1: Pedir ao usuário um número
process.stdout.write("Digite um número: ");

// Usando process.stdin para capturar a entrada do usuário
process.stdin.on("data", function (data) {
  // Convertendo o valor recebido para um número inteiro
  let numero = parseInt(data.toString().trim());

  // Passo 2: Verificar se o número é par ou ímpar
  if (numero % 2 === 0) {
    // Passo 3: Exibir o resultado
    console.log("O número " + numero + " é par");
  } else {
    console.log("O número " + numero + " é ímpar");
  }

  // Fechar o processo stdin após a captura da entrada
  process.stdin.pause();
});
