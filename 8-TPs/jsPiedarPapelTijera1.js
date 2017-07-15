/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var contadorE=0
var contadorP=0
var contadorG=0
var resultado
function comenzar()
{
	eleccionMaquina=Math.floor(Math.random()*(4-1))+1;
  console.log (eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{
    comenzar();
switch (eleccionMaquina=1)
    {
        case 1:
            resultado= "empate";
            contadorE++
            mostrarResultado()
        break;
        case 2:
            resultado= "perdio";
            contadorP++
            mostrarResultado()
        break;
        case 3:
            resultado ="ganaste";
            contadorG++
            mostrarResultado()
        break;    
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    comenzar();
switch (eleccionMaquina=2)
    {
        case 1:
            resultado= "empate";
            contadorE++
            mostrarResultado()
        break;
        case 2:
            resultado= "perdio";
            contadorP++
            mostrarResultado()
        break;
        case 3:
            resultado ="ganaste";
            contadorG++
            mostrarResultado()
        break;    
    }
                
}//FIN DE LA FUNCIÓN
function tijera()
{
        comenzar();
        switch (eleccionMaquina=3)
    {
        case 1:
            resultado= "empate";
            contadorE++
            mostrarResultado()
        break;
        case 2:
            resultado= "perdio";
            contadorP++
            mostrarResultado()
        break;
        case 3:
            resultado ="ganaste";
            contadorG++
            mostrarResultado()
        break;    
    }
                

}//FIN DE LA FUNCIÓN
function mostrarResultado()
{
    alert ( "usted empató_" +contadorE+ "usted perdio_"+ contadorP+ "usted gano_"+ contadorG);

}