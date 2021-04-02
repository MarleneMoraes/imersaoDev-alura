//listaFilmes

var filmesAnimacao = []

var filmesAventura = []

var filmesAcao = []

var filmesComedia = []

var filmesRomance = []

var filmesSuspense = []

//fim listaFilmes


//interação
var button = document.querySelector('button');


button.onclick = function() {
    var escolha = (prompt("Escolha 1 para Animação, 2 para Aventura, 3 para Ação, 4 para Comédia, 5 para Romance, 6 para Suspense, 7 para Todos os gêneros."))

    switch (escolha){
        case 1:
            for (var i = 0; i < listaSeries.length; i++){
                document.write("<div class='film'>", "<img src=" + filmesAnimacao + ">", "<h2>" + title [i] + "</h2>", "</div>")
                break;    
        case 2:
            for (var i = 0; i < listaSeries.length; i++){
                document.write("<div class='film'>", "<img src=" + filmesAventura + ">", "<h2>" + title [i] + "</h2>", "</div>")
                break;
        case 3:
            for (var i = 0; i < listaSeries.length; i++){
                document.write("<div class='film'>", "<img src=" + filmesAcao + ">", "<h2>" + title [i] + "</h2>", "</div>")
                break;
        case 4:
            for (var i = 0; i < listaSeries.length; i++){
                document.write("<div class='film'>", "<img src=" + filmesComedia + ">", "<h2>" + title [i] + "</h2>", "</div>")
                break;

        case 5:
            for (var i = 0; i < listaSeries.length; i++){
                document.write("<div class='film'>", "<img src=" + filmesRomance + ">", "<h2>" + title [i] + "</h2>", "</div>")
                        break;          
        case 6:
            for (var i = 0; i < listaSeries.length; i++){
                document.write("<div class='film'>", "<img src=" + filmesSuspense + ">", "<h2>" + title [i] + "</h2>", "</div>")
                break;
        case 7:
            for (var i = 0; i < listaSeries.length; i++){
                document.write("<div class='film'>", "<img src=" + filmesAnimacao + filmesAventura + filmesAcao + filmesComedia + filmesRomance + filmesSuspense + ">", "<h2>" + title [i] + "</h2>", "</div>")
                break;
        default: alert("Não entendi o que você quis dizer... atualize a página para tentar novamente")
    }    
}            
//fim interação   

