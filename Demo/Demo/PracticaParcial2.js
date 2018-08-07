	function CalculosUno()

	{
				var numero;
				var numeroDivisores=0;
				var numeroPares=0;
				var numeroImpares=0;
				var promedio;
				var promedioSuma;
				var promedioResta;
				var sumaNumeros=0;
				var contador=0;
				var negativos=0;
				var pocitivos=0;
				var sumaPocitivos=0;
				var sumaNegativos=0;
				var ceros=0;
				var codigo;

					while(contador<2)
					{
						contador++;
						numero=prompt("Ingrese un numero.");
						numero=parseInt(numero);
						while(isNaN(numero)||(numero>100||numero<1))
						{
							numero=prompt("Error!!!.Ingrese un numero entre 1 y 100.")
							numero=parseInt(numero);

						}
						codigo=prompt("Ingrese codigo");
						codigo=parseInt(codigo);
						while(isNaN(codigo))
						{
							codigo=prompt("Error ingrese codigo")
							codigo=parseInt(codigo);
						}

						sumaNumeros+=numero;
						if (numero==0)
						 {
						 	ceros++;
						 }
						else
						 {
						 	if(numero<0)
						 	{ 	
						 		negativos++;
						 		sumaNegativos+=numero;
						 
						 	}
						 	else
						 		{

						 			pocitivos++;
						 			sumaPocitivos+=numero;
						 		}
						 }
							
						if(numero>0&&numero%2==0)
						{
							numeroPares++;
						}
						else
						{
							numeroImpares++;
						}
							 	
							 	
											 		
						
		}
							//promedioSuma=sumaNumeros/contador;
							//promedioResta=sumaResta/contador;



							/*document.write("a)Numero ingresado:  "+numero+"<br>");
							document.write("b)Numeros pares:  "+numeroPares  +"<br>");
							document.write("c)Numeros impares:  "+numeroImpares+"<br>");
							document.write("d)Cantidad de ceros:  "+ceros+"<br>");
							//document.write("e) "+prome+>br>dioSum+>br>a);
							//document.write("f) "+prome+>br>dioSum+>br>a);
							//document.write("g) "+prome+>br>dioRes+>br>ta);
							document.write("g)El codigo ingresado es: "+codigo+"<br>");*/
							alert(codigo);
							document.getElementById('numero').value=codigo;

}

function tirada()

	{
		var dado;
		var numeroRandom;
		var pregunta;
		var intentos=0;
		var mensaje;
		var mensaje2;
		var contador=0;
		var res;

				pregunta=prompt("Desea iniciar la jugada?s/n");

				while(pregunta!="s"){ 
				pregunta=prompt("precione s para iniciar jugada");
			      }

		if(pregunta=="s")
		{  

							numeroRandom=Math.floor(Math.random() * 5) + 1;
							//alert(numeroRandom);
						

						dado=prompt("Que numero salio para usted?")
						dado=parseInt(dado);

						while(isNaN(dado)){ 
						dado=prompt("Dato incorrecto tiene que digitar un numero!!!")
						dado=parseInt(dado);
							}

						while(intentos<2)
						{

				  			

									if (dado==numeroRandom)
									 {
									 	alert("Muy bien acerto!!!");
									 	break;
									 }
									 
									 else
									 	{
									 		
									 		dado=prompt("No acerto siga intentando")
											dado=parseInt(dado);

											while(isNaN(dado)){ 
									 		dado=prompt("¿Usted es despistado? digite un numero por favor.")
											dado=parseInt(dado);
											}

									 	}

									 	intentos++;

						}
		

		if (intentos==2&&dado!=numeroRandom)
		 {
		 	alert("Usted es de terror no acerto ninguno de 3 intentos");
		 }
		 else
		 {
		 	if (intentos==2&&dado==numeroRandom)
		 	 {
		 	 	alert("Felicitaciones acerto en el ultimo intento!!!")
		 	 }
		 }

		}
		 
		 


	}






		/*var mensaje;
		//var numero=0;
		


		
		 
		 	mensaje=prompt("ESTE ES UN MENSAJE!!!");
		 
		 //alert(mensaje);
		 document.getElementById("numero").value=mensaje;







}*/
