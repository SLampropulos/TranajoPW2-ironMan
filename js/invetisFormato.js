let requestURL = 'JSON/productos.json';

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
    
    for (let i = 0; i <objJSON.listado.length; i++) {
        texto +=`
        <div class="card mb-3 color-cards">
        <div class="row no-gutters">
            <div class="col-lg-${objJSON.listado[i].medidas[0]} align-self-center">
                <div class="card-body">
                    <h2 class="card-title mb-3 titulos">${objJSON.listado[i].titulo}</h2>
                    <p class="card-text mt-2">${objJSON.listado[i].descripcion}</p>
                    <a id="prod${i}" class="btn btn-primary boton-letra color-secundario" href="${objJSON.listado[i].enlace}" role="button">
                        Consultar
                    </a>
                </div>
            </div>
            <div class="col-lg-${objJSON.listado[i].medidas[1]}">
                <a href="fotos/inventos/${objJSON.listado[i].foto}"><img src="fotos/inventos/${objJSON.listado[i].foto}" class="card-img" alt="${objJSON.listado[index].titulo}"></a>
            </div>
        </div>
        </div>
        `;
    }
    
    return texto;
}




