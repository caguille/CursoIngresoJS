function Mostrar()
{
    var importe= parseInt (prompt ("Ingrese el Importe"));
    var descuento=(importe*0.25);
    var resultado= importe-descuento;
    document.getElementById("importeFinal").value=resultado;
  
}
