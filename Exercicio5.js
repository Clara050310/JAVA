console.log(boasVindas("Endrew"));

function calculadora(num1, num2, operacao) {
  switch (operacao) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num1 / num2;

    default:
      return "Operação inválida";
  }
}

console.log(calculadora(10, 5, "+"));

console.log(calculadora(9, 3, "/"));

function mediaNotas(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;

  return media >= 7 ? "Aprovado" : "Reprovado";
}
