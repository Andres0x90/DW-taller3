let date = new Date();
let fecha = date.getFullYear() + "/" + (date.getUTCMonth() + 1) + "/" + date.getDate();
document.getElementById("fecha-hora").innerHTML = "<p>Fecha actual: " + fecha + "</p>";
let hora = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
document.getElementById("fecha-hora").innerHTML += "<p>Hora actual: " + hora + "</p>";
