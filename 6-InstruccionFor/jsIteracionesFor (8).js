function Mostrar()
{
 var numero= parseInt (prompt ("ingrese un numero y le dire los pares"));
    var cont=0;
    for (i=1;i<=numero;i++)
    {
        if (numero%i==0)
        {
            cont++;
            if (cont>2)
            {
                break;
            }
        }
    }    
    if(cont==2)
    {
        alert ("es numero primo")
    }    
    else
    {
            alert ("no es primo")
    }




}//FIN DE LA FUNCIÓN