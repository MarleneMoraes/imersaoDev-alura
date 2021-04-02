var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BYTM5MDg3MGMtODAyYy00MGQ0LWJhM2MtZDFmMjAzNTFhZGRmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR4,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BOWFhY2JkYmItM2U0MC00NjM5LTk4N2UtYTY2MTZmNmEzMTQyXkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_UY268_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYzBhOWU4ODAtZDYzYi00NDU1LWIzZWUtNDZmMDgxODljZTVmXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_UX182_CR0,0,182,268_AL_.jpg"]

for (var i=0; i < listaFilmes.length; i++){
    document.write("<img src=" + listaFilmes[i] + ">")
}