	
	function Numeros()
	{ 

	var numero;
	var numeroMax;
	var numeroMin;
	var numerosPares=0;
	var numerosImpares=0;
	var respuesta;
	var contador=0;


	while(respuesta!="No")
	{
		numero=prompt("Ingrese un numero")
		numero=parseInt(numero);
		while(isNaN(numero))
		{ 

			numero=prompt("Error")
			numero=parseInt(numero);

		}
		if(numero%2==0)
			{
				numerosPares++;
			}
		else
			{
				numerosImpares++;
			}




		respuesta=prompt("Desea continuar?");
	}


document.write(""+numerosPares+"<br>");
document.write(""+numerosImpares+"<br>");
document.write(""+numero+"<br>");

}

function NumerosPrimos()
{
	var presionar;
	var numero="Usted es una forra";

	//precionar=document.getElementById('precionar').value;
	precionar=prompt("Digite su nombre");

	document.getElementById('elNumero').value=precionar;







}