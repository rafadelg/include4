
function comprobarClave() {
	var verLargo="no";
	var verIgual="no";
	var pwd1 = document.formulario.clave1;
	var pwd2 = document.formulario.clave2;
	var aviso= document.getElementById("aviso");
	aviso.innerHTML = "";
	
	if (pwd1.value.length >= 6 && pwd2.value.length >= 6) {
 		verLargo = "si";
	}
	else {
		texto = "La contraseña debe tener más de 6 caracteres.<br/>";
		aviso.innerHTML += texto;
	}
	if (pwd1.value == pwd2.value) {
		verIgual = "si";
	}
	else {
		texto = "La contraseña y su repetición deben coincidir.<br/>";
		aviso.innerHTML += texto;
	}
	if (verLargo == "no" || verIgual == "no") {
		return false;
	}
}

function restaurar() {
	var aviso = document.getElementById("aviso");
	aviso.innerHTML = "";
}

