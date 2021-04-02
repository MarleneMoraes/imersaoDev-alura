//listaFilmes

var filmesAnimacao = []

var filmesAventura = ["https://m.media-amazon.com/images/M/MV5BYTM5MDg3MGMtODAyYy00MGQ0LWJhM2MtZDFmMjAzNTFhZGRmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR4,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMGJjOGJlMGYtZGFjZC00MDliLWFlMjgtZTYwNDI0ZWQ3MTAxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg,https://m.media-amazon.com/images/M/MV5BNDliY2E1MjUtNzZkOS00MzJlLTgyOGEtZDg4MTI1NzZkMTBhXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var filmesAcao = ["https://m.media-amazon.com/images/M/MV5BYzBhOWU4ODAtZDYzYi00NDU1LWIzZWUtNDZmMDgxODljZTVmXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_UX182_CR0,0,182,268_AL_.jpg",]

var filmesComedia = ["https://m.media-amazon.com/images/M/MV5BYzRmOTYyZDgtZWJmMy00OTI1LWExMjgtZjRmYTJiNzgwMGIwXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UY268_CR16,0,182,268_AL_.jpg",]

var filmesDrama = ["https://m.media-amazon.com/images/M/MV5BYTY1MDhjOWQtYWFkNS00ODA1LTg1YTUtZDhmZDE0MDJlMzIwXkEyXkFqcGdeQXVyMTI4MDc0NjU2._V1_UX182_CR0,0,182,268_AL_.jpg", ]

var filmesSuspense = ["https://m.media-amazon.com/images/M/MV5BOWFhY2JkYmItM2U0MC00NjM5LTk4N2UtYTY2MTZmNmEzMTQyXkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_UY268_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BYjJiZmE5ZDgtYWUxZi00MWI1LTg2MmEtZmUwZGE2YzRkNTE5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

//fim listaFilmes


//interação
var button = document.querySelector('button')


button.onclick = function() {
    var escolha = (prompt("Escolha o número para o gênero desejado: \n 1  Animação \n 2  Aventura \n 3  Ação \n 4  Comédia \n 5  Drama \n 6  Suspense \n 7  Todos os gêneros."))

    switch (escolha){
        case '1':
            for (var i = 0; i < listaSeries.length; i++){
                document.write("<div class='film'>", "<img src=" + filmesAnimacao + ">", "<h2>" + title [i] + "</h2>", "</div>")
            }
                break;    
        case '2':
            for (var i = 0; i < listaSeries.length; i++){
                document.write("<div class='film'>", "<img src=" + filmesAventura + ">", "<h2>" + title [i] + "</h2>", "</div>")
            } 
                break;
        case '3':
            for (var i = 0; i < listaSeries.length; i++){
                document.write("<div class='film'>", "<img src=" + filmesAcao + ">", "<h2>" + title [i] + "</h2>", "</div>")
            }
                break;
        case '4':
            for (var i = 0; i < listaSeries.length; i++){
                document.write("<div class='film'>", "<img src=" + filmesComedia + ">", "<h2>" + title [i] + "</h2>", "</div>")
            } 
                break;
        case '5':
            for (var i = 0; i < listaSeries.length; i++){
                document.write("<div class='film'>", "<img src=" + filmesDrama + ">", "<h2>" + title [i] + "</h2>", "</div>")
            }    
                break;          
        case '6':
            for (var i = 0; i < listaSeries.length; i++){
                document.write("<div class='film'>", "<img src=" + filmesSuspense + ">", "<h2>" + title [i] + "</h2>", "</div>")
            }    
                break;
        case '7':
            for (var i = 0; i < listaSeries.length; i++){
                document.write("<div class='film'>", "<img src=" + filmesAnimacao + filmesAventura + filmesAcao + filmesComedia + filmesDrama + filmesSuspense + ">", "<h2>" + title [i] + "</h2>", "</div>")
            }    
                break;
        default: alert("Não entendi o que você quis dizer... atualize a página para tentar novamente")
    }    
}            
//fim interação   

