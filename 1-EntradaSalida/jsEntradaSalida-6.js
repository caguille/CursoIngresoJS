/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var numerouno= parseInt (document.getElementById("numeroUno").value);
    var numerodos= parseInt (document.getElementById("numeroDos").value);
    
var suma= numerouno+numerodos;
alert (suma);

}

