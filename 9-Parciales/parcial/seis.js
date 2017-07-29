function Mostrar()
{
    var importe;
    var contador=0;
    var mayorim;
    var menorim;
    var bandera=true;
   while(contador<5)
   {
        importe= prompt ("ingrese un numero");
        contador++;
        while (importe<0)
        {
        importe =prompt ("ingrese un numero mayor a 0");
    
        }
        if (bandera)
        {
            
            mayorim=importe;
            menorim=importe;
            bandera=false;
        }
        else if (importe>mayorim)
            {
                mayorim=importe;
            }
        else if (importe<menorim)
            {
                menorim=importe;

           }
        
        

   } 
   alert ("el numero mayor ingresado es:"+mayorim);
   alert ("el numero menor ingresado es:"+menorim);
}
