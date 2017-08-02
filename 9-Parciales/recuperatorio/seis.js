function Mostrar()
{
    var peso;
    var contador=0;
    var bandera=true;
    var maxP
    var minP
    
    while (contador<50)
    {
        peso=parseInt(prompt("Ingrese los kilos"));
        contador++
        while (peso<0)
        {
            peso=alert ("solo numero mayores a 0")
        }
        if (bandera)
        {   
            maxP=peso;
            minP=peso;
            bandera=false;
        }
        else if(peso>maxP)
        {
            maxP=peso;
        }
        if(peso<minP)
        {
            minP=peso;
        }

      
    }
        alert ("El mas pesado es: "+maxP);
        alert ("El menos pesado fue: "+minP);


}
