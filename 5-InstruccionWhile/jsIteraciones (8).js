function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
while (respuesta == true)
{
	acumulador=prompt ("ingrese un numero");
	acumulador=parseInt (acumulador);

	if (numero>0)
	{
		positivo+=acumulador;
	}
	else 
	{
		negativo*=acumulador
	}
	respuesta=confirm ("no")
	}
}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN