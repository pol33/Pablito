
	var res;
	var numero;
	var mayor;
	var menor;
	var aux="0";
	do{
		numero=prompt("Escriba un numero");
		numero=parseInt(numero);
	
		if(numero>mayor||aux=="0"){
		mayor=numero;
		}
		if(numero<menor||aux=="0"){
		menor=numero;
		aux="1";		
	    }
	    res=prompt("Desdea continuar");


  	}while(res=="s");

	alert("El mayor es "+mayor+" y el menor es "+menor);



