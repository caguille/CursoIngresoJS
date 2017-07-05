function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

switch (mesDelAño)
{
    case "Julio":
    alert ("Abrigate que hace frio");
    break;

    case "Agosto":
    alert ("Abrigate que hace frio");
    break;

    case"Septiembre":
    case"octubre":
    case"Noviembre":
    case"Diciembre":
    alert("Ya pasamos el frio, ahora calor!!!");
    break;

    default:
    alert ("Falta para el invierno");
    
    



}



}//FIN DE LA FUNCIÓN