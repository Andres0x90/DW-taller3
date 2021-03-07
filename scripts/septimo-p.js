function getSumaMultiplos(num1, num2, size)
{
    let sumMult = 0;

    for (let i = 1; i <= size; i++)
    {
        if (i % num1 == 0 && i % num2 == 0)
            sumMult += i;
    }

    return sumMult;
}

document.getElementById("suma-num-p").addEventListener("click", function()
{
    num1 = parseInt(prompt("Ingrese un numero"));
    num2 = parseInt(prompt("Ingrese otro numero"));
    size = parseInt(prompt("Ingrese el valor limite para calcular multiplos"));

    if (num1 > 0 && num2 > 0 && size > 0)
        document.getElementById("resultado-sum-multiplos").innerHTML = "La suma de los multiplos de " + num1 +
        " y " + num2 + " entre 1 y " + size + " es: " + getSumaMultiplos(num1, num2, size);
    else
        alert("Por favor ingrese valores superiores a cero");
})