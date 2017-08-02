function Mostrar()
{
var numero;
var bandera=true;
var respuesta="si";
var acumulador=0;
var contador=0;
var promedio;
var bandera=true;
var max;
var min;
var pares=0;

  while (respuesta!="no")
    {
    numero=parseInt(prompt ("Ingrese numeros"));
    respuesta=prompt("desea seguir ingresando?");
    acumulador+=numero;
    contador++
     while (numero<0)
     {
        alert ("solo numero positivos");
        break;
     }
           if (numero %2==0)
           {
               pares++;
           }
           if (bandera)
           {
               max=numero;
               min=numero;
               bandera=false;
           }
           else if(numero>max)
           {
               max=numero;
           }
           if (numero<min)
           {
               min=numero;
           }

    }
    promedio=acumulador/contador;
    document.write("</br> A..La cantidad de numero pares es: "+pares);
    document.write("</br> B..El Promedio de los numeros es: "+promedio);
    document.write("</br> C..La suma de los numeros es: "+contador);
    document.write("</br> D..El numero maximo es: "+max+" y el minimo es: "+min);
}
