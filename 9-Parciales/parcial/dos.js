function Mostrar()
{
    var importe = parseInt (prompt ("ingrese un importe"));
    var iva=(importe*0.21);
    var resultado= importe + iva;
    document.getElementById("importeFinal").value=resultado;

  
}
