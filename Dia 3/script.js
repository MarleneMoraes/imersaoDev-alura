var chute
var resposta = parseInt(Math.random()*10)
var tentativas = 3


var button = document.querySelector('button');

button.onclick = function() {
  while (tentativas){
    var chute = parseInt (prompt ("Digite um número de 0 a 10"))
    if (chute == resposta){
      alert ("Acertou! Você é um mentalista!")
      break
    } else if (chute > resposta){
      alert ("Olha... Vou te dar uma dica: o numero é menor.")
    } else if (chute < resposta){
      alert ("Olha... Vou te dar uma dica: o numero é maior.")
    }
    tentativas = tentativas - 1
  }

  if (chute != resposta){
    alert ("Sinto muito... mas acabaram suas tentativas :(")
  }
}
