function Mostrar()
{
	var contador=0;
	var acumulador=0;
while (contador<5)
{
	contador++;
	acumulador=prompt ("ingrese un numero");
	acumulador= parseInt (acumulador);
	while (isNaN (acumulador))
	{
		acumulador=prompt ("no es un numero");
	}
	acumulador= acumulador+contador;
}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN