let requestCarrusel = new XMLHttpRequest();
requestCarrusel.open('GET', "JSON/carruselIndex.json");
requestCarrusel.responseType = 'text';
requestCarrusel.send();

requestCarrusel.onload = function() {
    const textCarrusel = JSON.parse(requestCarrusel.response);

    var puntero = document.getElementById("carouselExampleCaptions");
    setIndicadores(puntero);
    setCarrusel(puntero,textCarrusel);
}

function setIndicadores(puntero) {
    var lista = document.createElement("ol");
    lista.setAttribute("class","carousel-indicators");

    for (var i = 0; i <3;i++){
        var item = document.createElement("li");
        item.setAttribute("data-target","#carouselExampleCaptions");
        item.setAttribute("data-slide-to",i);
        if(i == 0) item.setAttribute("class","active");
        lista.appendChild(item);
    }
    puntero.appendChild(lista);
}

function setCarrusel(puntero,textCarrusel) {
    var carrusel = document.createElement("div");
    carrusel.setAttribute("class","carousel-inner");
    var primero = true;
    textCarrusel.forEach(element => {
        let seccion = document.createElement("div");
        seccion.setAttribute("class","carousel-item");
        if(primero){
            seccion.setAttribute("class",seccion.getAttribute("class")+" active");
            primero = false;
        }
        
        let imagen = document.createElement("img");
        imagen.setAttribute("src",element.direccionImagen);
        imagen.setAttribute("class","d-block w-100");
        imagen.setAttribute("alt",element.imagenAlt)

        let texto = document.createElement("div");
        texto.setAttribute("class","carousel-caption d-none d-md-block");
        let titulo = document.createElement("h5");
        titulo.innerHTML = `${element.titulo}`;
        let parrafo = document.createElement("p");
        parrafo.innerHTML = `${element.parrafo}`;

        texto.appendChild(titulo);
        texto.appendChild(parrafo);

        seccion.appendChild(imagen);
        seccion.appendChild(texto);

        carrusel.appendChild(seccion);
        
    });

    puntero.appendChild(carrusel);
}
