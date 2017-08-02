function Mostrar()
{
    var mes=prompt ("ingrese un mes");
    switch (mes)
    {
        case "diciembre":
        alert ("Se vienen las fiestas");
        break;
        case "enero":
        alert ("comienza el año");
        break;

        case "febrero":
        case "marzo":
        case "abril":
        case "mayo":
        case "junio":
        case "julio":
        case "agosto":
        case "septirmbre":
        case "octubre":
        case "nobiembre":
        alert ("no es enero, ni diciembre");
        break;
    }

}
