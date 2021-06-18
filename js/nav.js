var texto_nav_html = `    

<div class="container">
    <button class="navbar-toggler color-secundario" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="index.html">
        <div class="d-none d-lg-block">
            <img src="fotos/logo.png" width="373" height="60" alt="" loading="lazy">
        </div>
        <div class="d-lg-none">
            <img src="fotos/logo.png" width="156" height="25" alt="" loading="lazy">
        </div>
    </a>
    <div class="d-lg-none"></div>
    <div class="collapse navbar-collapse " id="navbarResponsive">
        <!-- DESPLEGUE DEL MENU -->
        <ul class="navbar-nav ml-auto">
            <li>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="Busacar" placeholder="Buscar" aria-label="Buscar">
                    <button class="btn color-secundario my-2 my-sm-0" type="button" data-toggle="modal" data-target="#errorModal">
                        <!--type="submit" para la busqueda como es un error le pongo button--><span class="icon-buscar"></span>
                    </button>
                </form>
            </li>
`;
var texto_nav_html_final =`
        </ul>
    </div>
</div>
`;
// hacer forEach para la lista

var ventanas=[
                {
                    nombre: "Inicio",
                    ventana_id: "Nav_inicio",
                    direccion: "index.html",
                    icono:"icon-home",
                    titulo:"Stark Industries"
                },
                {
                    nombre: "Nosotros",
                    ventana_id: "Nav_nosotros",
                    direccion: "nosotros.html",
                    icono:"icon-sobre-nosotros",
                    titulo:"Nosotros"
                },
                {
                    nombre: "Investigacion",
                    ventana_id: "Nav_investigacion",
                    direccion: "investigaciones.html",
                    icono:"icon-lab",
                    titulo:"Investigacion"
                },
                {
                    nombre: "Iron Man",
                    ventana_id: "Nav_ironMan",
                    direccion: "ironMan.html",
                    icono:"icon-vengadores",
                    titulo:"Iron Man"
                },
                {
                    nombre: "Becas",
                    ventana_id: "Nav_becas",
                    direccion: "becas.html",
                    icono:"icon-beca",
                    titulo:"Becas"
                },
                {
                    nombre: "Contactanos",
                    ventana_id: "Nav_contactanos",
                    direccion: "contactanos.html",
                    icono:"icon-email",
                    titulo:"Contactanos"
                }
];

ventanas.forEach(element => {
    texto_nav_html += ` 
    <li id="${element.ventana_id}" class="nav-item font-weight-bold">
    <a class="nav-link" href="${element.direccion}"><span class="${element.icono} mr-3"></span>${element.nombre}<span class="sr-only">(current)</span></a>
    </li>

    `    
});

texto_nav_html += texto_nav_html_final;

const nav = document.getElementById("Nav");
nav.className += "navbar navbar-light  sticky-top color-principal";
nav.innerHTML=texto_nav_html;


//pongo el active para resaltar en la pagina que esta actualmente el usuario del

class Actual {
    actual = "";


    asignarActual(){
        for(let i=0; i<ventanas.length; i++){
            if(document.title == ventanas[i].titulo){
                this.actual = ventanas[i].ventana_id;
            }
        }
        const elegido = document.getElementById(this.actual);
        elegido.className += " active";
        console.log(elegido.className);
    }

}

const senialador = new Actual();
senialador.asignarActual();

