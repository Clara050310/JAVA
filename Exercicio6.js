console.log(mediaNotas(8, 7, 6));

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let tentativa = Number(prompt("Adivinhe um número entre 1 e 10:"));

console.log(
  tentativa === numeroAleatorio
    ? "Você acertou!"
    : `Errou! O número era ${numeroAleatorio}`
);

let pesoUsuario = Number(prompt("Digite seu peso (kg):"));

let alturaUsuario = Number(prompt("Digite sua altura (m):"));

let imc = pesoUsuario / (alturaUsuario * alturaUsuario);

console.log(`Seu IMC é ${imc.toFixed(2)}`);

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc < 24.9) {
  console.log("Peso normal");
} else if (imc < 29.9) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}
