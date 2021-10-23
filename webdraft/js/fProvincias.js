
var aProvincias = new Array("Álava", "Albacete", "Alicante", "Almería", "Ávila", "Badajoz",
"Baleares", "Barcelona", "Burgos", "Cáceres", "Cádiz", "Castellón", "Ciudad Real",
"Córdoba", "Coruña", "Cuenca", "Girona", "Granada", "Guadalajara", "Guipuzcoa",
"Huelva", "Huesca", "Jaén", "León", "Lleida", "Rioja", "Lugo", "Madrid", "Málaga",
"Murcia", "Navarra", "Orense", "Asturias", "Palencia", "Las Palmas", "Pontevedra",
"Salamanca", "Tenerife", "Cantabria", "Segovia", "Sevilla", "Soria", "Tarragona",
"Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza", "Ceuta",
"Melilla");

document.write(arr.provincia
document.write("<br/>");
document.write(arr[provincias]);


var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

function cambiaProvincia(){ 
    //tomo el valor del select del pais elegido 
    var cod 
    cod = document.f1.pais[document.f1.pais.selectedIndex].value 
    //miro a ver si el pais está definido 
    if (cod != 0) { 
        //si estaba definido, entonces coloco las opciones de la provincia correspondiente. 
        //selecciono el array de provincia adecuado 
        mis_provincias=eval("provincias_" + cod) 
        //calculo el numero de provincias 
        num_provincias = mis_provincias.length 
        //marco el número de provincias en el select 
        document.f1.provincia.length = num_provincias 
        //para cada provincia del array, la introduzco en el select 
        for(i=0;i<num_provincias;i++){ 
            document.f1.provincia.options[i].value=mis_provincias[i] 
            document.f1.provincia.options[i].text=mis_provincias[i] 
        }	
    }else{ 
        //si no había provincia seleccionada, elimino las provincias del select 
        document.f1.provincia.length = 1 
        //coloco un guión en la única opción que he dejado 
        document.f1.provincia.options[0].value = "-" 
        document.f1.provincia.options[0].text = "-" 
    } 
    //marco como seleccionada la opción primera de provincia 
    document.f1.provincia.options[0].selected = true 
}

