// https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/

function md5Conv(formulario){
    if (formulario.msg.value == null || formulario.msg.value == "") {
        alert("Has de introducir una cadena, por favor.");
    }       
    else {
        alert("El Hash MD5 es: " + md5(formulario.msg.value));
    }
}