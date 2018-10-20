window.onload = function(){
alertMsg()
   
}
var alertMsg = function(){
    setTimeout(function(){
        let divMsg = `<div id='alert'>
                                
        <div id='alert-msg'>
        <h2>Bienvenido</h2>
        <p>Esta web esta hecha solo como practica, la informacion y contenido no tiene ninguna validez ni sentido dentro de la misma,gracias por visitarla pulse aceptar para continuar</p>
        <button id='btn-alert' style='color:white; background:gray;' class='btn-large' onclick='exit()' value='aceptar'>Aceptar</button>
        </div>
        </div>`
        document.body.innerHTML +=  divMsg
    },1000);
}

var exit = function(){
    var alertMsg = document.querySelector('#alert')
    alertMsg.style.display='none'
}