function Mostrar()
{

	var contador=0;
	// declarar variables
	var num
	var numMax;
	var numMin;
	var respuesta="si";
	var bandera=true

	while(respuesta!="no")
	{
		num=prompt ("ingrese un numero")
		num=parseInt(num);
		respuesta=prompt ("desea ingresar otro numero:?")
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
	
	


document.getElementById('maximo').value=numMax;
document.getElementById('minimo').value=numMin;

}

	

//FIN DE LA FUNCIÓN