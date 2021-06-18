const mark =[
                {
                    nombre: "mark1"
                },
                {
                    nombre: "mark2"
                },
                {
                    nombre: "mark5"
                },
                {
                    nombre: "mark6"
                },
                {
                    nombre: "mark7"
                },
                {
                    nombre: "mark16"
                },
                {
                    nombre: "mark17"
                },
                {
                    nombre: "mark21"
                },
                {
                    nombre: "mark22"
                },
                {
                    nombre: "mark31"
                },
                {
                    nombre: "mark42"
                },

            ];
var texto_html =``;
mark.forEach(element => {
    texto_html +=`
    <div class="col-md-4 col-lg-3 mx-1 mb-3 align-self-center">
    <a data-fancybox="gallery" href="fotos/trajes/${element.nombre}.jpg"><img src="fotos/trajes/miniatura/${element.nombre}.png" alt="${element.nombre}" class="img-fluid"></a>
    </div>    
    `    
});

document.getElementById("Galeria").innerHTML = texto_html;
