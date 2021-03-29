var button1 = document.querySelector('.button1');
var button2 = document.querySelector('.button2');
var button3 = document.querySelector('.button3');


// BOTÃO 1
button1.addEventListener('click', function(e) {
  e.preventDefault();
  // Obtem o valor digitado.
  var valorDigitado = document.querySelector('.resultado1').value;

  var resposta = document.querySelector('.resposta1');
  resposta.style.opacity = '1';

  // Tranforma o valor digitado em letra minúscula.
  valorDigitado = valorDigitado.toLowerCase();
  
  if (valorDigitado === 'marill') {
    resposta.innerHTML = 'Acertou!'
  } else {
    resposta.innerHTML = 'Errou'
  }
});


// BOTÃO 2
button2.addEventListener('click', function(e) {
  e.preventDefault();
  // Obtem o valor digitado.
  var valorDigitado = document.querySelector('.resultado2').value;

  var resposta = document.querySelector('.resposta2');
  resposta.style.opacity = '1';

  // Tranforma o valor digitado em letra minúscula.
  valorDigitado = valorDigitado.toLowerCase();
  
  if (valorDigitado === 'piplup') {
    resposta.innerHTML = 'Acertou!'
  } else {
    resposta.innerHTML = 'Errou'
  }
});


// BOTÃO 3
button3.addEventListener('click', function(e) {
  e.preventDefault();
  // Obtem o valor digitado.
  var valorDigitado = document.querySelector('.resultado3').value;

  var resposta = document.querySelector('.resposta3');
  resposta.style.opacity = '1';

  // Tranforma o valor digitado em letra minúscula.
  valorDigitado = valorDigitado.toLowerCase();
  
  if (valorDigitado === 'poliwag') {
    resposta.innerHTML = 'Acertou!'
  } else {
    resposta.innerHTML = 'Errou'
  }
});