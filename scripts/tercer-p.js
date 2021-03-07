document.getElementById("menor").addEventListener("click", function()
{
    let menores = [];
    for (let i = 1; i<=10; i++)
    {
        let numero  = parseFloat(prompt("Ingrese un numero"));
        if (numero < 0)
            menores.push(numero);
    }
    document.getElementById("resultado-menores").innerText = "Los numeros menores a cero son: " + menores;
})
