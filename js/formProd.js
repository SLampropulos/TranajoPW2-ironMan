

    
crearForm();
agregarDatos();


function crearForm(){
    var textoConsulta= `Se hace consulta sobre el producto ${document.getElementById('Producto').innerHTML}`;
    const texto_HTML = `
    <h2>Formulario de compra</h2>
    <form action="infoEnviada.html">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputNombre">Nombre/s</label>
                <input type="text" name="Nombre" class="form-control" id="inputNombre" placeholder="Stan" required>
            </div>
            <div class="form-group col-md-6">
                <label for="inputApellido">Apellido/s</label>
                <input type="text" name="Apellido" class="form-control" id="inputApellido" placeholder="Lee" required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputMail">Mail</label>
                <input type="email" name="Mail" class="form-control" id="inputMail" placeholder="nombre@gmail.com" required>
            </div>
            <div class="form-group col-md-2">
                <label for="inputProvincia">Fecha de entrega</label>
                <input type="date" name="fechaEntrega" class="form-control" id="inputFecha" required>
            </div>
            <div class="form-group col-md-2">
                <label for="inputCantProd">Cantidad de Prodcuto</label>
                <input type="number" name="cantProduto" class="form-control" id="inputCantProd" value="1" required>
            </div>
    
        </div>
        <div class="form-group">
            <label for="inputAddress2">Direccion</label>
            <input type="text" name="Direccion" class="form-control" id="inputAddress" placeholder="calles 123" required>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputProvincia">Provincia</label>
                <input type="text" name="Provincia" class="form-control" id="inputProvincia" required>
            </div>
            <div class="form-group col-md-4">
                <label for="inputCiudad">Ciudad</label>
                <input type="text" name="Ciudad" class="form-control" id="inputCiudad" required>
            </div>
            <div class="form-group col-md-2">
                <label for="inputCodPostal">Codigo postal</label>
                <input type="text" name="CodigoPostal" class="form-control" id="inputCodPostal" required>
            </div>
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Dejanos un mensaje</label>
            <textarea class="form-control" name="texto" id="exampleFormControlTextarea1" rows="4">${textoConsulta}</textarea>
        </div>
        <div class="form-group d-none">
            <input name="producto" value="${document.getElementById('Producto').innerHTML}"></input>
        </div>
    
        <button id="envioForm" type="submit" class="btn btn-primary btn-lg btn-block mt-3 color-principal">Enviar</button>
    </form>
    
    `;
    
    document.getElementById("formProd").innerHTML = texto_HTML;    
}

function agregarDatos(){
    var usuario = localStorage.getItem("usuario");
    usuario = JSON.parse(usuario);
    document.getElementById("inputNombre").value = usuario.nombre;
    document.getElementById("inputApellido").value = usuario.apellido;
    document.getElementById("inputMail").value = usuario.mail;
}