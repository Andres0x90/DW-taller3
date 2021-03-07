let calculo = 24 - date.getDate() + (30 * (12 - (date.getMonth() + 1)));
if (calculo < 0)
    calculo += 365; 
document.getElementById("segundo-p").innerHTML = "<p>Entre el 24 de diciembre y hoy hay " + calculo + " dias de diferencia</p>";