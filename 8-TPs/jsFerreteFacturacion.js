/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno = parseInt (document.getElementById("PrecioUno").value);
    var precioDos = parseInt (document.getElementById("PrecioDos").value);
    var precioTres = parseInt (document.getElementById("PrecioTres").value);
    var suma = precioUno+precioDos+precioTres;

    alert ("la suma de los 3 precios es:"+suma);
    
	
}
function Promedio () 
{
    var precioUno = parseInt (document.getElementById("PrecioUno").value);
    var precioDos = parseInt (document.getElementById("PrecioDos").value);
    var precioTres = parseInt (document.getElementById("PrecioTres").value);
    var suma = (precioUno+precioDos+precioTres);
    suma = suma/3
    alert ("el promedio de los trs:"+suma);
	
}
function PrecioFinal () 
{
	var precioUno = parseInt (document.getElementById("PrecioUno").value);
    var precioDos = parseInt (document.getElementById("PrecioDos").value);
    var precioTres = parseInt (document.getElementById("PrecioTres").value);
    var suma = (precioUno+precioDos+precioTres);
    suma = suma+(suma*0.21);
    alert ("los precios con iva son:"+suma);
}