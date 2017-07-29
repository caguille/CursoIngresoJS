function Mostrar()
{
    var importe = parseInt (prompt ("ingrese un importe"));
    var iva= importe +(importe*0.21);
    document.getElementById("importeFinal").value=iva;

  
}
