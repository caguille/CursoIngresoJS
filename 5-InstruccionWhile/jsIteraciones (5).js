function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
while (sexo!="f"&&sexo!="m" )   
{
   sexo= prompt("ingrese f ó m .");
}
if (sexo==f)
{
    sexo = femenino;
    document.getElementById('Sexo').value=sexo;

}
    else
    {
        sexo = masculino;
        document.getElementById('Sexo').value=sexo;
    }


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN