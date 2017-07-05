function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch (mesDelAño)
{
    case "Febrero":
    alert ("si tiene 28 dias");
    break;
    case "Abril":
    case "Septiembre":
    case "Junio":
    case "Nobiembre":
    alert ("si tienen 30 dias");
    break;
    default:
    alert ("tienen 31 dias");
    

}	




}//FIN DE LA FUNCIÓN