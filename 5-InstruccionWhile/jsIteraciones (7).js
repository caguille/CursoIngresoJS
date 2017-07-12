function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	if (contador=="si")
	{
		contador++
		acumulador=prompt("desea ingresar otro numero?")
		acumulador=parseInt(acumulador);
}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN