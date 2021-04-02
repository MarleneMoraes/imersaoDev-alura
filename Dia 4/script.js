//listaFilmes

var filmesAnimacao = ["https://m.media-amazon.com/images/M/MV5BZWNiOTc4NGItNGY4YS00ZGNkLThkOWEtMDE2ODcxODEwNjkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_UY268_CR1,0,182,268_AL_.jpg"]

var filmesAventura = ["https://m.media-amazon.com/images/M/MV5BYTM5MDg3MGMtODAyYy00MGQ0LWJhM2MtZDFmMjAzNTFhZGRmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR4,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYTlhNzJjYzYtNGU3My00ZDI5LTgzZDUtYzllYjU1ZmU0YTgwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJlODMtMDI1MGY2ZDlhMzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var filmesAcao = ["https://m.media-amazon.com/images/M/MV5BYzBhOWU4ODAtZDYzYi00NDU1LWIzZWUtNDZmMDgxODljZTVmXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNDliY2E1MjUtNzZkOS00MzJlLTgyOGEtZDg4MTI1NzZkMTBhXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UX182_CR0,0,182,268_AL_.jpg"]

var filmesComedia = ["https://m.media-amazon.com/images/M/MV5BYzRmOTYyZDgtZWJmMy00OTI1LWExMjgtZjRmYTJiNzgwMGIwXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UY268_CR16,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BZTMyY2Q2MDctMDFlMS00MWEzLTk1NmEtNDcxNzg1ZGJlNGU5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZjgyMzFiMDgtNWNmMS00ZDEyLTkzYzgtMjMzZjk4YjhjZWUxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_UY268_CR16,0,182,268_AL_.jpg"]

var filmesDrama = ["https://m.media-amazon.com/images/M/MV5BYTY1MDhjOWQtYWFkNS00ODA1LTg1YTUtZDhmZDE0MDJlMzIwXkEyXkFqcGdeQXVyMTI4MDc0NjU2._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTQ2ZWFlNmEtNWYyYy00Yjk1LWIxMTEtMWVkM2NlMTEzOGI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNTBlZGY1OTAtN2RjMC00ZThiLWFiZmUtN2VkOGMxNmMyYjQwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var filmesSuspense = ["https://m.media-amazon.com/images/M/MV5BOWFhY2JkYmItM2U0MC00NjM5LTk4N2UtYTY2MTZmNmEzMTQyXkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_UY268_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BYjJiZmE5ZDgtYWUxZi00MWI1LTg2MmEtZmUwZGE2YzRkNTE5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTMzMTg1MjgtOWNhYy00NmZmLWExOTctMjA2OTZhZDFkNDhhXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var todos = [filmesAnimacao, filmesAventura, filmesAcao, filmesComedia, filmesDrama, filmesSuspense]

//fim listaFilmes


//interação
var button = document.querySelector('button')


button.onclick = function() {
    var resposta = document.querySelector('.resposta')
    resposta.style.opacity = '0'

    var escolha = (prompt("Escolha o número para o gênero desejado: \n 1  Animação \n 2  Aventura \n 3  Ação \n 4  Comédia \n 5  Drama \n 6  Suspense \n 7  Todos os gêneros."))

    switch (escolha){
        case '1':
            for (var i = 0; i < filmesAnimacao.length; i++){
                document.write("<img src=" + filmesAnimacao[i] + ">")
            }
                break;    
        case '2':
            for (var i = 0; i < filmesAventura.length; i++){
                document.write("<img src=" + filmesAventura[i] + ">")
            } 
                break;
        case '3':
            for (var i = 0; i < filmesAcao.length; i++){
                document.write("<div class='film'>", "<img src=" + filmesAcao[i]  + ">", "<h2>" + title [i] + "</h2>", "</div>")
            }
                break;
        case '4':
            for (var i = 0; i < filmesComedia.length; i++){
                document.write("<div class='film'>", "<img src=" + filmesComedia[i] + ">", "<h2>" + title [i] + "</h2>", "</div>")
            } 
                break;
        case '5':
            for (var i = 0; i < filmesDrama.length; i++){
                document.write("<div class='film'>", "<img src=" + filmesDrama [i]  + ">", "<h2>" + title [i] + "</h2>", "</div>")
            }    
                break;          
        case '6':
            for (var i = 0; i < filmesSuspense.length; i++){
                document.write("<div class='film'>", "<img src=" + filmesSuspense [i] + ">", "<h2>" + title [i] + "</h2>", "</div>")
            }    
                break;
        case '7':
            for (var i = 0; i < todos.length; i++){
                document.write("<div class='film'>", "<img src=" + todos [i] + ">", "<h2>" + title [i] + "</h2>", "</div>")
            }    
                break;
        default: alert("Não entendi o que você quis dizer... atualize a página para tentar novamente")
    }    
}            
//fim interação   

