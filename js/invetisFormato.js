let requestURL = 'json/productos.json';

let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function() {
    const prod = request.response;
    const prodText = JSON.parse(prod);
    var text_HTML = crearListadoProduct(prodText);

    document.getElementById('Productos').innerHTML=text_HTML;
    
}

function crearListadoProduct(objJSON) {
    var texto=``;
    
    for (let index = 0; index < objJSON.listado.length; index++) {
        texto +=`
        <div class="card mb-3 color-cards">
        <div class="row no-gutters">
            <div class="col-lg-${objJSON.listado[index].medidas[0]} align-self-center">
                <div class="card-body">
                    <h2 class="card-title mb-3 titulos">${objJSON.listado[index].titulo}</h2>
                    <p class="card-text mt-2">${objJSON.listado[index].descripcion}</p>
                    <a id="prod${index}" class="btn btn-primary boton-letra color-secundario" href="${objJSON.listado[index].enlace}" role="button">
                        Consultar
                    </a>
                </div>
            </div>
            <div class="col-lg-${objJSON.listado[index].medidas[1]}">
                <a href="fotos/inventos/${objJSON.listado[index].foto}"><img src="fotos/inventos/${objJSON.listado[index].foto}" class="card-img" alt="${objJSON.listado[index].titulo}"></a>
            </div>
        </div>
        </div>
        `;
    }
    
    return texto;
}




