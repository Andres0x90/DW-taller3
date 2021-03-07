function isPrimo(num, cont)
{
    if (cont > 1)
    {
        if (num % cont == 0)
            return false;
        else
            return isPrimo(num, cont-1);
    }
    else
    {
        return true;
    }
}

document.getElementById("primo").addEventListener("click",function()
{
    let num = parseInt(prompt("Ingrese un numero"));
    if (num > 0 )
    {
        if (isPrimo(num, num-1))
            document.getElementById("resultado-primo").innerHTML = "El numero " + num + " es primo";
        else
            document.getElementById("resultado-primo").innerHTML = "El numero " + num + " no es primo";
    }
    else
    {
        alert("Por favor ingrese un numero mayor a cero");
    }

})