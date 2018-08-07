function Mostrar()
{
	var nota;
	var mensaje1;
	var mensaje2;
	var mensaje3;
	var contador=0;

	nota=document.getElementById('Entrada').value;

	switch(nota)
		{
			case "1":
			alert("PRIMER MENSAJE");
			//break;
			case "2":
			alert("SEGUNDO MENSAJE");
			//break;
			case "3":
			alert("TERCER MENSAJE");
			case "4":
			contador++;
		}	

		if (contador>0)
		 {
		 	alert("Paso el contador "+contador);

		 	function MostrarResultado()
{
			document.getElementById('Resultado').value=contador;
}
		 }
		 else
		 {
		 	alert("No Paso.");
		 }

}

function MostrarResultado()
{
	document.getElementById('Resultado').value=contador;
}