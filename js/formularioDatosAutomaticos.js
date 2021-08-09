
setDatos();


function setDatos(){
    var usuario = localStorage.getItem("usuario");
    
    if(usuario!=null){
        usuario = JSON.parse(usuario);
        document.getElementById("inputNombre").value = usuario.nombre;
        document.getElementById("inputApellido").value = usuario.apellido;
        document.getElementById("inputMail").value = usuario.mail;
    }
}