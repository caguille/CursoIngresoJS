function Mostrar()
{
    var num;
    var respuesta="si";
    var pares=0
    var promedio;
    var suma;
    var Nmax;
    var Nmin;
    var acumulador=0;
    var bandera=true;
    var contador=0;
    while (respuesta!="no")
    {
        num= parseInt(prompt ("ingrese numeros positivos"));
        respuesta= prompt ("¿Desea ingresar otro numero?");
        acumulador+=num;
        contador++;
        while(num<0)
        {
            alert ("solo numeros positivos")
            break;
        }
        if (num % 2 == 0)
        {
            pares++;
        }
        if (bandera)
        {
            Nmax=num;
            Nmin=num;
            bandera=false;
        }
        else if (num>Nmax)
        {
            Nmax=num;
        }
        if (num<Nmin)
        {
            Nmin=num;
        }
       

    }
       promedio= acumulador/contador;
       document.write ("</br> A La cantidad de numeros pares es: "+pares);
       document.write ("</br> B El promedio de los numeros ingresados e: "+promedio);
       document.write ("</br> C La suma de todos los numeros es: "+acumulador);
       document.write ("</br> D El numero maximo es: "+Nmax+ " y el numero minimo es: "+Nmin);


}
