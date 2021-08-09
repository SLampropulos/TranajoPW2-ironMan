let requestURL = 'JSON/mail.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();


request.onload = function() {
    
    const mail = request.response;
    const textMail = JSON.parse(mail);
                
    var pedido =  {
        Nombre : "",
        Apellido:"",
        Mail : "",
        fechaEntrega : "",
        cantProduto : 0,
        Direccion : "",
        Provincia : "",
        Ciudad : "",
        CodigoPostal : "",
        texto : "",
        producto : ""
              };


  var args = location.search.substr(1).split('&');
  
  for (var i = 0; i < args.length; ++i) {
    var parts = args[i].split('=');
    if (parts != null) {
      pedido[parts[0]]=parts[1];
      if (parts[1] == null) {
        pedido[parts[0]] = "-";
      }
      else {
        pedido[parts[0]] = unescape(parts[1].replace(/\+/g, ' '));
      }

    }
  };
  location.assign(`mailto:${textMail['mail']}?subject=${textMail['asunto']}&body=${pedido.texto}`);


  var miJSON = JSON.stringify(pedido);
  localStorage.setItem('pedido', miJSON); 
  agregarFuncionBoton(pedido);
  }

function agregarFuncionBoton(objJOSN){
    document.getElementById("boton").addEventListener("click",()=>{mostrarPedido(objJOSN)});
}

function mostrarPedido(objJOSN){
    let boton = document.getElementById("boton");
    let contenedor = document.getElementById("InfoPedido");
    contenedor.innerHTML = `
    <div class="row no-gutters justify-content-between text-center p-3">
    <div class="col-lg-4">
        <h3>Comprador</h3>
        
        <ul class="list-group-flush ml-auto p-2 text-left">
            <li class="list-group-item color-cards">Nombre: ${objJOSN.Nombre}</li>
            <li class="list-group-item color-cards">Apellido: ${objJOSN.Apellido}</li>
            <li class="list-group-item color-cards">Mail: ${objJOSN.Mail}</li>
        </ul>
    </div>
    <div class="col-lg-4">
        <h3>Direccion</h3>
        <ul class="list-group-flush ml-auto p-2 text-left">
            <li class="list-group-item color-cards">Direccion: ${objJOSN.Direccion}</li>
            <li class="list-group-item color-cards">Provincia: ${objJOSN.Provincia}</li>
            <li class="list-group-item color-cards">Ciudad: ${objJOSN.Ciudad}</li>
            <li class="list-group-item color-cards">Codigo postal: ${objJOSN.CodigoPostal}</li>
        </ul>
    </div>      
    <div class="col-lg-4">
        <h3>Pedido</h3>
        <ul class="list-group-flush ml-auto p-2 text-left">
            <li class="list-group-item color-cards">Producto: ${objJOSN.producto}</li>
            <li class="list-group-item color-cards">Cantidad: ${objJOSN.cantProduto}</li>
            <li class="list-group-item color-cards">Fecha de entrega: ${objJOSN.fechaEntrega}</li>
        </ul>
    </div>  
    
    </div>

    `;
    contenedor.className = "card mb-3 color-cards";

    boton.innerHTML="Ocultar informacion";
    boton.addEventListener("click",()=>{
        ocultarPedido(boton,contenedor,objJOSN);
    });
}

function ocultarPedido(boton,contenedor,obj){
    boton.innerHTML = "Ver informacion de envio";
    contenedor.innerHTML = ``;
    contenedor.className = "";
    boton.addEventListener("click",()=>{
        mostrarPedido(obj);
    });
}
