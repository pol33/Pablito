function mostrar(){


var numUno;
var numDos;
var salida;

	numUno=prompt("Ingrese un  numero");
	numDos=prompt("Ingrese otro numero");

	if (numUno==numDos)
	 {
	 	salida=numUno+numDos;
	 }
	 else
	 {
	 	numUno=parseInt(numUno);
	 	numDos=parseInt(numDos);

	 	if (numUno>numDos)
	 	 {
	 	 	salida=numUno-numDos;
	 	 }
	 	 else
	 	 {
	 	 	salida=numUno+numDos;
		 }
	 	 	if (salida>10)
	 	 	 {
	 	 	 	salida="La suma es "+salida+" y supero el diez."
	 	 	 }
	 	 }	
	 			alert(salida);
	 		}