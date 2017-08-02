function Mostrar()
{
    var precio1= parseInt(document.getElementById("precioUno").value);
    var precio2= parseInt(document.getElementById("precioDos").value);
    var precio3= parseInt(document.getElementById("precioTres").value);
    var promedio=(precio1+precio2+precio3)/3;
    var suma=precio1+precio2+precio3;
    alert ("La suma de los 3 precios es:"+suma);
    alert ("El promedio de los tres precios es:"+promedio);
}
