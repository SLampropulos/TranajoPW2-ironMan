var text_footer = `
<div class="container">

<!--REDES-->
<div class="col text-center justify-content-between">
    <div class="col mb-5">
        <a href="index.html"><img src="fotos/logo-blanco.png" width="156" height="25" alt="logo" loading="lazy"></a>
    </div>
    <div class="col">
        <p>Mantenete informado! <br></p>
        <p>Deajanos tu mail y para saber las novedades: </p>
        <form class="form-inline justify-content-center">
            <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only">Mail</label>
                <input type="email" class="form-control" id="inputMail" placeholder="nombre@mail.com">
            </div>
            <button type="button" class="btn btn-primary boton-letra color-secundario mb-2" data-toggle="modal" data-target="#mailEnviadoMobal">Enviar</button>
        </form>
    </div>
    <div class="col justify-content-between p-x-5">

        <ul class="nav flex-row justify-content-center">
            <li class="nav-item mx-2">
                <a class="btn btn-primary boton-letra color-secundario" href="https://www.facebook.com/MarvelLatinoamerica" role="button" target="_blank">
                    <span class="icon-facebook"></span>
                </a>
            </li>
            <li class="nav-item mx-2">
                <a class="btn btn-primary boton-letra color-secundario" href="https://www.instagram.com/marvel/?hl=es-la" role="button" target="_blank">
                    <span class="icon-logotipo-de-instagram"></span>
                </a>
            </li>
            <li class="nav-item mx-2">
                <a class="btn btn-primary boton-letra color-secundario" href="https://twitter.com/MarvelLATAM" role="button" target="_blank">
                    <span class="icon-gorjeo"></span>
                </a>
            </li>
        </ul>

    </div>
</div>

<!--REDES-->
</div>
`;


const footer = document.getElementById('Footer');
footer.className += "bg-dark text-white py-5";
footer.innerHTML = text_footer;
