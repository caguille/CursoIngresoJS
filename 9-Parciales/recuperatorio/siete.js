function Mostrar()
{
    var edades;
    var sexo;
    var contador=0;
    var promedio;
    acumulador=0;
    var bandera=true;
    var alta
    var baja
    var Vmayores=0
    while (contador<5)
    {
        edades=parseInt (prompt("ingrese una edad entre 0 y 100"));
        sexo=prompt ("ingrese el sexo");
        contador++;
        acumulador+=edades;
        while (edades<0||edades>100)
        {
            alert ("no no, solo de 0 a 100");
            break;
        }
        while (sexo!="f"&&sexo!="m")
        {
            alert ("es facil, f o m");
            break;
        }
        if (bandera)
        {
            alta=edades;
            baja=edades;
            bandera=false;
        }
        else if (edades<baja)
        {
            baja=edades;
        }
        if(sexo=="m"&&edades>=20)
        {
            Vmayores++;

        }


    }
    promedio=acumulador/5;
    alert ("el promedio es: "+promedio);
    alert ("La edad mas baja es: "+baja);
    alert ("Los varones mayores de 20 son: "+Vmayores)
}
