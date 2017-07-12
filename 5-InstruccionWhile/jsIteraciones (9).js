function Mostrar()
{

	var contador=0;
	// declarar variables
	var num
	var numMax;
	var numMin;
	var respuesta=true;
	var bandera=true

	while(respuesta==true)
	{
		num=prompt ("ingrese un numero")
		num=parseInt(num);
		while (isNaN (num))
		{
			num=prompt ("no es un numero");

		}
		if (bandera)
		{
			numMax=num;
			numMin=num;
			bandera=false;
		}
		else{
			if(num>numMax)
			{
				numMax=num;
			}
			if (num<numMin)
			{
				numMin=num;
			}
			}
	}
	respuesta=confirm (respuesta==false);
	


document.getElementById('maximo').value=numMax;
document.getElementById('minimo').value=numMin;

}

	

//FIN DE LA FUNCIÓN