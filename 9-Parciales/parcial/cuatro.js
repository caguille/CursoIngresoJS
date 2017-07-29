function Mostrar()
{
    var num1=parseInt (prompt("ingrese un numero"));
    var num2=parseInt (prompt("ingrese otro numero"));
    var resultado
    if (num1==num2)
    {
        resultado=num1*num2;
        document.write (resultado);
    }
    else if (num1>num2)
    {
        resultado =num1-num2;
        document.write (resultado);
    }
    else
    {
        resultado= num1+num2;
        document.write (resultado);

    }
    
}
