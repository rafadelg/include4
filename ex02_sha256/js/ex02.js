/* nodejs
        var forge = require("node-forge");
        var md = forge.md.sha256.create();
        md.update(formulario.msg.value);
        alert("El Hash SHA-256 es: " + md.digest().toHex());
    */

function sha256Conv(formulario){
    if (formulario.msg.value == null || formulario.msg.value == ""){
        alert("Has de introducir una cadena, por favor.");
    }       
    else{
        var var_sha256 = sha256(formulario.msg.value)
        alert("El Hash SHA-256 es: " + var_sha256);
        alert("Y el md5 de " + var_sha256 + " \n\nes: " + md5(var_sha256));
    }
}

/* Observaciones:
VT: https://cdn.jsdelivr.net/gh/emn178/js-sha256/build/sha256.min.js
    Bfore.Ai PreCrime, Malicious
    CRDF, malicius

Malicious
    https://bfore.ai/
    https://www.crdf.fr/
*/