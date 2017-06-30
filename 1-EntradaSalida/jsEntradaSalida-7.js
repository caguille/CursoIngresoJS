/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numerouno= parseInt (document.getElementById("numeroUno").value);
    var numerodos= parseInt (document.getElementById("numeroDos").value);
    
var suma= numerouno+numerodos;
alert (suma);
}

function restar()
{
    var numerouno= parseInt (document.getElementById("numeroUno").value);
    var numerodos= parseInt (document.getElementById("numeroDos").value);
    
var suma= numerouno-numerodos;
alert (suma);
	
}

function multiplicar()
{ 
    var numerouno= parseInt (document.getElementById("numeroUno").value);
    var numerodos= parseInt (document.getElementById("numeroDos").value);
    
var suma= numerouno*numerodos;
alert (suma);
	
}

function dividir()
{
    var numerouno= parseInt (document.getElementById("numeroUno").value);
    var numerodos= parseInt (document.getElementById("numeroDos").value);
    
var suma= numerouno/numerodos;
alert (suma);
	
}

