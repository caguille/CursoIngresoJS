function Mostrar()
{
	//declarar contadores y variables 
	var respuesta=true;
	var num;
	var aneg=0;
	var apos=0;
	var contpos=0;
	var contneg=0;
	var contpar=0;
	var contceros=0;
	while(respuesta==true)
	{
		num=prompt ("ingrese un numero")
		num=parseInt (num);
	if(num<0)
	{
		aneg+=num;
		contneg++;
	}
	else if (num>0)
	{
		apos+=num;
		contpos++;
	}
	else
	{
		contceros++;

	}
	if (num % 2 ==0)
	{
		contpar++;
	}
	}

document.write ("" )


	





}//FIN DE LA FUNCIÓN