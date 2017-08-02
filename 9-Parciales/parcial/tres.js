function Mostrar()
{
    var largo=parseInt (document.getElementById("alrgo").value);
    var ancho=parseInt (document.getElementById("ancho").value);
    var alambre = (largo*ancho)*3;
    alert ("se necesitan los siguiente metros de alambre:"+alambre);
}
