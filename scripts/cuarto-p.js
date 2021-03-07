let table = "<tbody>";
for (let i = 1; i <= 12; i++)
{
    table += "<tr><td>" + i + "</td>";
    for (let j=1; j <= 12; j++)
    {
        table += "<td>" + i*j + "</td>";  
    }
    table += "</tr>";
}
table += "</tbody>";
document.getElementById("tablas").innerHTML += table;