
var args = location.search.substr(1).split('&');
          
agregarFuncionBoton(args);

function agregarFuncionBoton(arreglo){
    document.getElementById("boton").addEventListener("click",()=>{mostrarPedido(arreglo)});
    
}

function mostrarPedido(arreglo){
    let boton = document.getElementById("boton");
    let contenedor = document.getElementById("InfoPedido");
    
    const fila = document.createElement("div");
    fila.setAttribute("class","row no-gutters justify-content-between text-center p-3");
    

    const colm_1 = document.createElement("div");
    colm_1.setAttribute("class","col-lg-6");
    const listado_1 = document.createElement("lu");
    listado_1.setAttribute("class","list-group-flush ml-auto p-2 text-left");
    for(var i = 0; i<(arreglo.length)/2;i++){
        let item = document.createElement("li");
        item.setAttribute("class","list-group-item color-cards");
        var parts = arreglo[i].split("=");
        let value = parts[1];
        if (value == null) {
            value = "null"
          }
        else {
            value = '"' + unescape(value.replace(/\+/g, ' ')) + '"';
        }
        item.textContent = parts[0] + ": "+value;
        listado_1.appendChild(item);
        
    }
    colm_1.appendChild(listado_1);

    const colm_2 = document.createElement("div");
    colm_2.setAttribute("class","col-lg-6");
    const listado_2 = document.createElement("lu");
    listado_2.setAttribute("class","list-group-flush ml-auto p-2 text-left");
    for(var i = Math.trunc(arreglo.length/2); i<(arreglo.length);i++){
        let item = document.createElement("li");
        item.setAttribute("class","list-group-item color-cards");
        var parts = arreglo[i].split("=");
        if (parts != null) {
            if (parts[1] == null) {
                item.textContent = parts[0] + ": null";
            }
            else {
                item.textContent = parts[0] + ": "+parts[1];
            }
        }

        listado_2.appendChild(item);
    }
    colm_2.appendChild(listado_2);

    fila.appendChild(colm_1);
    fila.appendChild(colm_2);
    
    contenedor.appendChild(fila);

    contenedor.className = "card mb-3 color-cards";

    boton.innerHTML="Ocultar informacion";
    boton.addEventListener("click",()=>{
        ocultarPedido(boton,contenedor,arreglo);
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
