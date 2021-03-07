function getFactorial(num)
{
    if (num == 1)
        return 1;
    else
        return num * getFactorial(num-1);
}

document.getElementById("factorial").addEventListener("click", function()
{
    let num = parseInt(prompt("Ingrese un numero"));
    if (num > 0)
        document.getElementById("resultado-factorial").innerHTML = "El factorial de " + num + " es: " + getFactorial(num);
    else
        alert("Por favor ingrese un numero mayor a cero");
})