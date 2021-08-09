let requestPublicacion = new XMLHttpRequest();
requestPublicacion.open('GET', "JSON/publicacionIndex.json");
requestPublicacion.responseType = 'text';
requestPublicacion.send();


requestPublicacion.onload = function() {
    const textPublic = JSON.parse(requestPublicacion.response);

    setPublicacion(textPublic);

}


function setPublicacion(textPublic) {
    var puntero = document.getElementById("publicacion");
    
    var textHTML = ``;
    for(var i=0;i<2;i++) {
        textHTML += `
        <hr class="featurette-divider">
        <div class="card mb-3 color-cards">
            <div class="row no-gutters">
                <div class="col-md-8 align-self-center">
                    <div class="card-body">
                        <h2 class="card-title mb-5 titulos">${textPublic[i].titulo}</h2>
                        <p class="card-text mt-5">${textPublic[i].descripcion}</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <img src="fotos/${textPublic[i].imagenSRC}" class="card-img" alt="">
                </div>
            </div>
        </div>
        `;
    }

    textHTML +=`
    <hr class="featurette-divider">

    <div class="card mb-3 color-cards">
        <div class="row no-gutters">
            <div class="col-md-8 align-self-center">
                <div class="card-body">
                    <h2 class="card-title mb-0 titulos">Donde estamos</h2>
                    <p class="card-text">
                        <spam class="subtitulos">Ubicacion de la torre Stark en la ciudad de Nueva York.</spam>
                        <br><br>
                        Para el ingreso se debe solicitar un reserva de 1 mes previo. Las insatalaciones tambien estan abirtas a las instituciones educatibas para dar guias educatibas.
                    </p>
                </div>
            </div>
            <div class="col-md-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38953.22791887109!2d-74.01776301869155!3d40.731269307231905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25990e23d7e8d%3A0xfa615edfd1b67e18!2sWashington%20Square%20Park!5e0!3m2!1ses!2sar!4v1606493620954!5m2!1ses!2sar" width="500" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" class="card-img"></iframe>
            </div>
        </div>
    </div>
    `;

    puntero.innerHTML = textHTML;
}