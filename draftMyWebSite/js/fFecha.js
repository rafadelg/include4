var separador=":";
function hora() {
	var fechaHora = new Date();
	var horas = fechaHora.getHours();
	var minutos = fechaHora.getMinutes();
	if(horas < 10) { horas = '0' + horas; }
	if(minutos < 10) { minutos = '0' + minutos; }
	separador == ":" ? separador = " " : separador = ":";
	document.getElementById('hora').firstChild.nodeValue = horas+separador+minutos;
	setTimeout(hora, 1000);
}

/*
var separador=":";
function hora() {

	var fecha = new Date();
	var hora = fecha.getHours();
	var minuto = fecha.getMinutes();
	var meridiano = " am";
	
	if(hora > 12){hora -= 12; meridiano = " pm";}
	//if (hora < 10) {hora = "0" + hora;}
	if (minuto < 10) {minuto = "0" + minuto;}
	separador == ":" ? separador = " " : separador = ":";
	var laHora = hora + separador + minuto + meridiano;

	document.getElementById('hora').firstChild.nodeValue = laHora;
	tiempo = setTimeout('hora()',1000);
}
*/