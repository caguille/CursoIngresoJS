function Mostrar()
{
	//declarar contadores y variables 
	var respuesta="si";
	var num;
	var aneg=0;
	var apos=0;
	var contpos=0;
	var contneg=0;
	var contpar=0;
	var contceros=0;
	while(respuesta!="no")
	{
		num=prompt ("ingrese un numero");
		num=parseInt (num);
		respuesta=prompt ("Desea ingresar otro numero:?");
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
	var Prompos = apos/contpos;
	var promneg = aneg/contneg;

document.write ("<br> 1_la suma de los negativos es:"+aneg);
document.write ("<br> 2_la suma de los positivos es:"+apos);
document.write ("<br> 3_la cantidad de los positivos es:"+contpos);
document.write ("<br> 4_la cantidad de los negativos es:"+contneg);
document.write ("<br> 6_la cantidad de numeros pares:"+contpar);
	





}//FIN DE LA FUNCIÓN