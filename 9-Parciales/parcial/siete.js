function Mostrar()
{
    var notas;
    var sexo;
    var contador=0;
    var acumulador=0;
    var max;
    var min;
    var aprobados=0;
    var promedio;
    var bandera=true;
    while (contador<10)
    {
        notas= parseInt (prompt ("ingrese notas"));
        sexo= prompt ("ingreso sexo");
        contador++
        acumulador+=notas;
        
        while (notas<0 || notas>10)
        {
            notas=parseInt (prompt ("solo numeros del 0 a 10"));
        }
        while (sexo !="f"&& sexo !="m")
        {
            sexo=prompt ("ingrese f o m");
        }
       if (bandera)
    	{
            max=notas;
            min=notas;
            bandera=false;
        }
        else if (notas>max)
        {
            max=notas;
        }        
        else if (notas<min)
        {
            min=notas;
        }
    if (sexo == "m" && notas>=6)
        {
            aprobados++;
        }    
        
    }   
        promedio=acumulador/10; 
        alert ("el promedio de la notas es :"+promedio);
        alert ("la nota mas baja es:"+min);
        alert ("La cantidad de varones aprobados es:"+ aprobados);

}
