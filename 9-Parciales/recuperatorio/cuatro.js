function Mostrar()
{
    var numeroUno= parseInt(prompt ("Ingrese un numero"));
    var numeroDos= parseInt(prompt("Ingrese otro numero"));
    var suma =numeroUno+numeroDos;
    if (suma>0)
    {
        document.write("la suma es positiva:"+suma);
    }
    else if (suma<0)
    {
        document.write(suma);
    }
    if(suma==0)
    {
        document.write(suma);
    }
}   
