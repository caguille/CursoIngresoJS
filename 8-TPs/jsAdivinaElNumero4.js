/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contador=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	
  numeroSecreto=Math.floor(Math.random()*100)+1;
  console.log (numeroSecreto);


}

function verificar()
{
	
  var numeroingresado=parseInt(document.getElementById("numero").value);
  document.getElementById("intentos").value=contador;
  contador=contador+1

if(numeroSecreto==numeroingresado)
{
  alert ("Usted es un ganador!!! y en solo "+contador+ "intentos");

}
else

      if (numeroingresado<numeroSecreto)
      {
          alert ("falta");

      }
      else {
       
        if (numeroingresado>numeroSecreto)
      
              alert ("se paso");
      }
  }


