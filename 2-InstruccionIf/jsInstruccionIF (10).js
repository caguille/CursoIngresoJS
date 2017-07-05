function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota= parseInt (Math.random()*10)+1;
	if (nota ==9|| nota ==10)
	{
		alert ("EXCELENTE");
	}
		else
		{
			if (nota>4)
			{
				alert ("APROBADO");
			}
			else
			{
				alert ("vamos,que la proxima se puede")
			}
		}
	    

}//FIN DE LA FUNCIÓN