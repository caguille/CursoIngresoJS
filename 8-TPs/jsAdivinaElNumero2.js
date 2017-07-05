/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
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
	

}