//Lista de filmes

var filmesAnimacao = ["https://m.media-amazon.com/images/M/MV5BZWNiOTc4NGItNGY4YS00ZGNkLThkOWEtMDE2ODcxODEwNjkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_UY268_CR1,0,182,268_AL_.jpg"]
var filmesAventura = ["https://m.media-amazon.com/images/M/MV5BYTM5MDg3MGMtODAyYy00MGQ0LWJhM2MtZDFmMjAzNTFhZGRmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR4,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYTlhNzJjYzYtNGU3My00ZDI5LTgzZDUtYzllYjU1ZmU0YTgwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJlODMtMDI1MGY2ZDlhMzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var filmesAcao = ["https://m.media-amazon.com/images/M/MV5BYzBhOWU4ODAtZDYzYi00NDU1LWIzZWUtNDZmMDgxODljZTVmXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNDliY2E1MjUtNzZkOS00MzJlLTgyOGEtZDg4MTI1NzZkMTBhXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UX182_CR0,0,182,268_AL_.jpg"]

var filmesComedia = ["https://m.media-amazon.com/images/M/MV5BYzRmOTYyZDgtZWJmMy00OTI1LWExMjgtZjRmYTJiNzgwMGIwXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UY268_CR16,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BZTMyY2Q2MDctMDFlMS00MWEzLTk1NmEtNDcxNzg1ZGJlNGU5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZjgyMzFiMDgtNWNmMS00ZDEyLTkzYzgtMjMzZjk4YjhjZWUxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_UY268_CR16,0,182,268_AL_.jpg"]

var filmesDrama = ["https://m.media-amazon.com/images/M/MV5BYTY1MDhjOWQtYWFkNS00ODA1LTg1YTUtZDhmZDE0MDJlMzIwXkEyXkFqcGdeQXVyMTI4MDc0NjU2._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTQ2ZWFlNmEtNWYyYy00Yjk1LWIxMTEtMWVkM2NlMTEzOGI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNTBlZGY1OTAtN2RjMC00ZThiLWFiZmUtN2VkOGMxNmMyYjQwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var filmesSuspense = ["https://m.media-amazon.com/images/M/MV5BOWFhY2JkYmItM2U0MC00NjM5LTk4N2UtYTY2MTZmNmEzMTQyXkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_UY268_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BYjJiZmE5ZDgtYWUxZi00MWI1LTg2MmEtZmUwZGE2YzRkNTE5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTMzMTg1MjgtOWNhYy00NmZmLWExOTctMjA2OTZhZDFkNDhhXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UX182_CR0,0,182,268_AL_.jpg"]

//fim Lista de filmes

//Lista de títulos

var tituloAnimacao = ["Raya e o Último Dragão", "Soul", "Death Note"]

var tituloAventura = ["Cidade Invisível", "Mulher Maravilha 84", "The Witcher"]

var tituloAcao = ["Power", "Mulan", "Tenet"]

var tituloComedia = ["Cabras da Peste", "Um Príncipe em Nova York 2", "Sex Education"]

var tituloDrama = ["Expresso do Amanhã", "Ginny e Georgia", "A Voz Suprema do Blues"]

var tituloSuspense = ["M-8: Quando a Morte Socorre a Vida", "Wanda Vision", "Ava"]

//fim Lista de títulos

//Interação

var escolha = prompt("Na Aluraflix, seu catálogo é personalizado! \n Selecione o gênero desejado pelo número que você deseja que iremos te indicar alguns filmes e séries: \n 1  Animação \n 2  Aventura \n 3  Ação \n 4  Comédia \n 5  Drama \n 6  Suspense \n  7 Todos os gêneros.")
  

if (escolha==1) {
  document.write("<h2>" + "Animação" + "</h2>", "<div class='row'>")
  for (var i = 0; i < filmesAnimacao.length; i++){
  document.write("<div class='filme'>", "<img src=" + filmesAnimacao [i] + ">", "<p>" + tituloAnimacao [i] + "</p>", "</div>")}
  document.write("</div>")
} else if (escolha==2){
  document.write("<h2>" + "Aventura" + "</h2>","<div class='row'>")  
  for (var i = 0; i < filmesAventura.length; i++){
  document.write("<div class='filme'>", "<img src=" + filmesAventura [i] + ">",  "<p>" + tituloAventura [i] + "</p>", "</div>")}
  document.write("</div>")
}else if (escolha==3){
  document.write("<h2>" + "Ação" + "</h2>","<div class='row'>")  
    for (var i = 0; i < filmesAcao.length; i++){
  document.write("<div class='filme'>", "<img src=" + filmesAcao [i] + ">",  "<p>" + tituloAcao [i] + "</p>", "</div>")}
  document.write("</div>")
}else if (escolha==4){
  document.write("<h2>" + "Comédia" + "</h2>","<div class='row'>")  
    for (var i = 0; i < filmesComedia.length; i++){
  document.write("<div class='filme'>", "<img src=" + filmesComedia [i] + ">",  "<p>" + tituloComedia [i] + "</p>", "</div>")}
  document.write("</div>")
}else if (escolha==5){
  document.write("<h2>" + "Drama" + "</h2>","<div class='row'>")  
    for (var i = 0; i < filmesDrama.length; i++){
  document.write("<div class='filme'>", "<img src=" + filmesDrama [i] + ">",  "<p>" + tituloDrama [i] + "</p>", "</div>")}
  document.write("</div>")
}else if (escolha==6){
  document.write("<h2>" + "Suspense" + "</h2>","<div class='row'>")  
    for (var i = 0; i < filmesSuspense.length; i++){
  document.write("<div class='filme'>", "<img src=" + filmesSuspense [i] + ">",  "<p>" + tituloSuspense [i] + "</p>", "</div>")}
  document.write("</div>")
}else if (escolha==7){
  document.write("<h2>" + "Todos os gêneros" + "</h2>","<div class='row'>")  
   for (var i = 0; i < filmesAnimacao.length; i++){
  document.write("<div class='filmes'>", "<img src=" + filmesAnimacao [i] + ">", "<p>" + tituloAnimacao [i] + "</p>", "</div>")}
  for (var i = 0; i < filmesAventura.length; i++){
  document.write("<div class='filmes'>", "<img src=" + filmesAventura [i] + ">",  "<p>" + tituloAventura [i] + "</p>", "</div>")}
  for (var i = 0; i < filmesAcao.length; i++){
  document.write("<div class='filmes'>", "<img src=" + filmesAcao [i] + ">",  "<p>" + tituloAcao [i] + "</p>", "</div>")}
  for (var i = 0; i < filmesComedia.length; i++){
   document.write("<div class='filmes'>", "<img src=" + filmesComedia [i] + ">",  "<p>" + tituloComedia [i] + "</p>", "</div>")}
  for (var i = 0; i < filmesDrama.length; i++){
  document.write("<div class='filmes'>", "<img src=" + filmesDrama [i] + ">",  "<p>" + tituloDrama [i] + "</p>", "</div>")}
  for (var i = 0; i < filmesSuspense.length; i++){
  document.write("<div class='filmes'>", "<img src=" + filmesSuspense [i] + ">",  "<p>" + tituloSuspense [i] + "</p>", "</div>")}
  document.write("</div>")}  

  //fim Interação