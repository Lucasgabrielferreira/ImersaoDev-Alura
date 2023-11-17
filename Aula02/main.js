var numeroSecreto = Math.floor(Math.random() * 1000) + 1;
var tentativasMaximas = 10; // Defina o limite de tentativas
var chute;
var tentativas = 0;

do {
  chute = prompt("Digite um número entre 1 e 1000. Tentativas restantes: " + (tentativasMaximas - tentativas));

  if (chute === null) {
    alert("Jogo cancelado. O número secreto era: " + numeroSecreto);
    break;
  }

  chute = parseInt(chute);

  if (isNaN(chute)) {
    alert("Por favor, digite um número válido entre 1 e 1000!");
  } else {
    tentativas++;

    if (chute === numeroSecreto) {
      alert("Acertou! Você tentou " + tentativas + " vezes.");
    } else if (tentativas === tentativasMaximas) {
      alert("Suas tentativas acabaram! O número secreto era: " + numeroSecreto);
    } else if (chute > numeroSecreto) {
      alert("Errou! O número secreto é menor.");
    } else if (chute < numeroSecreto) {
      alert("Errou! O número secreto é maior.");
    }
  }
} while (chute !== numeroSecreto && tentativas < tentativasMaximas);
